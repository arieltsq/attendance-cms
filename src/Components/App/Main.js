import React, { Component } from "react";
import { Link } from 'react-router-dom';

import "./App.css";

class Main extends Component {
  render() {
    console.log(this.props);

    return (
      <div className="Main">
        <h1 className="Main-title"> Welcome to Attendance CMS System</h1>
        <Link to='/Add'><button>Add</button></Link>
      </div>
    );
  }
}

export default Main;

/* {React.cloneElement(this.props.children, this.props)} */
