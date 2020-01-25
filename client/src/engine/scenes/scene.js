// import createWalls from "../shapes/walls";
// import { clearShapes } from "../../engine/shapes/shapes";

let Scene = {
  name: "",
  backgroundColour: "#E0E0E0",
  imagUrl: "",
  created: "",
  lastModified: "",
  shapes: [],
  mousePos: {},
  context: { buffer: {} },
  cursorOnshape: false,
  selected: "none",
  throwArray: [],
  timeStep: 16,
  time: 0,
  settings: {
    display: true,
    restitution: 1
  }
};

export function updateSelected(state, Scene) {
  let selectedShape;
  const buttons = state.buttons;
  for (let button in buttons) {
    if (buttons[button]) {
      selectedShape = button;
      Scene.selected = button;
    }
  }
}

export function updateScene(scene) {
  if (scene.shapes) {
    for (let key in scene) {
      if (key !== "shapes") {
        Scene[key] = scene[key];
      }
      if (key === "shapes") {
        for (let i = 0; i < scene.shapes.length; i++) {
          Scene.shapes[i] = {};
          Scene.shapes[i].centreOfMass = {};

          Scene.shapes[i].vertices = [...scene.shapes[i].vertices];
          Scene.shapes[i].boundingRect = {
            ...scene.shapes[i].boundingRect,
            vertices: [...scene.shapes[i].boundingRect.vertices]
          };

          Scene.shapes[i].centreOfMass = { ...scene.shapes[i].centreOfMass };
          Scene.shapes[i].centreOfRotation = {
            ...scene.shapes[i].centreOfRotation
          };

          Scene.shapes[i].physics = { ...scene.shapes[i].physics };
          Scene.shapes[i].referenceVectors = {
            ...scene.shapes[i].referenceVectors
          };

          Scene.shapes[i].colliding = scene.shapes[i].colliding;
          Scene.shapes[i].dragging = scene.shapes[i].dragging;
          Scene.shapes[i].fillColour = scene.shapes[i].fillColour;
          Scene.shapes[i].id = scene.shapes[i].id;
          Scene.shapes[i].lineColour = scene.shapes[i].lineColour;
          Scene.shapes[i].linewidth = scene.shapes[i].linewidth;
          Scene.shapes[i].onShape = scene.shapes[i].onShape;
          Scene.shapes[i].selected = scene.shapes[i].selected;
          Scene.shapes[i].touchPoint = scene.shapes[i].touchPoint;
          Scene.shapes[i].type = scene.shapes[i].type;
          Scene.shapes[i].collisionData = scene.shapes[i].collisionData || {};
          Scene.shapes[i].subscriptions = scene.shapes[i].subscriptions || {};

          if (scene.shapes[i].type === "fixed") {
            Scene.shapes[i].physics.mass = Infinity;
            Scene.shapes[i].physics.momentOfInertia = Infinity;
            Scene.shapes[i].physics.momentOfInertiaCOM = Infinity;
          }
        }
      }
    }
  }
}

export default Scene;
