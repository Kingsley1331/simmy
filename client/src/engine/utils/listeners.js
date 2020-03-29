import getMousePos from "./position";
import { makeThrowArray } from "./throw";
import {
  detectShape,
  createShape,
  shapeSelection,
  forEachShape,
  prepareToMoveShape,
  releaseShape
} from "../shapes/shapes";
import ShapesController from "../shapes/ShapesController";
import { draw } from "../scenes/draw";
import Scene from "../scenes/scene";
import { applyMotion } from "../physics/motion";
import applyForces from "../physics/forces/applyForces";
import collisionDetector from "../physics/collisions/collisionDetector";
import Vector from "./maths/Vector";
import { retrieveLocalRules } from "./eventRules";

const timeStep = Scene.timeStep;
export const click = element => {
  element.addEventListener(
    "click",
    evt => {
      let clickedShapeIndex;
      Scene.currentEvents.click = true;
      console.log("receiving click :)");
      forEachShape(function(i) {
        clickedShapeIndex = detectShape(i);
        if (clickedShapeIndex) {
          Scene.shapes[clickedShapeIndex].onClick = true;
          console.log("clicked shape", Scene.shapes[clickedShapeIndex]);
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
      Scene.currentEvents.doubleClick = true;
      forEachShape(function(i) {
        selectShapeIndex = detectShape(i);
        if (selectShapeIndex) {
          const selectedShapeId = Scene.shapes[selectShapeIndex].id;
          const selectedShapeRules =
            Scene.shapes[selectShapeIndex].events.local;
          console.log("selectedEvent", selectedEvent);
          const rules = retrieveLocalRules(
            {},
            selectedShapeRules,
            selectedShapeId,
            selectedEvent
          );
          console.log("rules", rules);
          // console.log("selectedShape", Scene.shapes[selectShapeIndex]);
          Scene.selectedShape = selectedShapeId;
          selectShape(selectedShapeId);
          addRules(rules);
        }
      }, false);
    },
    false
  );
};
export const mouseDown = element => {
  element.addEventListener(
    "mousedown",
    evt => {
      // Scene.currentEvents.click = true;
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
        createShape(mousePos, shapeSelection[Scene.selected]);
      }
    },
    false
  );
};

export const mouseMove = element => {
  element.addEventListener("mousemove", function(evt) {
    let mousePos = getMousePos(evt, element);
    if (Scene.selected === "play") {
      makeThrowArray();
    }
    forEachShape(function(i) {
      detectShape(i);
    }, false);
    /**** TODO: consider using ShapesController to get shape properties ****/
    Scene.cursorOnshape = Scene.shapes.some(shape => shape.onShape);
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
    },
    false
  );
};
