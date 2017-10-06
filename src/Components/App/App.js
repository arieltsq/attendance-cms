import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "../Actions/ActionsCreator";

import Main from "./Main";

// map the initate state to props

function mapStateToProps(state) {
  return {
    ginnahs: state.ginnahs
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

//subscribe to the store

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;