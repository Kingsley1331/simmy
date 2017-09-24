import { combineReducers } from 'redux';
import userReducer from './user';
import sceneReducer from './scene';

const reducer = combineReducers({
  users: userReducer,
  scenes: sceneReducer
});

export default reducer;
