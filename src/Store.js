import { createStore } from "redux";
import { syncHistoryWithStore } from "react-router-redux";
// import { browserHistory } from 'react-router'
//import the root reducer
import createHistory from 'history/createBrowserHistory'
import rootReducer from "./reducers/index";

//importing seed data
import kakias from "./data/kakias";
import ginnahs from "./data/ginnahs";
import taos from "./data/taos";

const defaultState = {
  ginnahs,
  kakias,
  taos
};

console.log(defaultState);

export let initStore = () => {
    
    const history = createHistory();
    const store = createStore(
        rootReducer,
        defaultState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      );
       return [store,history];
}



// Creates an enhanced history from the provided history. This history changes history.listen to pass all location updates through the provided store first. This ensures if the store is updated either from a navigation event or from a time travel action, such as a replay, the listeners of the enhanced history will stay in sync.
// export const history = syncHistoryWithStore(browserHistory, store);

// // Create a history of your choosing (we're using a browser history in this case)

// export const history = syncHistoryWithStore(browserHistory, store)


// export default store;