const eventTypeReducer = (state = "", action) => {
  if (action.type === "SELECT_EVENT") {
    state = action.payload;
  }
  if (!state) {
    return "";
  }
  return state;
};

export default eventTypeReducer;
