import { combineReducers } from "redux";

// routerReducer() :
// You must add this reducer to your store for syncing to work.
// A reducer function that stores location updates from history. If you use combineReducers, it should be nested under the routing key.
import { routerReducer } from "react-router-redux";

// All the reducers
import ginnah from "./ginnah";
import taoReducer from "./tao";
import kakiaReducer from "./kakia";


<<<<<<< HEAD:src/reducers/index.js
 const rootReducer = combineReducers({
    ginnahs: ginnah,
=======
const rootReducer = combineReducers({
    ginnahs: ginnahReducer,
>>>>>>> master:src/Reducers/IndexReducers.js
    taos: taoReducer,
    kakias: kakiaReducer,
    routing: routerReducer
});

export default rootReducer;