import Scene from "../scenes/scene";
import { forEachShape } from "../shapes/shapes";
import { applyMotion } from "../physics/motion";
import { draw } from "../scenes/draw";
import collisionDetector from "../physics/collisions/collisionDetector";
import applyGravity from "../physics/forces/gravity";
import ShapesController from "../shapes/ShapesController";
import applyForces from "../physics/forces/applyForces";

let canvas;
window.requestAnimFrame = (function() {
  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function(callback) {
      window.setTimeout(callback, 1000 / 60);
    }
  );
})();

export default function animate() {
  // console.log("animate", Scene.shapes);
  const timeStep = Scene.timeStep;
  /** TODO: store canvas globally in Scene to make it less expensive **/
  /** TODO: destrucure Scene object **/
  canvas = document.getElementById("canvas");
  let shapes = Scene.shapes;
  let numShapes = shapes.length;
  if (Scene.selected === "play") {
    if (Scene.time > 0) {
      forEachShape(function(i) {
        applyMotion(i, timeStep);
        applyGravity(i);
        applyForces(i);
      });
      /** TODO check if collisionDetector can be moved inside the forEachShape callback **/
      collisionDetector();
    }
    if (Scene.time + timeStep > 0) {
      Scene.time += timeStep;
    } else {
      Scene.time = 0;
    }
    forEachShape(function(i) {
      const shapeId = ShapesController.getProperty(i, "id");
      if (ShapesController.getProperty(i, "colliding")) {
        Scene.currentEvents.collision.state = true;
        Scene.currentEvents.collision.ids.push(shapeId);
      }
      if (ShapesController.getProperty(i, "onShape")) {
        Scene.currentEvents.hover.state = true;
        Scene.currentEvents.hover.ids.push(shapeId);
      }
      if (ShapesController.getProperty(i, "dragging")) {
        Scene.currentEvents.drag.state = true;
        Scene.currentEvents.drag.ids.push(shapeId);
      }
    });
    /** Note: Its important that checkEvents runs after collisionDetector and the Scene.currentEvents
      settings, because it needs all of those settings to be complete before it runs
     */
    forEachShape(function(i) {
      ShapesController.checkEvents(i, i === numShapes - 1);
    });
  }
  if (canvas) {
    draw(canvas, Scene);
  }
  window.requestAnimFrame(animate);
}
