import { combineReducers } from "redux";
import userReducer from "./user";
import { sceneReducer, scenesReducer } from "./scene";
import authReducer from "./authReducer";
import buttonReducer from "./button";

const reducer = combineReducers({
  users: userReducer,
  scene: sceneReducer,
  scenes: scenesReducer,
  auth: authReducer,
  buttons: buttonReducer
});

export default reducer;
