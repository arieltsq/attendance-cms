// react component
import React, { Component } from 'react'
// redux store connect, action and bind action creators
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/actions';
import { bindActionCreators } from 'redux';
//react-router link
import { Link } from 'react-router-dom';
//Dumb components
import Form from './Form';
import Kakia from './Kakia';

class AllKakias extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            school: '',
            showForm: false,
            statusLabel: "",
            editIndex: "",
            editStatus: false
        }
    }
    onChange = (e) => {
        let currentState = this.state;
        let key = e.target.name;
        let value = e.target.value;
        currentState[key] = value;
        this.setState(state => ({
            ...state,
            currentState
        }));
        // this.setState({
        //     [e.target.name]: e.target.value
        // });
    }
    submitKakiaChange = (e) => {
        e.preventDefault();
        this.state.editStatus
        ? this.props.editKakia(
            this.state.name,
            this.state.school,
            this.state.editIndex
          )
        : this.props.addKakia(
            this.state.name,
            this.state.school
          );

        this.setState(state => ({
            ...state,
            name: '',
            school: '',
            showForm: false
        }));
        //console.log("this is props.kakias", this.props.kakias);
    }
    onDelete = (value) => {
        // e.preventDefault();
        // console.log("clicked", e);
        //console.log("VALUE.CLICKED", value);
        // this.setState ({
        //     index: value
        // });
        //console.log("state.index", this.state.index)
        //console.log(this.props)
        this.props.removeKakia(value);
    }
    onEdit = (index) => {
        //console.log("on edit de index", index)
        //console.log(this.props.kakias)
        let kakiaProps = this.props.kakias;
        this.setState({ statusLabel: "Edit" });
        for (let key of kakiaProps) {
            if(kakiaProps.indexOf(key) === index) {
                console.log(key)
                this.setState(state => ({
                    ...state,
                    name: key.name,
                    school: key.school,
                    editIndex: index,
                    showForm: true,
                    editStatus: true
                }));
            }
        }
    }
    showAddKakiaComponent = () => {
        this.setState({ showForm: true });
      };
    render() {
        const { kakias } = this.props;
       // const index = this.props.kakias.findIndex((x) => x == );
        return (
            <div className="AllKakia">
                <Link to="/" className="Ahref-link">
                    Back to Home
                </Link>
                <div className="AllKakias-container">
                    <div>
                        {this.state.showForm ? 
                        <div className="AllKakias-Add">
                            {this.state.statusLabel === "Edit"
                            ? <h2>Edit kakia</h2> 
                            : <h2>Add kakia</h2> }
                            <Form onChange={this.onChange} 
                                    name={this.state.name} 
                                    school={this.state.school} 
                                    submitBtn={this.submitKakiaChange}/>
                        </div>
                        : <button onClick={this.showAddKakiaComponent}
                                className="ShowKakia-Button">
                            Add kakia
                            </button>}
                    </div>

                    <div className="AllKakias-Display">
                        <h2>Lists of Kakias</h2>
                        {
                            kakias.map((kakia, index) =>
                                <Kakia key={index} 
                                    kakia={kakia} 
                                    index={index} 
                                    onDelete={() => this.onDelete(index)}
                                    onEdit={() => this.onEdit(index)} 
                            />)
                        }
                    </div>
                </div>
            </div>
        )
    }
}

//pick things from the state
const mapStateToProps = (state) => {
    return {
        kakias: state.kakias
    }
}
// dispatching the action to the store
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actionCreators, dispatch);
  }

export default connect(mapStateToProps, mapDispatchToProps)(AllKakias);

        // const hello = this.props.hello;
    // const bye = this.props.bye;

    // const {
    //   // from s
    //   // kakias,
    //   // hello,
    //   // bye

    //   // from d

    // } = this.props