import { combineReducers } from "redux";

// routerReducer() :
// You must add this reducer to your store for syncing to work.
// A reducer function that stores location updates from history. If you use combineReducers, it should be nested under the routing key.
import { routerReducer } from "react-router-redux";

// All the reducers
import ginnahReducer from "./ginnah";
import taoReducer from "./tao";
import kakiaReducer from "./kakia";

 const rootReducer = combineReducers({
    ginnahs: ginnahReducer,
    taos: taoReducer,
    kakias: kakiaReducer,
    routing: routerReducer
});

export default rootReducer;