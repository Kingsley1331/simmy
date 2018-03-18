let Scene = {
  backgroundColour: '#E0E0E0',
  shapes: [],
  mousePos: {},
  context: { buffer: {} },
  cursorOnshape: false,
  selected: 'none',
  throwArray: [],
  time: 0,
  settings: {
    display: true,
    restitution: 0
  }
};

export function updateSelected(state, Scene){
  let selectedShape;
  const buttons = state.buttons;
  for(let button in buttons){
    if(buttons[button]){
      selectedShape = button;
      Scene.selected = button;
    }
  }
}

export default Scene;
