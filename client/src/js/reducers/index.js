import { combineReducers } from 'redux';
import userReducer from './user';
import sceneReducer from './scene';
import authReducer from './authReducer';
import buttonReducer from './button';

const reducer = combineReducers({
  users: userReducer,
  scenes: sceneReducer,
  auth: authReducer,
  buttons: buttonReducer
});

export default reducer;
