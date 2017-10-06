import { createStore } from "redux";
import { syncHistoryWithStore } from "react-router-redux";
import { BrowserRouter } from 'react-router-dom'
//import the root reducer
import rootReducer from "./Reducers/IndexReducers";

//importing seed data
import kakias from "./Data/kakias";
import ginnahs from "./Data/ginnahs";
import taos from "./Data/taos";

const defaultState = {
  ginnahs
};

const store = createStore(
  rootReducer,
  defaultState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Creates an enhanced history from the provided history. This history changes history.listen to pass all location updates through the provided store first. This ensures if the store is updated either from a navigation event or from a time travel action, such as a replay, the listeners of the enhanced history will stay in sync.
export const history = syncHistoryWithStore(BrowserRouter, store);

export default store;