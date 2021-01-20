import getMousePos, { calculateDistanceFromCursor } from "./position";
import { makeThrowArray } from "./throw";
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
import { draw } from "../scenes/draw";
import Scene from "../scenes/scene";
import { applyMotion } from "../physics/motion";
import applyForces from "../physics/forces/applyForces";
import collisionDetector from "../physics/collisions/collisionDetector";
import { retrieveLocalRules } from "./eventRules";
import {
  PolylineInterface,
  CloneInterface,
  reshapeInterface,
  resizeInterface,
  rotateInterface,
  ColourInterface
} from "../../engine/shapes/shapes";
import Vector, {
  magnitude,
  rotateVector,
  rotateShape,
  rotateShapeGeneral
} from "./maths/Vector";
import findBoundingRect from "../shapes/findBoundingRect";
import { findMass } from "../physics/mass/mass";
import { findMomentOfInertiaCOM } from "../physics/mass/momentOfInertia";

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
          // const selectedShapeRules =
          //   Scene.shapes[selectShapeIndex].events.local;
          // const rules = retrieveLocalRules(selectedShapeRules, selectedShapeId);
          Scene.selectedShape = selectedShapeId;
          selectShape(selectedShapeId);
          // addRules(rules);
        }
      }, false);
      createShapeFromPolyline(true);
    },
    false
  );
};

export const mouseDown = element => {
  element.addEventListener(
    "mousedown",
    evt => {
      // Scene.currentEvents.click.state = true;
      const {
        isCursorOnFirstPoint,
        isCursorOnLastPoint,
        setLastPoint,
        removeLastVertex,
        addVertex
      } = PolylineInterface();
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
      if (Scene.selected === "polyline" && isCursorOnFirstPoint) {
        createShapeFromPolyline();
      }
      if (isCursorOnLastPoint) {
        removeLastVertex();
        setLastPoint(false);
      }

      if (
        Scene.selected === "polyline" &&
        !Scene.cursorOnshape &&
        !isCursorOnFirstPoint &&
        !isCursorOnLastPoint
      ) {
        addVertex(Scene.mousePos);
      }
      if (Scene.selected === "clone" && evt.which === 1) {
        forEachShape(function(idx) {
          const onShape = ShapesController.getProperty(idx, "onShape");
          if (onShape) {
            const {
              setClonedShapeId,
              setClonedShapeLinewidth,
              setClonedShapeColour,
              setClonedShapeVertices
            } = CloneInterface(idx);
            setClonedShapeId();
            setClonedShapeLinewidth();
            setClonedShapeColour();
            setClonedShapeVertices();
          }
        });
        const { getClonedShapeId, getClonedShapeVertices } = CloneInterface();
        const cloneShapeId = getClonedShapeId();
        if (cloneShapeId) {
          const onClonedShape = ShapesController.getProperty(
            cloneShapeId,
            "onShape"
          );
          const vertices = getClonedShapeVertices().map(vertex => ({
            x: vertex.x,
            y: vertex.y
          }));

          if (!onClonedShape) {
            createShape(mousePos, vertices);
          }
        }
      }
      if (Scene.selected === "reshape") {
        const {
          selectShape,
          setIsVertexBeingDragged,
          getVertexIndex
        } = reshapeInterface();
        forEachShape(function(idx) {
          const onShape = ShapesController.getProperty(idx, "onShape");
          if (onShape) {
            const shapeId = ShapesController.getProperty(idx, "id");
            selectShape(shapeId);
          }
        });
        if (getVertexIndex() !== null) {
          setIsVertexBeingDragged(true);
        }
      }
      if (Scene.selected === "resize") {
        const {
          selectShape,
          setResizeBoundingRect,
          setResizerDraggingState,
          geCurrentResizer,
          getSelectedShapeIndex,
          setDraggable,
          getOnResizer,
          setReferenceVertices
        } = resizeInterface();

        const referenceVertices = getSelectedShapeIndex()
          ? ShapesController.getProperty(
              getSelectedShapeIndex(),
              "vertices"
            ).map(vertex => ({
              x: vertex.x,
              y: vertex.y
            }))
          : [];

        forEachShape(function(idx) {
          const onShape = ShapesController.getProperty(idx, "onShape");

          if (onShape) {
            selectShape(idx);
            const boundingRect = ShapesController.getProperty(
              idx,
              "boundingRect"
            );
            setResizeBoundingRect(boundingRect.vertices);
          }
          const currentResizer = geCurrentResizer();

          if (currentResizer && getSelectedShapeIndex() === idx) {
            setResizerDraggingState(true);
            setReferenceVertices(referenceVertices);
            if (getOnResizer()) {
              setDraggable(true);
            }
          }
        });
      }
      // mouse down
      if (Scene.selected === "rotate") {
        const {
          selectShape,
          getSelectedShapeIndex,
          getLeverLength,
          getHandleRadius,
          getOnhandle,
          setDraggingState,
          setLever,
          getLever,
          // setHandleCentre,
          getIsDefault,
          setIsDefault,
          setReferenceVertices,
          setReferenceCentreOfMass,
          setCentreOfRotation,
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
          // const { start, end } = getLever();
          // const handleRadius = getHandleRadius();
          const boundingRect = ShapesController.getProperty(
            idx,
            "boundingRect"
          );
          // const boundingRadius = boundingRect.radius;
          const boundingRectCentre = boundingRect.centre;
          // const [topLeft, topRight] = boundingRect.vertices;
          const minY = boundingRect.minY;

          if (onShape) {
            selectShape(idx);
            if (getIsDefault()) {
              // const { radius } = boundingRect;
              if (selectedShapeIndex !== idx) {
                setLever({
                  start: { x: boundingRectCentre.x, y: minY },
                  end: { x: boundingRectCentre.x, y: minY - defaultLength }
                });
                // setLever({
                //   start: { x: 0, y: -radius },
                //   end: { x: 0, y: -radius - defaultLength },
                // });
              }
              // setHandleCentre({ x: leverEnd.x, y: leverEnd.y + handleRadius });
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
            const centreOfRotation = {
              x: boundingRectCentre.x + centreOfMass.x,
              y: boundingRectCentre.y + centreOfMass.y
            };
            setDraggingState(true);
            if (getSelectedShapeIndex() === idx) {
              setReferenceVertices(referenceVertices);
              setReferenceCentreOfMass({ ...centreOfMass });
              // setCentreOfRotation({ ...centreOfRotation });
            }
          }
        });
      }
      if (Scene.selected === "colour") {
        const { selectShape, getCurrentColour } = ColourInterface();
        const currentColour = getCurrentColour();
        forEachShape(function(idx) {
          const onShape = ShapesController.getProperty(idx, "onShape");
          if (onShape) {
            selectShape(idx);
            if (currentColour) {
              ShapesController.setProperty(idx, "fillColour", currentColour);
            }
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
      const { selected, isDrawing, shapes, mousePos } = Scene;

      const {
        vertices,
        firstPointRadius,
        lastPointRadius,
        setFirstPoint,
        setLastPoint
      } = PolylineInterface();

      getMousePos(evt, element);
      if (selected === "play") {
        makeThrowArray();
      }
      forEachShape(function(i) {
        detectShape(i);
      }, false);
      /**** TODO: consider using ShapesController to get shape properties ****/
      const cursorOnshape = shapes.some(shape => shape.onShape);
      Scene.cursorOnshape = cursorOnshape;
      if (selected === "draw" && isDrawing && !cursorOnshape) {
        vertices.push(mousePos);
      } /** detect hovering over first polyline vertex */
      const numOfVertices = vertices.length;
      const firstPoint = vertices[0] || [];
      const distanceVector = {
        x: firstPoint.x - mousePos.x,
        y: firstPoint.y - mousePos.y
      };
      const cursorDotDistance = magnitude(distanceVector);
      if (cursorDotDistance <= firstPointRadius && numOfVertices > 2) {
        setFirstPoint(true);
      } else {
        setFirstPoint(false);
      }
      /** detect hovering over last polyline vertex */
      const lastPoint = vertices[numOfVertices - 1] || [];
      const distanceVector2 = {
        x: lastPoint.x - mousePos.x,
        y: lastPoint.y - mousePos.y
      };
      const cursorDotDistance2 = magnitude(distanceVector2);
      if (cursorDotDistance2 <= lastPointRadius) {
        setLastPoint(true);
      } else {
        setLastPoint(false);
      }

      if (selected === "reshape") {
        const {
          getVertexIndex,
          setVertex,
          getSelectedShapeId,
          getIsVertexBeingDragged
        } = reshapeInterface();

        const selectedShapeId = getSelectedShapeId();
        const selectedShape = Scene.shapes.filter(
          shape => shape.id === selectedShapeId
        )[0];
        if (!getIsVertexBeingDragged()) {
          setVertex(null);
        }
        forEachShape(function(idx) {
          // const shapeId = ShapesController.getProperty(idx, "id");
          // const onShape = ShapesController.getProperty(idx, "onShape");
          if (idx === selectedShapeId) {
            const centreOfMass = selectedShape.centreOfMass;
            const vertices = selectedShape.vertices.map(vertex => ({
              x: vertex.x,
              y: vertex.y
            }));

            const numOfVertices = vertices.length;
            for (let v = 0; v < numOfVertices; v++) {
              const vertex = vertices[v];
              const { x, y } = vertex;
              const distanceFromCursor = calculateDistanceFromCursor(
                {
                  x: x + centreOfMass.x,
                  y: y + centreOfMass.y
                },
                mousePos
              );

              if (distanceFromCursor < 10) {
                setVertex(v);
              }
            }
            if (getIsVertexBeingDragged()) {
              const vertexIndex = getVertexIndex();
              if (selectedShape.vertices[vertexIndex]) {
                selectedShape.vertices[vertexIndex].x =
                  mousePos.x - centreOfMass.x;
                selectedShape.vertices[vertexIndex].y =
                  mousePos.y - centreOfMass.y;
              }
            }
          }
        }, false);
      }

      if (Scene.selected === "resize") {
        const {
          getSelectedShapeIndex,
          getSelectedSideLength,
          setCurrentResizer,
          geCurrentResizer,
          getResizeBoundingRect,
          setResizeBoundingRect,
          getResizerDraggingState,
          getDraggable,
          setOnResizer,
          getReferenceVertices
        } = resizeInterface();
        const selectedShapeIndex = getSelectedShapeIndex();
        if (selectedShapeIndex) {
          const boundingRect = ShapesController.getProperty(
            selectedShapeIndex,
            "boundingRect"
          );

          const referenceVertices = getReferenceVertices();

          const { vertices } = boundingRect;

          const resizeBoundingRect = getResizeBoundingRect();
          const centreOfMass = ShapesController.getCentreOfMass(
            selectedShapeIndex
          );

          const boundingRectCentre = {
            x: (vertices[0].x + vertices[1].x) / 2 + centreOfMass.x,
            y: (vertices[1].y + vertices[2].y) / 2 + centreOfMass.y
          };

          const boundingRectSize = {
            x: Math.abs(vertices[0].x - vertices[1].x) / 2,
            y: Math.abs(vertices[1].y - vertices[2].y) / 2
          };

          const halfLength = getSelectedSideLength() / 2;
          const resizers = {
            topLeft: {
              x: resizeBoundingRect[0].x + centreOfMass.x,
              y: resizeBoundingRect[0].y + centreOfMass.y
            },
            topMiddle: {
              x:
                (resizeBoundingRect[0].x + resizeBoundingRect[1].x) / 2 +
                centreOfMass.x,
              y:
                (resizeBoundingRect[0].y + resizeBoundingRect[1].y) / 2 +
                centreOfMass.y
            },
            topRight: {
              x: resizeBoundingRect[1].x + centreOfMass.x,
              y: resizeBoundingRect[1].y + centreOfMass.y
            },
            rightMiddle: {
              x:
                (resizeBoundingRect[1].x + resizeBoundingRect[2].x) / 2 +
                centreOfMass.x,
              y:
                (resizeBoundingRect[1].y + resizeBoundingRect[2].y) / 2 +
                centreOfMass.y
            },
            rightBottom: {
              x: resizeBoundingRect[2].x + centreOfMass.x,
              y: resizeBoundingRect[2].y + centreOfMass.y
            },
            bottomMiddle: {
              x:
                (resizeBoundingRect[2].x + resizeBoundingRect[3].x) / 2 +
                centreOfMass.x,
              y:
                (resizeBoundingRect[2].y + resizeBoundingRect[3].y) / 2 +
                centreOfMass.y
            },
            bottomLeft: {
              x: resizeBoundingRect[3].x + centreOfMass.x,
              y: resizeBoundingRect[3].y + centreOfMass.y
            },
            leftMiddle: {
              x:
                (resizeBoundingRect[3].x + resizeBoundingRect[0].x) / 2 +
                centreOfMass.x,
              y:
                (resizeBoundingRect[3].y + resizeBoundingRect[0].y) / 2 +
                centreOfMass.y
            }
          };

          const checkIfCursorIsOnResizer = resizer =>
            mousePos.x >= resizers[resizer].x - halfLength &&
            mousePos.x <= resizers[resizer].x + halfLength &&
            mousePos.y >= resizers[resizer].y - halfLength &&
            mousePos.y <= resizers[resizer].y + halfLength;

          const topLeft = checkIfCursorIsOnResizer("topLeft");
          const topMiddle = checkIfCursorIsOnResizer("topMiddle");
          const topRight = checkIfCursorIsOnResizer("topRight");
          const rightMiddle = checkIfCursorIsOnResizer("rightMiddle");
          const rightBottom = checkIfCursorIsOnResizer("rightBottom");
          const bottomMiddle = checkIfCursorIsOnResizer("bottomMiddle");
          const bottomLeft = checkIfCursorIsOnResizer("bottomLeft");
          const leftMiddle = checkIfCursorIsOnResizer("leftMiddle");

          const expand = axis => {
            const { x, y } = boundingRectCentre;

            const resizerDistanceFromCentre = {
              x: mousePos.x - x,
              y: mousePos.y - y
            };

            const expansionRatio = {
              x: resizerDistanceFromCentre.x / boundingRectSize.x,
              y: resizerDistanceFromCentre.y / boundingRectSize.y
            };

            const expansionRatioX = Math.abs(expansionRatio.x);
            const expansionRatioY = Math.abs(expansionRatio.y);

            const newResizeBoundingRect = vertices.map(vertex => ({
              x: vertex.x * (axis === "y" ? 1 : expansionRatioX),
              y:
                vertex.y *
                (axis === "x"
                  ? 1
                  : axis === "y"
                  ? expansionRatioY
                  : expansionRatioX)
            }));

            /**NOTE:Repeated code same as above */
            const expandedVertices = referenceVertices.map(vertex => ({
              x: vertex.x * (axis === "y" ? 1 : expansionRatioX),
              y:
                vertex.y *
                (axis === "x"
                  ? 1
                  : axis === "y"
                  ? expansionRatioY
                  : expansionRatioX)
            }));

            ShapesController.setProperty(
              selectedShapeIndex,
              "vertices",
              expandedVertices
            );
            setResizeBoundingRect(newResizeBoundingRect);
          };
          setOnResizer(false);
          if (topLeft) {
            console.log({ topLeft });
            if (!getResizerDraggingState()) {
              setCurrentResizer("topLeft");
            }
            setOnResizer(true);
          }

          if (getResizerDraggingState() && geCurrentResizer() === "topLeft") {
            // console.log("draggable", getDraggable());
            if (getDraggable()) {
              expand();
            }
          }

          if (topMiddle) {
            if (!getResizerDraggingState()) {
              setCurrentResizer("topMiddle");
            }
            setOnResizer(true);
          }
          if (getResizerDraggingState() && geCurrentResizer() === "topMiddle") {
            if (getDraggable()) {
              expand("y");
            }
          }

          if (topRight) {
            if (!getResizerDraggingState()) {
              setCurrentResizer("topRight");
            }
            setOnResizer(true);
          }
          if (getResizerDraggingState() && geCurrentResizer() === "topRight") {
            if (getDraggable()) {
              expand();
            }
          }
          if (rightMiddle) {
            if (!getResizerDraggingState()) {
              setCurrentResizer("rightMiddle");
            }
            setOnResizer(true);
          }
          if (
            getResizerDraggingState() &&
            geCurrentResizer() === "rightMiddle"
          ) {
            if (getDraggable()) {
              expand("x");
            }
          }
          if (rightBottom) {
            if (!getResizerDraggingState()) {
              setCurrentResizer("rightBottom");
            }
            setOnResizer(true);
          }
          if (
            getResizerDraggingState() &&
            geCurrentResizer() === "rightBottom"
          ) {
            if (getDraggable()) {
              expand();
            }
          }
          if (bottomMiddle) {
            if (!getResizerDraggingState()) {
              setCurrentResizer("bottomMiddle");
            }
            setOnResizer(true);
          }
          if (
            getResizerDraggingState() &&
            geCurrentResizer() === "bottomMiddle"
          ) {
            if (getDraggable()) {
              expand("y");
            }
          }
          if (bottomLeft) {
            if (!getResizerDraggingState()) {
              setCurrentResizer("bottomLeft");
            }
            setOnResizer(true);
          }
          if (
            getResizerDraggingState() &&
            geCurrentResizer() === "bottomLeft"
          ) {
            if (getDraggable()) {
              expand();
            }
          }
          if (leftMiddle) {
            if (!getResizerDraggingState()) {
              setCurrentResizer("leftMiddle");
            }
            setOnResizer(true);
          }
          if (
            getResizerDraggingState() &&
            geCurrentResizer() === "leftMiddle"
          ) {
            if (getDraggable()) {
              expand("x");
            }
          }
        }
      }
      // mouse move
      if (Scene.selected === "rotate") {
        const {
          selectShape,
          getSelectedShapeIndex,
          getLever,
          setLever,
          getHandleRadius,
          setOnhandle,
          getOnhandle,
          getDraggingState,
          getReferenceVertices,
          getReferenceCentreOfMass,
          getCentreOfRotation,
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
          const { centre: boundingRectCentre, radius, minY } = boundingRect;

          const onShape = ShapesController.getProperty(
            selectedShapeIndex,
            "onShape"
          );

          const referenceVertices = getReferenceVertices();

          const defaultLength = getDefaultLength();

          const { start, end } = getLever();
          const handleRadius = getHandleRadius();

          const leverEnd = {
            x: centreOfMass.x + end.x,
            y: centreOfMass.y + end.y
          };

          const handleCentre = { x: leverEnd.x, y: leverEnd.y };

          // const boundingRadius = boundingRect.radius;

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

            console.log("centreOfMass", centreOfMass);
            console.log("boundingRect", boundingRect);
            // console.log("centreOfRotation", centreOfRotation);
            console.log("getReferenceCentreOfMass", getReferenceCentreOfMass());

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

      if (Scene.selected === "reshape") {
        const {
          setIsVertexBeingDragged,
          getSelectedShapeId
        } = reshapeInterface();
        setIsVertexBeingDragged(false);
        const selectedShapeId = getSelectedShapeId();
        if (selectedShapeId) {
          updatePhysicsProperties(selectedShapeId);
        }
      }
      if (Scene.selected === "resize") {
        const {
          setResizerDraggingState,
          setCurrentResizer,
          setDraggable,
          getSelectedShapeIndex
        } = resizeInterface();

        const selectedShapeIndex = getSelectedShapeIndex();
        const selectedShapeId = ShapesController.getProperty(
          selectedShapeIndex,
          "id"
        );
        if (selectedShapeId) {
          updatePhysicsProperties(selectedShapeId);
        }

        setResizerDraggingState(false);
        setCurrentResizer();
        setDraggable(false);
      }
      if (Scene.selected === "rotate") {
        const {
          setDraggingState,
          setLever,
          getSelectedShapeIndex,
          setIsDefault,
          setCentreOfRotation,
          getDefaultLength,
          setReferenceVertices,
          setReferenceCentreOfMass,
          getLever,
          setReferenceLeverVectors,
          getRotateBoundingRect,
          setReferenceBoundingRect
        } = rotateInterface();
        setDraggingState(false);

        const defaultLength = getDefaultLength();
        const selectedShapeIndex = getSelectedShapeIndex();
        const selectedShapeId = ShapesController.getProperty(
          selectedShapeIndex,
          "id"
        );
        if (selectedShapeId) {
          updatePhysicsProperties(selectedShapeId);
        }

        if (selectedShapeIndex) {
          const { mousePos } = Scene;
          // const boundingRect = ShapesController.getProperty(
          //   selectedShapeIndex,
          //   "boundingRect"
          // );
          // const { radius } = boundingRect;
          // setLever({
          //   start: { x: 0, y: -radius },
          //   end: { x: 0, y: -radius - defaultLength },
          // });
          /* const boundingRect = ShapesController.getProperty(
            selectedShapeIndex,
            "boundingRect"
          );
          const { centre: boundingRectCentre } = boundingRect;

          const centreOfMass = ShapesController.getCentreOfMass(
            selectedShapeIndex
          );
          const centreOfRotation = {
            x: boundingRectCentre.x + centreOfMass.x,
            y: boundingRectCentre.y + centreOfMass.y,
          };
          const centreToCursorVector = new Vector({
            x: mousePos.x - centreOfRotation.x,
            y: mousePos.y - centreOfRotation.y,
          });*/

          const { start, end } = getLever();

          const startVector = new Vector({ ...start });
          const endVector = new Vector({ ...end });

          setReferenceLeverVectors({ start: startVector, end: endVector });

          const boundingRect = getRotateBoundingRect();
          setReferenceBoundingRect([...boundingRect]);

          setIsDefault(true);
          // setCentreOfRotation({});
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
      if (Scene.selected === "polyline") {
        const { resetVertices } = PolylineInterface();
        evt.preventDefault();
        resetVertices();
      }
      if (Scene.selected === "clone") {
        const { resetClone } = CloneInterface();
        evt.preventDefault();
        resetClone();
      }
    },
    false
  );
};
