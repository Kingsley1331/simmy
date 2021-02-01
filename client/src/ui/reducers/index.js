import { combineReducers } from "redux";
import userReducer from "./user";
import { sceneReducer, scenesReducer } from "./scene";
import authReducer from "./authReducer";
import buttonReducer from "./button";
import selectedShapeReducer from "./selectedShape";
import { eventTypeReducer } from "./eventType";

const reducer = combineReducers({
  users: userReducer,
  scene: sceneReducer,
  scenes: scenesReducer,
  auth: authReducer,
  buttons: buttonReducer,
  selectedShape: selectedShapeReducer,
  event: eventTypeReducer
});

export default reducer;
