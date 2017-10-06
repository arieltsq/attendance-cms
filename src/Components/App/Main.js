import React, { Component } from "react";

import "./App.css";

class Main extends Component {
  render() {
    console.log(this.props);

    return (
      <div className="Main">
        <h1 className="Main-title"> Welcome to Attendance CMS System</h1>
      </div>
    );
  }
}

export default Main;

/* {React.cloneElement(this.props.children, this.props)} */
