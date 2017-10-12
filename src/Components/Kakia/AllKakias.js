import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addKakia } from '../../actions/actions';
import { removeKakia } from '../../actions/actions';
import { editKakia } from '../../actions/actions';
import { Link } from 'react-router-dom';
//Dumb components
import AddKakias from './AddKakias';
import Kakia from './Kakia';

class AllKakias extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            school: '',
            showAddKakia: false,
            changeAddtoEdit: false
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
    onAddSubmit = (e) => {
        e.preventDefault();
        //console.log(this.props)
        // console.log(this.state)
        //console.log("clicking submit from addkakias.js")
        //console.log("onsubmit method", this.state.school)
        this.props.addKakia(this.state.name, this.state.school);

        this.setState(state => ({
            ...state,
            name: '',
            school: ''
        }));
        //console.log("this is props.kakias", this.props.kakias);
    }
    onEditSubmit = (e) => {
        e.preventDefault();
        this.props.editKakia(this.state.name, this.state.school);
        this.setState(state => ({
            ...state,
            name:'',
            school: ''
        }));
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
    changeAddtoEdit = () => {
        if (this.state.changeAddtoEdit) {
        }else {
            this.setState({ changeAddtoEdit: true })
        }
    }
    onEdit = (index) => {
        console.log("on edit de index", index)
        console.log(this.props.kakias)
        let kakiaProps = this.props.kakias
        for (let i of kakiaProps) {
            if(kakiaProps.indexOf(i) === index) {
                console.log(i)
                this.setState(state => ({
                    ...state,
                    name: i.name,
                    school: i.school
                }));
            }
        }
        this.setState({ showAddKakia: true });
        this.changeAddtoEdit();
    }
    showAddKakiaComponent = () => {
        this.setState({ showAddKakia: true });
      };
    render() {
        const { kakias } = this.props;
       // const index = this.props.kakias.findIndex((x) => x == );
        return (
            <div className="AllKakia">
                <Link to="/" className="Ahref-link">Back to Home</Link>
                <div className="AllKakias-container">
                    {this.state.showAddKakia ? 
                    <div className="AllKakias-Add">
                        {this.state.changeAddtoEdit ? <h2>Edit kakia</h2> : <h2>Add kakia</h2> }
                        <AddKakias onChange={this.onChange} 
                                    name={this.state.name} 
                                    school={this.state.school} 
                                    onAddSubmit={this.onAddSubmit}
                                    onEditSubmit={this.onEditSubmit}
                                    changeAddtoEdit={this.changeAddtoEdit}
                                    changeAddtoEditState={this.state.changeAddtoEdit}/>
                    </div>
                    : <button onClick={this.showAddKakiaComponent}
                                className="ShowKakia-Button">
                        Add kakia
                        </button>}
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
    return {
        addKakia: (name, school) => {dispatch(addKakia(name, school))},
        removeKakia: (index) => {dispatch(removeKakia(index))}
    }
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