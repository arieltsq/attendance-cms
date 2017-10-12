// Basic Components import
import React, { Component } from "react";
import { Link } from "react-router-dom";
// Dumb Components
import Form from "./Form";
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
      showForm: false,
      name: "",
      school: "",
      description: "",
      statusLabel: "",
      editIndex: "",
      editStatus: false
    };
  }

  updateChanges = e => {
    let currentState = this.state;
    let key = e.target.name;
    let value = e.target.value;
    currentState[key] = value;
    this.setState(state => ({ ...state, currentState }));
  };

  display = () => {
    console.log("display function");
  };

  submitGinnahChange = e => {
    e.preventDefault();
    console.log("addGinnahSubmit is clicked");
    this.state.editStatus
      ? this.props.editGinnah(
          this.state.name,
          this.state.school,
          this.state.description,
          this.state.editIndex
        )
      : this.props.addGinnah(
          this.state.name,
          this.state.school,
          this.state.description
        );
    this.setState(state => ({
      ...state,
      name: "",
      school: "",
      description: "",
      showForm: false
    }));
    // this.setState(state=>({...state, isSend: true}))
  };

  deleteGinnahClick = index => {
    // e.preventDefault();
    console.log("delete clicked");
    console.log(`${index} clicked`);

    this.props.deleteGinnah(index);
  };
  editGinnahClick = index => {
    const ginnahProps = this.props.ginnahs;
    this.setState({ statusLabel: "Edit" });
    for (let key of ginnahProps) {
      if (ginnahProps.indexOf(key) === index) {
        console.log(key);
        this.setState(state => ({
          ...state,
          name: key.name,
          school: key.school,
          description: key.description,
          editIndex: index,
          showForm: true,
          editStatus: true
        }));
      }
    }
  };
  showAddGinnahComponent = () => {
    this.setState({ showForm: true });
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
            {this.state.showForm
              ? <div className="AllGinnahs-Add">
                  {this.state.statusLabel === "Edit"
                    ? <h2>Edit Ginnah</h2>
                    : <h2>Add Ginnah</h2>}
                  <Form
                    name={this.state.name}
                    schools={this.state.school}
                    description={this.state.description}
                    onChange={this.updateChanges}
                    submitGinnahChange={this.submitGinnahChange}
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
