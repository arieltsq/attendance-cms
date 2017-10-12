import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addKakia } from '../../actions/actions';
import { removeKakia } from '../../actions/actions';
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
            index: ''
        }
    }
    onChange = (e) => {
        let state = this.state;
        let key = e.target.name;
        let value = e.target.value;

        state[key] = value;
        this.setState(state);
        // this.setState({
        //     [e.target.name]: e.target.value
        // });

        console.log(state);
    }
    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.props)
        // console.log(this.state)
        console.log("clicking submit from addkakias.js")
console.log("onsubmit method", this.state.school)
        this.props.addKakia(this.state.name, this.state.school);

        this.setState({
            name: '',
            school: ''
        });
        console.log("this is props.kakias", this.props.kakias);
    }
    onClicked = (value) => {
        // e.preventDefault();
        // console.log("clicked", e);
        console.log("VALUE.CLICKED", value);
        // this.setState ({
        //     index: value
        // });
        //console.log("state.index", this.state.index)
        console.log(this.props)
        this.props.removeKakia(value);
    }
    render() {
        const { kakias } = this.props;
       // const index = this.props.kakias.findIndex((x) => x == );
        console.log(this)
        return (
            <div>
                <div className="LeftSide">
                    <Link to="/"><p>Back to Home</p></Link>
                    <h2>Add kakias</h2>
                    <AddKakias onChange={this.onChange} 
                                name={this.state.name} 
                                school={this.state.school} 
                                onSubmit={this.onSubmit}/>
                </div>
                <div className="RightSide">
                    <h2>Lists of kakias</h2>
                    {
                        kakias.map((kakia, index) =>
                            <Kakia key={index} kakia={kakia} index={index} onClick={()=> this.onClicked(index)}
                        />)
                    }
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