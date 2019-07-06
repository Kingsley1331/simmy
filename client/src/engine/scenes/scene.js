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
          // Scene.shapes[i] = {};
          // Scene.shapes[i].centreOfMass = {};
          Scene.shapes[i].centreOfMass.x = scene.shapes[i].centreOfMass.x;
          Scene.shapes[i].centreOfMass.y = scene.shapes[i].centreOfMass.y;
          Scene.shapes[i].vertices = [];
          // Scene.shapes[i].boundingRect = {};
          // Scene.shapes[i].boundingRect.vertices = [];
          for (let j = 0; j < scene.shapes[i].vertices.length; j++) {
            Scene.shapes[i].vertices[j] = {};
            Scene.shapes[i].vertices[j].x = scene.shapes[i].vertices[j].x;
            Scene.shapes[i].vertices[j].y = scene.shapes[i].vertices[j].y;
          }

          // for (
          //   let k = 0;
          //   k < scene.shapes[i].boundingRect.vertices.length;
          //   k++
          // ) {
          //   scene.shapes[i].boundingRect.vertices = [];
          //   Scene.shapes[i].boundingRect.vertices[k] = {};
          //   Scene.shapes[i].boundingRect.vertices[k].x =
          //     scene.shapes[i].boundingRect.vertices[k].x;
          //   Scene.shapes[i].boundingRect.vertices[k].y =
          //     scene.shapes[i].boundingRect.vertices[k].y;
          // }
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
