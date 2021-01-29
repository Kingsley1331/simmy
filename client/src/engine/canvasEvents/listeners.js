import getMousePos, { calculateDistanceFromCursor } from "../utils/position";
import { makeThrowArray } from "../utils/throw";
import {
  detectShape,
  createShape,
  shapeSelection,
  forEachShape,
  prepareToMoveShape,
  releaseShape,
  createShapeFromPolyline,
  updatePhysicsProperties
} from "../shapes/shapes";
import ShapesController from "../shapes/ShapesController";
import Scene from "../scenes/scene";
import { applyMotion } from "../physics/motion";
import applyForces from "../physics/forces/applyForces";
import collisionDetector from "../physics/collisions/collisionDetector";
import { retrieveLocalRules } from "../utils/eventRules";
import {
  resizeInterface,
  rotateInterface,
  ColourInterface
} from "../shapes/shapes";
import Vector, {
  magnitude,
  rotateVector,
  rotateShape,
  rotateShapeGeneral
} from "../utils/maths/Vector";

import {
  polylineMousedown,
  polylineMousemove,
  polylineRightClick
} from "../canvasEvents/handlers/polyline";
import { cloneMousedown } from "../canvasEvents/handlers/clone";
import {
  reshapeMousedown,
  reshapeMousemove,
  reshapeMousUp
} from "../canvasEvents/handlers/reshape";
import {
  resizeMousedown,
  resizeMousemove,
  resizeMouseMouseup
} from "../canvasEvents/handlers/resize";

const timeStep = Scene.timeStep;
export const click = element => {
  element.addEventListener(
    "click",
    evt => {
      let clickedShapeIndex;
      forEachShape(function(i) {
        clickedShapeIndex = detectShape(i);
        if (clickedShapeIndex) {
          Scene.currentEvents.click.state = true;
          Scene.shapes[clickedShapeIndex].onClick = true;
          Scene.currentEvents.click.ids.push(clickedShapeIndex);
        }
      }, false);
    },
    false
  );
};

export const doubleClick = (element, selectShape, addRules, selectedEvent) => {
  element.addEventListener(
    "dblclick",
    evt => {
      let selectShapeIndex;

      forEachShape(function(i) {
        selectShapeIndex = detectShape(i);
        // Scene.currentEvents.doubleClick.id = selectShapeIndex;
        if (selectShapeIndex) {
          Scene.currentEvents.doubleClick.state = true;
          Scene.shapes[selectShapeIndex].doubleClick = true;
          Scene.currentEvents.doubleClick.ids.push(selectShapeIndex);
        }
        if (selectShapeIndex /*&& selectedEvent*/) {
          const selectedShapeId = Scene.shapes[selectShapeIndex].id;

          Scene.selectedShape = selectedShapeId;
          selectShape(selectedShapeId);
        }
      }, false);
      createShapeFromPolyline(true);
    },
    false
  );
};

export const mouseDown = (element, setManagedShapeIndex) => {
  element.addEventListener(
    "mousedown",
    evt => {
      // Scene.currentEvents.click.state = true;
      if (Scene.selected === "step") {
        Scene.time += timeStep;
        forEachShape(function(i) {
          applyMotion(i, timeStep);
          applyForces(i);
        });
        collisionDetector();
      }

      let mousePos = getMousePos(evt, element);
      forEachShape(function(i) {
        prepareToMoveShape(i);
        if (Scene.selected === "_delete") {
          ShapesController.deleteShape(i);
        }
      });

      if (
        typeof shapeSelection[Scene.selected] === "object" &&
        !Scene.cursorOnshape
      ) {
        const uniqueShapeVertices = shapeSelection[Scene.selected].map(
          vertex => ({
            x: vertex.x,
            y: vertex.y
          })
        );

        const shape = createShape(mousePos, uniqueShapeVertices);
        if (Scene.selected === "circle") {
          shape.type = "circle";
        }
      }
      if (Scene.selected === "draw" && !Scene.cursorOnshape) {
        Scene.isDrawing = true;
      }

      polylineMousedown(Scene);
      cloneMousedown(Scene, evt);
      reshapeMousedown(Scene);
      resizeMousedown(Scene);

      // mouse down
      if (Scene.selected === "rotate") {
        const {
          selectShape,
          getSelectedShapeIndex,
          getOnhandle,
          setDraggingState,
          setLever,
          getIsDefault,
          setIsDefault,
          setReferenceVertices,
          setReferenceCentreOfMass,
          getDefaultLength,
          setReferenceBoundingRect,
          setRotateBoundingRect
        } = rotateInterface();
        const selectedShapeIndex = getSelectedShapeIndex();
        const defaultLength = getDefaultLength();
        const referenceVertices = selectedShapeIndex
          ? ShapesController.getProperty(selectedShapeIndex, "vertices").map(
              vertex => ({
                x: vertex.x,
                y: vertex.y
              })
            )
          : [];

        forEachShape(function(idx) {
          const onShape = ShapesController.getProperty(idx, "onShape");
          const centreOfMass = ShapesController.getCentreOfMass(idx);
          const boundingRect = ShapesController.getProperty(
            idx,
            "boundingRect"
          );

          const boundingRectCentre = boundingRect.centre;

          const minY = boundingRect.minY;

          if (onShape) {
            selectShape(idx);
            if (getIsDefault()) {
              if (selectedShapeIndex !== idx) {
                setLever({
                  start: { x: boundingRectCentre.x, y: minY },
                  end: {
                    x: boundingRectCentre.x,
                    y: minY - defaultLength
                  }
                });
              }

              setIsDefault(false);
            }
            if (selectedShapeIndex !== idx) {
              setReferenceBoundingRect(
                boundingRect.vertices.map(vertex => ({
                  x: vertex.x,
                  y: vertex.y
                }))
              );
              setRotateBoundingRect(
                boundingRect.vertices.map(vertex => ({
                  x: vertex.x,
                  y: vertex.y
                }))
              );
            }
          }
          if (getOnhandle()) {
            setDraggingState(true);
            if (getSelectedShapeIndex() === idx) {
              setReferenceVertices(referenceVertices);
              setReferenceCentreOfMass({ ...centreOfMass });
            }
          }
        });
      }
      if (Scene.selected === "colour") {
        const {
          selectShape,
          getCurrentColour,
          getSelectedShapeIndex,
          setCurrentColour
        } = ColourInterface();
        const currentColour = getCurrentColour();
        const selectedShapeIndex = getSelectedShapeIndex();
        forEachShape(function(idx) {
          const onShape = ShapesController.getProperty(idx, "onShape");
          if (onShape) {
            if (selectedShapeIndex !== idx) {
              selectShape(idx);
              if (currentColour) {
                ShapesController.setProperty(idx, "fillColour", currentColour);
              }
            } else {
              selectShape();
              setCurrentColour();
            }
          }
        }, false);
      }
      if (Scene.selected === "manageShape") {
        forEachShape(function(idx) {
          const onShape = ShapesController.getProperty(idx, "onShape");
          if (onShape) {
            setManagedShapeIndex(idx);
          }
        }, false);
      }
    },
    false
  );
};

export const mouseMove = element => {
  element.addEventListener(
    "mousemove",
    function(evt) {
      const { selected, shapes, mousePos } = Scene;

      getMousePos(evt, element);
      if (selected === "play") {
        makeThrowArray();
      }
      forEachShape(function(i) {
        detectShape(i);
      }, false);

      const cursorOnshape = shapes.some(shape => shape.onShape);
      Scene.cursorOnshape = cursorOnshape;
      polylineMousemove(Scene, cursorOnshape);
      reshapeMousemove(Scene);
      resizeMousemove(Scene);

      // mouse move
      if (Scene.selected === "rotate") {
        const {
          getSelectedShapeIndex,
          getLever,
          setLever,
          getHandleRadius,
          setOnhandle,
          getDraggingState,
          getReferenceVertices,
          getDefaultLength,
          setIsDefault,
          getReferenceBoundingRect,
          setRotateBoundingRect,
          getReferenceLeverVectors
        } = rotateInterface();

        setOnhandle(false);

        const selectedShapeIndex = getSelectedShapeIndex();
        if (selectedShapeIndex) {
          const centreOfMass = ShapesController.getCentreOfMass(
            selectedShapeIndex
          );

          const boundingRect = ShapesController.getProperty(
            selectedShapeIndex,
            "boundingRect"
          );
          const { radius } = boundingRect;

          const referenceVertices = getReferenceVertices();

          const defaultLength = getDefaultLength();

          const { end } = getLever();
          const handleRadius = getHandleRadius();

          const leverEnd = {
            x: centreOfMass.x + end.x,
            y: centreOfMass.y + end.y
          };

          const handleCentre = { x: leverEnd.x, y: leverEnd.y };

          const distanceVector = {
            x: handleCentre.x - mousePos.x,
            y: handleCentre.y - mousePos.y
          };
          const cursorDistanceFromHandle = magnitude(distanceVector);

          if (getDraggingState()) {
            const {
              start: leverStartReferenceVector,
              end: leverEndReferenceVector
            } = getReferenceLeverVectors();

            const centreToCursorVector = new Vector({
              x: mousePos.x - centreOfMass.x,
              y: mousePos.y - centreOfMass.y
            });

            const angle = leverEndReferenceVector.findAngle(
              centreToCursorVector
            );
            const rotatedLeverStartVector = rotateVector(
              angle,
              leverStartReferenceVector
            );
            const rotatedLeverEndVector = rotateVector(
              angle,
              leverEndReferenceVector
            );

            setLever({
              start: rotatedLeverStartVector,
              end: rotatedLeverEndVector
            });

            setRotateBoundingRect(
              rotateShapeGeneral(getReferenceBoundingRect(), angle)
            );

            rotateShape(
              centreOfMass,
              angle,
              selectedShapeIndex,
              referenceVertices
            );
          } else {
            if (centreOfMass.y < radius + defaultLength + handleRadius) {
              setIsDefault(false);
            } else {
              setIsDefault(true);
            }
          }

          if (cursorDistanceFromHandle <= handleRadius) {
            setOnhandle(true);
          }
        }
      }
    },
    false
  );
};

export const mouseUp = element => {
  element.addEventListener(
    "mouseup",
    function(evt) {
      forEachShape(function(i) {
        releaseShape(i);
      });
      Scene.throwArray = [];
      if (Scene.selected === "draw") {
        Scene.isDrawing = false;
        createShapeFromPolyline();
      }
      reshapeMousUp(Scene);
      resizeMouseMouseup(Scene);

      if (Scene.selected === "rotate") {
        const {
          setDraggingState,
          getSelectedShapeIndex,
          setIsDefault,
          setReferenceVertices,
          setReferenceCentreOfMass,
          getLever,
          setReferenceLeverVectors,
          getRotateBoundingRect,
          setReferenceBoundingRect
        } = rotateInterface();
        setDraggingState(false);

        const selectedShapeIndex = getSelectedShapeIndex();
        const selectedShapeId = ShapesController.getProperty(
          selectedShapeIndex,
          "id"
        );
        if (selectedShapeId) {
          updatePhysicsProperties(selectedShapeId);
        }

        if (selectedShapeIndex) {
          const { start, end } = getLever();

          const startVector = new Vector({ ...start });
          const endVector = new Vector({ ...end });

          setReferenceLeverVectors({ start: startVector, end: endVector });

          const boundingRect = getRotateBoundingRect();
          setReferenceBoundingRect([...boundingRect]);

          setIsDefault(true);
          setReferenceVertices([]);
          setReferenceCentreOfMass({});
        }
      }
    },
    false
  );
};

export const rightClick = element => {
  element.addEventListener(
    "contextmenu",
    function(evt) {
      polylineRightClick(Scene, evt);
    },
    false
  );
};
