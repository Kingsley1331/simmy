export const scenesReducer = (state = {}, action) => {
  const { payload } = action;
  switch (action.type) {
    case "GET_SCENES":
      state = payload;
      console.log("%cLIST OF SCENES", "color:blue; font-weight:bold;");
      break;
    default:
  }

  return state;
};

export const sceneReducer = (state = {}, action) => {
  const { payload } = action;
  switch (action.type) {
    case "GET_SCENE":
      state = action.payload;
      console.log("%cA SINGLE SCENE", "color:blue; font-weight:bold;");
      break;
    case "UPDATE_RULES":
      console.log("Rules payload =>", payload);
      state = { ...state, rules: payload };
      break;
    default:
  }
  console.log("new state", state);
  return state;
};
