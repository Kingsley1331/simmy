const buttonReducer = (state={}, action) => {
  switch (action.type) {
    case 'SELECT':
      return selectShape(action.payload, shapeSelection);
    default:
    return shapeSelection;
  }
}

function selectShape(selected='', shapes) {
  for (let shape in shapes) {
    if (shape === selected) {
      shapes[shape] = true;
    } else {
      shapes[shape] = false;
    }
  }
  return shapes;
}

const shapeSelection = {
  play: false,
  none: false,
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
  box: false
};

export default buttonReducer;
