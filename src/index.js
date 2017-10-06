import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./Components/App/App";
import { Provider } from "react-redux";
import { Router, Route } from "react-router";
import store, { history } from "./Store";


// Makes the Redux store available to the connect() calls in the component hierarchy below. Normally, you can’t use connect() without wrapping a parent or ancestor component in <Provider>.

// If you really need to, you can manually pass store as a prop to every connect()ed component, but we only recommend to do this for stubbing store in unit tests, or in non-fully-React codebases. Normally, you should just use <Provider>.

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} />
    </Router>
  </Provider>
);

render(router, document.getElementById("root"));
