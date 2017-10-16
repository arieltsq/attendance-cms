import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Display from "./Display";
import Form from './Form'
import { firebaseConnect, helpers } from "react-redux-firebase";
const { isLoaded, isEmpty, dataToJS } = helpers;

// map the initate state to props

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      school: "",
      description: "",
      editStatus: false,
      editIndex: ""
    };
  }

  updateChanges = e => {
    let currentState = this.state;
    let key = e.target.name;
    let value = e.target.value;
    currentState[key] = value;
    this.setState(state => ({ ...state, currentState }));
  };
  // updateChanges = e => {
  //   let key = e.target.name;
  //   let value = e.target.value;
  //   console.log(value);
  // };

  addToFirebase = (e) => {
    e.preventDefault();
    console.log("Add to firebase being triggered");
    // const { newGinnah } = this.refs;
    if (this.state.editStatus) {
      return this.props.firebase.update(`/ginnahs/${this.state.editIndex}`, {
        name: this.state.name,
        school: this.state.school,
        description: this.state.description
      });
    } else {
      return this.props.firebase
        .push("/ginnahs", {
          name: this.state.name,
          school: this.state.school,
          description: this.state.description
        })
        .then(() => {
          console.log("New Ginnah Created");
        })
        .catch(err => {
          console.log("error logging from creating ginnah:", err);
        });
    }
  };
  deleteGinnah = ginnahId => {
    console.log("delete clicked");
    return this.props.firebase.remove(`/ginnahs/${ginnahId}`);
  };
  editGinnah = ginnahId => {
    console.log("edit clicked");
    console.log("Id being clicked", ginnahId);
    const ginnahObject = this.props.ginnahs;

    for (let keys in ginnahObject) {
      if (keys === ginnahId) {
        console.log(keys);
        console.log("the logged content", ginnahObject[keys].name);

        this.setState(state => ({
          ...state,
          name: ginnahObject[keys].name,
          school: ginnahObject[keys].school,
          description: ginnahObject[keys].description,
          editStatus: true,
          editIndex: ginnahId
        }));
      }
    }
  };
  onChange = () => {
    console.log("on change is being triggered");
  };
  render() {
    const { ginnahs } = this.props;

    const ginnahList = !isLoaded(ginnahs)
      ? "Loading"
      : isEmpty(ginnahs)
        ? "Ginnah list is empty"
        : Object.keys(ginnahs).map((key, id) =>
            <Display key={id} ginnah={ginnahs[key]} id={key} editGinnah={()=> this.editGinnah(key)}  deleteGinnah={() => this.deleteGinnah(key)}/>
          );

    return (
      <div className="Main">
        <div className="Main-Navbar">
          <Link to="/">
            <button>Back to home</button>
          </Link>
        </div>
        <div className="Example-Div">
          <h4>Add Ginnah</h4>
        <Form name={this.state.name} school={this.state.school} description={this.state.description} submitGinnahChange={this.addToFirebase} onChange={this.updateChanges} />
        </div>
        <div>
          <h4>All Ginnahs</h4>
          {ginnahList}
        </div>
      </div>
    );
  }
}

const wrappedMain = firebaseConnect(["/ginnahs"])(Main);

export default connect(({ firebase }) => ({
  ginnahs: dataToJS(firebase, "/ginnahs")
}))(wrappedMain);
