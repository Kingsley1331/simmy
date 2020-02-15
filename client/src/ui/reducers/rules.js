export const ruleReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_RULE":
      state = action.payload;
      console.log("%cA SINGLE RULE", "color:blue; font-weight:bold;");
      break;
    default:
  }
  return state;
};
export const rulesReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_RULES":
      state = { ...state };
      state[payload.shapeId] = payload.rules;
      console.log("%cA SINGLE RULE", "color:blue; font-weight:bold;");
      break;
    case "UPDATE_RULES":
      state = { ...state };
      state[payload.shapeId] = payload.rules;
      console.log("%cA SINGLE RULE", "color:blue; font-weight:bold;");
      break;
    default:
  }
  return state;
};
