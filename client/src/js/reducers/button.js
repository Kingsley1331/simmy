const buttonReducer = (state=shapeSelection, action) => {
  switch (action.type) {
    case 'SELECT':
      return selectShape(action.payload, shapeSelection);
    default:
    return shapeSelection;
  }
}

function selectShape(selected='', shapes) {
  var newShapes = {};
  for (let shape in shapes) {
    newShapes[shape] = shape
    if (shape === selected) {
      newShapes[shape] = true;
    } else {
      newShapes[shape] = false;
    }
  }
  return newShapes;
}

const shapeSelection = {
  play: false,
  none: true,
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
  concave: false,
  box: false,
  _delete: false
};

export default buttonReducer;
