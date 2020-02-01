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

const timeStep = Scene.timeStep;
export const click = element => {
  element.addEventListener(
    "click",
    evt => {
      Scene.currentEvents.click = true;
      console.log("receiving click :)");
    },
    false
  );
};

export const doubleClick = element => {
  element.addEventListener(
    "dblclick",
    evt => {
      Scene.currentEvents.doubleClick = true;
      console.log("receiving double click :)");
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
