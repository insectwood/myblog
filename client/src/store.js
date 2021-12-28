import {createStore, compose, applyMiddleware} from "redux";
import createSagaMiddleware from "redux-saga";
import {createBrowserHistory} from "history"
import {routerMiddleware} from "connected-react-router";

import createRootReducer from "./redux/reducers/index";
import rootSaga from "./redux/sagas";

const sagaMiddleware = createSagaMiddleware();
const init = {};
const middlewares = [sagaMiddleware, routerMiddleware(history)]
const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancer = process.env.NODE_ENV == "production" ? compose : devtools || compose;
const store = createStore(
    createRootReducer(history),
    init,
    composeEnhancer(applyMiddleware(...middlewares))
)
sagaMiddleware.run(rootSaga)

export const history = createBrowserHistory();