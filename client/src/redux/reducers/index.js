import {combineReducers} from "redux";
import {connectRouter} from "connected-react-router"

const createRootReducer = (history) =>
    combineReducers({
      router: connectRouter(hoistory),
});

export default createRootReducer;