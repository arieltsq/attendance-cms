import React, { Component } from 'react'
// redux store connect, action and bind action creators
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/actions';
import { bindActionCreators } from 'redux';
//Firebase
import database from '../../fire.js'
//react-router link
import { Link } from 'react-router-dom';

import _ from 'lodash'

//Dumb components
import Form from './Form';
import GinnahFB from './GinnahFB';

class AllGinnahFB extends Component {
    constructor(props) {
      super(props);
      this.state = {
        showForm: false,
        name: "",
        school: "",
        description: "",
        statusLabel: "",
        editIndex: "",
        editStatus: false,
        ginnahs: [],
        ginnahKey: ''
      };
    }

    componentWillMount() {
      this.props.getGinnahsFB();
    }
    updateChanges = e => {
      let currentState = this.state;
      let key = e.target.name;
      let value = e.target.value;
      currentState[key] = value;
      this.setState(state => ({ ...state, currentState }));
    };
  
    onDelete = (key) => {
      this.props.deleteGinnahFB(key);
    };
    onEdit =(ginnah, key) => {
      //console.log(ginnah, key)
      this.setState({
        name: ginnah.name,
        school: ginnah.school,
        description: ginnah.description,
        ginnahKey: key,
        showForm: true,
        editStatus: true
      })
    }

    showAddGinnahComponent = () => {
      this.setState({ showForm: true });
    };

    renderGinnahs() {
      return _.map(this.props.ginnahFB, (ginnah, key) => {
        return(
          <GinnahFB key={key} ginnahFB={ginnah} onDelete={() => {this.onDelete(key)}} onEdit={() => {this.onEdit(ginnah, key)}}/>
        )
      })
    }
    onSubmit = (e) => {
      e.preventDefault()
      //on submit button press, set the states to the input fields
      let ginnahValues = {
        name: this.state.name,
        school: this.state.school,
        description: this.state.description
      }
      let ginnahKey = this.state.ginnahKey
      console.log(ginnahKey)
      if (this.state.editStatus) {
        //update value
        this.props.updateGinnahFB(ginnahValues, ginnahKey)
      } else{
        // pass the values to action to redux to connect to the database
        this.props.saveGinnahsFB(ginnahValues)
      }
      this.setState({
        name: '',
        school: '',
        description: '',
        ginnahKey: '',
        showForm: false,
        editStatus: false
      })
    }

    render() {
      const { ginnahFB } = this.props;

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
                      onSubmit={this.onSubmit.bind(this)}
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
               {this.renderGinnahs()}
              
            </div>
          </div>
        </div>
      );
    }
  }

//map values from the redux store to 'props.ginnahFB'
function mapStateToProps(state) {
  return {
    ginnahFB: state.ginnahFB
  };
}
// Dsipatch all actions
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}
// Connecting to the store
export default connect(mapStateToProps, mapDispatchToProps)(AllGinnahFB);