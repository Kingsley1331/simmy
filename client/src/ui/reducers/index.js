import { combineReducers } from "redux";
import userReducer from "./user";
import { sceneReducer, scenesReducer } from "./scene";
import { rulesReducer, globalRulesReducer } from "./rules";
import authReducer from "./authReducer";
import buttonReducer from "./button";
import selectedShapeReducer from "./selectedShape";
import { eventTypeReducer, globalEventTypeReducer } from "./eventType";

const reducer = combineReducers({
  users: userReducer,
  scene: sceneReducer,
  scenes: scenesReducer,
  auth: authReducer,
  buttons: buttonReducer,
  rules: rulesReducer,
  globalRules: globalRulesReducer,
  selectedShape: selectedShapeReducer,
  event: eventTypeReducer,
  globalEvent: globalEventTypeReducer
});

export default reducer;
