import getMousePos from "./position";
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
import { PolylineInterface } from "../../engine/shapes/shapes";
import { magnitude } from "../../engine/utils/maths/Vector";

const timeStep = Scene.timeStep;
export const click = element => {
  element.addEventListener(
    "click",
    evt => {
      let clickedShapeIndex;
      const {
        addVertex,
        isCursorOnFirstPoint,
        isCursorOnLastPoint
      } = PolylineInterface();
      forEachShape(function(i) {
        clickedShapeIndex = detectShape(i);
        if (clickedShapeIndex) {
          Scene.currentEvents.click.state = true;
          Scene.shapes[clickedShapeIndex].onClick = true;
          Scene.currentEvents.click.ids.push(clickedShapeIndex);
        }
      }, false);
      if (
        Scene.selected === "polyline" &&
        !Scene.cursorOnshape &&
        !isCursorOnFirstPoint &&
        !isCursorOnLastPoint
      ) {
        addVertex(Scene.mousePos);
      }
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
        vertices,
        isCursorOnFirstPoint,
        isCursorOnLastPoint,
        setLastPoint,
        removeLastVertex,
        lastPointRadius
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
        const shape = createShape(mousePos, shapeSelection[Scene.selected]);
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
    },
    false
  );
};
