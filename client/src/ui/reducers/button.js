import Scene from "../../engine/scenes/scene";

const buttonReducer = (state = shapeSelection, action) => {
  switch (action.type) {
    case "SELECT":
      return selectShape(action.payload, shapeSelection, state);
    default:
      return shapeSelection;
  }
};

function selectShape(selected = "", shapes, state) {
  var newShapes = {};
  for (let shape in shapes) {
    newShapes[shape] = false;
  }
  newShapes[selected] = !state[selected];
  return newShapes;
}

const shapeSelection = {
  save: false,
  update: false,
  play: false,
  step: false,
  square: false,
  triangle: false,
  pentagon: false,
  hexagon: false,
  circle: false,
  plus: false,
  arrow: false,
  star: false,
  tShape: false,
  bar: false,
  box: false,
  _delete: false,
  polyline: false,
  draw: false,
  clone: false,
  reshape: false,
  resize: false,
  rotate: false,
  manageShape: false,
  colour: false
};

export default buttonReducer;
