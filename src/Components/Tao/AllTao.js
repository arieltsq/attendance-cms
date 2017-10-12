// Basic Components import
import React, { Component } from "react";
import { Link } from "react-router-dom";
// Dumb Components
import Form from "./Form";
import Tao from "./Tao";
// Binding to the store
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
// Binding Actions
import * as actionCreators from "../../actions/actions";

class AllTao extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
      name: "",
      role: "",
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

  submitTaoChange = e => {
    e.preventDefault();
    console.log("addTaoSubmit is clicked");
    this.state.editStatus
      ? this.props.editTao(
          this.state.name,
          this.state.role,
          this.state.editIndex
        )
      : this.props.addTao(this.state.name, this.state.role);
    this.setState(state => ({
      ...state,
      name: "",
      role: "",
      showForm: false
    }));
    // this.setState(state=>({...state, isSend: true}))
  };

  deleteTaoClick = index => {
    // e.preventDefault();
    console.log("delete clicked");
    console.log(`${index} clicked`);

    this.props.deleteTao(index);
  };
  editTaoClick = index => {
    const taoProps = this.props.taos;
    this.setState({ statusLabel: "Edit" });
    for (let key of taoProps) {
      if (taoProps.indexOf(key) === index) {
        console.log(key);
        this.setState(state => ({
          ...state,
          name: key.name,
          role: key.role,
          editIndex: index,
          showForm: true,
          editStatus: true
        }));
      }
    }
  };
  showAddTaoComponent = () => {
    this.setState({ showForm: true });
  };
  render() {
    const { taos } = this.props;
    return (
      <div className="AllTao">
        <Link to="/" className="Ahref-link">
          Back To Home
        </Link>
        <div className="AllTaos-container">
          <div>
            {this.state.showForm
              ? <div className="AllTaos-Add">
                  {this.state.statusLabel === "Edit"
                    ? <h2>Edit Tao</h2>
                    : <h2>Add Tao</h2>}
                  <Form
                    name={this.state.name}
                    role={this.state.role}
                    onChange={this.updateChanges}
                    submitTaoChange={this.submitTaoChange}
                  />
                </div>
              : <button
                  onClick={this.showAddTaoComponent}
                  className="ShowTao-Button"
                >
                  Add Tao
                </button>}
          </div>

          <div className="AllTaos-Display">
            <h2>All Taos</h2>
            {taos.map((tao, index) =>
              <Tao
                key={index}
                tao={tao}
                onDelete={() => this.deleteTaoClick(index)}
                onEdit={() => this.editTaoClick(index)}
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
    taos: state.taos
  };
}

// Dsip
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const TaoStore = connect(mapStateToProps, mapDispatchToProps)(AllTao);

export default TaoStore;
