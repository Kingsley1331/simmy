const selectedShapeReducer = (state = "", action) => {
  if (action.type === "SELECT_SHAPE") {
    state = action.payload;
  }
  return state;
};

export default selectedShapeReducer;
