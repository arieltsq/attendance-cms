import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Firebase.css";
import Display from "./Display";
import Form from "./Form";
import { firebaseConnect, helpers } from "react-redux-firebase";
const { isLoaded, isEmpty, dataToJS } = helpers;

// map the initate state to props

class FirebaseMain extends Component {
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

  addToFirebase = e => {
    e.preventDefault();
    console.log("Add to firebase being triggered");

    if (this.state.editStatus) {
      //editing 
      return this.props.firebase.update(`/ginnahs/${this.state.editIndex}`, {
        name: this.state.name,
        school: this.state.school,
        description: this.state.description
      });
    } else {
      // adding
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
    // putting information into the textboxes
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

    return (
      <div className="Firebase_Container">
        <div clas className="item item_first Navbar">
          <Link to="/">
            <button>Back to home</button>
          </Link>
        </div>
        {/* <div className="Container_2" >
          <div clasName="Container_item1">
            <p>blahblahblahblah</p>
          </div>
          <div clasName="Container_item1">
            <p>blahblahblahblah</p>
          </div>
        </div> */}
        <div className="Container_2" >
          <div className="Container_left">
            <h4>Add Ginnah</h4>
            <Form
              name={this.state.name}
              school={this.state.school}
              description={this.state.description}
              submitGinnahChange={this.addToFirebase}
              onChange={this.updateChanges}
            />
          </div>
          <div className="Container_left">
            <h4>All Ginnahs</h4>
            {!isLoaded(ginnahs)
              ? "Loading"
              : isEmpty(ginnahs)
                ? "Ginnah list is empty"
                : Object.keys(ginnahs).map((key, id) =>
                    <Display
                      key={id}
                      ginnah={ginnahs[key]}
                      id={key}
                      editGinnah={() => this.editGinnah(key)}
                      deleteGinnah={() => this.deleteGinnah(key)}
                    />
                  )}
          </div>
        </div>
        <div className="item item_last" />
      </div>
    );
  }
}

// const number = 1;

const wrappedFirebaseMain = firebaseConnect( 
  ({ match }) => {
    console.log('== HERE', match);
    return [
    // "/ginnahs"
    {
      path: '/ginnahs',
      storeAs: 'ginnahs', // place in redux under "myTodos"
      queryParams: ['orderByKey=name', 'limitToFirst=20'],
    }
  ]
})(FirebaseMain);

export default connect(({ firebase }) => ({
  ginnahs: dataToJS(firebase, "/ginnahs")
}))(wrappedFirebaseMain);
