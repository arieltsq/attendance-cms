import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import InputData from "./Components/InputData/InputData";
import Kakia from "./Components/Kakia/AllKakia";
import App from "./Components/App/App";
import { initStore } from "./Store";

const storeAndHistory = initStore();
const history = storeAndHistory[1];


export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/Add" component={InputData} />
        <Route path="/AddKakias" component={AddKakias}/>
        <Route exact path="/Kakias" component={Kakia} />
      </Switch>
    </Router>
  );
};
