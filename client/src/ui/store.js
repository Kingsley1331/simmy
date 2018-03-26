import { applyMiddleware, createStore } from "redux";
import reducers from './reducers';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger'


const middleware = applyMiddleware(thunk, createLogger());

export default createStore(reducers, middleware);
