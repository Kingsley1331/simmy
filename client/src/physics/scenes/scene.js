const Scene = {
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

export default Scene;
