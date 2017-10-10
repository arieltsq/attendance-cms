import React, { Component } from "react";
import Ginnah from "./Ginnah";
import { Link } from 'react-router-dom';

// import { Switch, Route } from "react-router-dom";

export default class AllGinnah extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   props
    // }
  }

  render() {
    const ginnahs = this.props.ginnahs;
    return (
      <div>
        {
          ginnahs.map((ginnahs, index) => 
            <ginnah key={index}  
                    ginnah={ginnah} 
             />)
        }
      </div>
    );
  }
}