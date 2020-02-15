import { combineReducers } from "redux";
import userReducer from "./user";
import { sceneReducer, scenesReducer } from "./scene";
import { rulesReducer } from "./rules";
import authReducer from "./authReducer";
import buttonReducer from "./button";
import selectedShapeReducer from "./selectedShape";

const reducer = combineReducers({
  users: userReducer,
  scene: sceneReducer,
  scenes: scenesReducer,
  auth: authReducer,
  buttons: buttonReducer,
  rules: rulesReducer,
  selectedShape: selectedShapeReducer
});

export default reducer;
