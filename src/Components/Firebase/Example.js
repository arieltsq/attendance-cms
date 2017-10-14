import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { firebaseConnect, helpers } from "react-redux-firebase";
const { isLoaded, isEmpty, dataToJS } = helpers;

// map the initate state to props

class Main extends Component {
  updateChanges = e => {
    // let currentState = this.state;
    let key = e.target.name;
    let value = e.target.value;
    // currentState[key] = value;
    // this.setState(state => ({ ...state, currentState }));
    console.log(value);
  };

  addToFirebase = () => {
    console.log("Add to firebase being triggered");
    // const { newGinnah } = this.refs;
    console.log(this.name.value);
    return this.props.firebase
      .push("/ginnahs", {
        name: this.name.value,
        school: this.school.value,
        description: this.description.value
      })
      .then(() => {
        console.log("New Ginnah Created");
      })
      .catch(err => {
        console.log("error logging from creating ginnah:", err);
      });
  };
  onChange = () => {
    console.log("on change is being triggered");
  };
  render() {
    const { ginnahs } = this.props;
    console.log(ginnahs);
    const ginnahList = !isLoaded(ginnahs)
      ? "Loading"
      : isEmpty(ginnahs)
        ? "Ginnah list is empty"
        : Object.keys(ginnahs).map((key, id) =>
            <div key={id}>
              <p>
                Name:{ginnahs[key].name}
              </p>
              <p>
                School:{ginnahs[key].school}
              </p>
              <p>
                description:{ginnahs[key].description}
              </p>
            </div>
          );

    return (
      <div className="Main">
        <div className="Main-Navbar">
          <Link to="/">
            <button>Back to home</button>
          </Link>
        </div>
        <input
          type="text"
          ref={ref => {
            this.name = ref;
          }}
          onChange={this.updateChanges}
        />
        <input
        type="text"
        ref={ref => {
          this.school = ref;
        }}
        onChange={this.updateChanges}
      />
        <input
          type="text"
          ref={ref => {
            this.description = ref;
          }}
          placeholder="description"
        />
        <button onClick={this.addToFirebase}>Add</button>
        {ginnahList}
      </div>
    );
  }
}

const wrappedMain = firebaseConnect(["/ginnahs"])(Main);

export default connect(({ firebase }) => ({
  ginnahs: dataToJS(firebase, "/ginnahs")
}))(wrappedMain);
