// Basic Components import
import React, { Component } from "react";
import { Link } from "react-router-dom";
// Dumb Components
import AddGinnah from "./AddGinnah";
import Ginnah from "./Ginnah";
// Binding to the store
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
// Binding Actions
import * as actionCreators from "../../actions/actions";

class AllGinnah extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAddGinnah: false,
      name: "",
      school: "",
      description: "",
      ginnahIndex: ""
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
      description: "",
      showAddGinnah: false
    }));
    // this.setState(state=>({...state, isSend: true}))
  };

  deleteGinnahClick = index => {
    // e.preventDefault();
    console.log("delete clicked");
    console.log(`${index} clicked`);

    this.props.deleteGinnah(index);
  };
  editGinnahClick = (index, name) => {
    console.log("edit triggerd for", index, name);
    // this.props.ginnahs.keys(index).forEach(function(element) {
    //   console.log("lopping: element");
    // });

    // REQUIRES ECMASCRIPT 2015+
    // const myStringArray = ["Hello", "World"];
    const ginnahProps = this.props.ginnahs
    for (let s of ginnahProps) {
     if(ginnahProps.indexOf(s) === index){
       console.log(s)
     }
    }
    //
    console.log("editginnah", this.props.ginnahs);
    // this.props.editGinnah(index)
  };
  showAddGinnahComponent = () => {
    this.setState({ showAddGinnah: true });
  };
  render() {
    const { ginnahs } = this.props;
    return (
      <div className="AllGinnah">
        <Link to="/" className="Ahref-link">
          Back To Home
        </Link>
        <div className="AllGinnahs-container">
          <div>
            {this.state.showAddGinnah
              ? <div className="AllGinnahs-Add">
                  <h2>Add Ginnahs</h2>
                  <AddGinnah
                    name={this.state.name}
                    schools={this.state.school}
                    description={this.state.description}
                    onChange={this.updateChanges}
                    addGinnahSubmit={this.addGinnahSubmit}
                  />
                </div>
              : <button
                  onClick={this.showAddGinnahComponent}
                  className="ShowGinnah-Button"
                >
                  Add Ginnah
                </button>}
          </div>

          <div className="AllGinnahs-Display">
            <h2>All Ginnahs</h2>
            {ginnahs.map((ginnah, index) =>
              <Ginnah
                key={index}
                ginnah={ginnah}
                index={this.state.ginnahIndex}
                onDelete={() => this.deleteGinnahClick(index)}
                onEdit={() => this.editGinnahClick(index)}
              />
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
