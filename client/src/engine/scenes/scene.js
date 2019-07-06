// import createWalls from "../shapes/walls";
// import { Shape } from "../../engine/shapes/shapes";

let Scene = {
  backgroundColour: "#E0E0E0",
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

export const setScene = scene => ({
  backgroundColour: scene.backgroundColour,
  shapes: scene.shapes,
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
});

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
  // console.log("SCENE =====>", Scene);
  // console.log("scene =====>", scene);
  // Scene.shapes[4].centreOfMass.x = 50;
  // Scene.shapes[4].vertices[0].x = 200;
  // Scene.shapes[5].centreOfMass.x = scene.shapes[4].centreOfMass.x;
  // Scene.shapes[5].vertices[0].x = scene.shapes[4].vertices[0].x;
  if (scene.shapes) {
    // Scene.backgroundColour = "lightblue";
    // Scene = { ...scene };
    // console.log("SCENE =====>", Scene);
    for (let key in scene) {
      if (key !== "shapes") {
        Scene[key] = scene[key];
      }
      if (key === "shapes") {
        for (let i = 0; i < scene.shapes.length; i++) {
          Scene.shapes[i] = {};
          Scene.shapes[i].centreOfMass = {};

          Scene.shapes[i].centreOfMass.x = scene.shapes[i].centreOfMass.x;
          Scene.shapes[i].centreOfMass.y = scene.shapes[i].centreOfMass.y;

          // Scene.shapes[i].boundingRect = {};
          // Scene.shapes[i].boundingRect.vertices = [];

          // for (let j = 0; j < scene.shapes[i].vertices.length; j++) {
          //   Scene.shapes[i].vertices[j] = { ...scene.shapes[i].vertices[j] };
          // }

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
        }
      }
    }
  }
  console.log("Scene.shapes", Scene.shapes);
}

export function updateScene1(scene) {
  console.log("SCENE =====>", Scene.shapes);
  console.log("scene =====>", scene.shapes);
  // Scene.backgroundColour = "lightblue";
  Scene.backgroundColour = scene.backgroundColour || "#E0E0E0";
  if (scene.shapes) {
    for (let i = 0; i < scene.shapes.length; i++) {
      if (Scene.shapes[i]) {
        Scene.shapes[i].centreOfMass = { ...scene.shapes[i].centreOfMass };
        Scene.shapes[i].vertices = [...scene.shapes[i].vertices];
      } /*else {
        Scene.shapes[i] = new Shape(
          scene.shapes[i].centreOfMass,
          scene.shapes[i].vertices
        );*/

      // }
    }
  }

  // Scene.shapes[5].centreOfMass = scene.shapes[5].centreOfMass;
  // console.log(JSON.stringify(Scene.shapes[5]));
  // console.log(JSON.stringify(scene.shapes[5]));
}

// createWalls();

export default Scene;
