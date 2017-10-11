import React, { Component } from "react";
import { bindActionCreators } from "redux";
// import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import * as actionCreators from "../../actions/actions";
import { Link } from "react-router-dom";
// Dumb Components
import AddGinnah from "./AddGinnah";
import Ginnah from "./Ginnah";

// import { Switch, Route } from "react-router-dom";

class AllGinnah extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      school: "",
      description: "",
      isaddGinnahSubmit: false
    };
  }

  updateChanges = e => {
    let state = this.state;
    let key = e.target.name;
    let value = e.target.value;

    state[key] = value;
    this.setState(state);
  };

  display = () => {
    console.log("display function");
  };

  addGinnahSubmit = e => {
    e.preventDefault();
    console.log("addGinnahSubmit is clicked");
    console.log(this.state.name, this.state.school);
    this.props.addGinnah(
      this.state.name,
      this.state.school,
      this.state.description
    );
    this.setState(state => ({
      ...state,
      name: "",
      school: "",
      description: ""
    }));
    // this.setState(state=>({...state, isSend: true}))
  };

  render() {
    const { ginnahs } = this.props;
    return (
      <div className="AllGinnah">
        <Link to="/" className="Ahref-link">
          Back To Home
        </Link>
        <div className="AllGinnahs-container">
          <div className="AllGinnahs-Add">
            <h2>Add Ginnahs</h2>
            <AddGinnah
              name={this.state.name}
              schools={this.state.school}
              description={this.state.description}
              onChange={this.updateChanges}
              addGinnahSubmit={this.addGinnahSubmit}
            />
          </div>
          <div className="AllGinnahs-Display">
            <h2>All Ginnahs</h2>
            {ginnahs.map((ginnah, index) =>
              <Ginnah key={index} ginnah={ginnah} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

// Connecting to the store

function mapStateToProps(state) {
  return {
    ginnahs: state.ginnahs
  };
}

// Dsip
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const GinnahStore = connect(mapStateToProps, mapDispatchToProps)(AllGinnah);

export default GinnahStore;
