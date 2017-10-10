import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addKakia } from '../../actions/actions';

class AddKakias extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            school: ''
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
        console.log(this.state)
        console.log("clicking submit from addkakias.js")

        this.props.addKakia(this.state);
    }
    render() {
        console.log(this)
        return (
            <div>
                <h2>Add kakias</h2>
                <form onSubmit={this.onSubmit}>
                    <input type="text" name="name" placeholder="Kakia's name" onChange={this.onChange} value={this.state.name}/>
                    <input type="text" name="school" placeholder="Kakia's School" onChange={this.onChange} value={this.state.school}/>
                    <button>Add Kakia</button>
                </form>

            </div>
        )
    }
}

//pick things from the state
const mapStateToProps = (state) => {
    return {
        // kakias: state.kakias
    }
}
// dispatching the action to the store
const mapDispatchToProps = (dispatch) => {
    return {
        addKakia: (kakiaDetails) => {dispatch(addKakia(kakiaDetails))},
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddKakias);