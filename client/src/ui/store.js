import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";

import reducers from "./reducers";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const middleware = applyMiddleware(thunk, sagaMiddleware, createLogger());

const store = createStore(reducers, middleware);

sagaMiddleware.run(rootSaga);

export default store;
