export const eventTypeReducer = (state = "", action) => {
  if (action.type === "SELECT_EVENT") {
    state = action.payload;
  }
  if (!state) {
    return "";
  }
  return state;
};

export const globalEventTypeReducer = (state = "", action) => {
  if (action.type === "SELECT_GLOBAL_EVENT") {
    state = action.payload;
  }
  if (!state) {
    return "";
  }
  return state;
};

// export default eventTypeReducer;
