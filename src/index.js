import React from "react";
import ReactDOM from 'react-dom';
import { render } from "react-dom";
import "./index.css";
import App from "./Components/App/App";
import { Provider } from "react-redux";
<<<<<<< HEAD
import { Router, Route } from "react-router";
import {initStore} from "./store";
=======
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {initStore} from "./Store";
import InputData from "./Components/InputData/InputData";
//import { ConnectedRouter } from 'react-redux-redux';
>>>>>>> master


// Makes the Redux store available to the connect() calls in the component hierarchy below. Normally, you can’t use connect() without wrapping a parent or ancestor component in <Provider>.

// If you really need to, you can manually pass store as a prop to every connect()ed component, but we only recommend to do this for stubbing store in unit ftests, or in non-fully-React codebases. Normally, you should just use <Provider>.

const storeAndHistory = initStore();
 const store = storeAndHistory[0];
 const history = storeAndHistory[1]

ReactDOM.render(
  <Provider store={store}>
  <Router history={history}>
    <Switch>
     <Route exact path="/" component={App} />
     <Route path="/Add" component={InputData} />
    </Switch>
  </Router>
</Provider>, 
document.getElementById("root"));
