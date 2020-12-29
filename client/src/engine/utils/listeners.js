import getMousePos, { calculateDistanceFromCursor } from "./position";
import { makeThrowArray } from "./throw";
import {
  detectShape,
  createShape,
  shapeSelection,
  forEachShape,
  prepareToMoveShape,
  releaseShape,
  createShapeFromPolyline
} from "../shapes/shapes";
import ShapesController from "../shapes/ShapesController";
import { draw } from "../scenes/draw";
import Scene from "../scenes/scene";
import { applyMotion } from "../physics/motion";
import applyForces from "../physics/forces/applyForces";
import collisionDetector from "../physics/collisions/collisionDetector";
import Vector from "./maths/Vector";
import { retrieveLocalRules } from "./eventRules";
import {
  PolylineInterface,
  CloneInterface,
  reshapeInterface
} from "../../engine/shapes/shapes";
import { magnitude } from "../../engine/utils/maths/Vector";

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
      createShapeFromPolyline();
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
          const vertices = getClonedShapeVertices();

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
    },
    false
  );
};

export const mouseMove = element => {
  element.addEventListener("mousemove", function(evt) {
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

      setVertex(null);
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
  });
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
        const { setIsVertexBeingDragged } = reshapeInterface();
        setIsVertexBeingDragged(false);
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
