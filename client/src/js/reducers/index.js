import { combineReducers } from 'redux';
import userReducer from './user';
import sceneReducer from './scene';
import authReducer from './authReducer';

const reducer = combineReducers({
  users: userReducer,
  scenes: sceneReducer,
  auth: authReducer
});

export default reducer;
