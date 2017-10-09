import React, { Component } from 'react';
import firebase from '../../fire.js';

class InputData extends Component {
    constructor() {
        super();
        this.state = {
            currentName: '',
            currentSchool: '',
            currentDescription: '',
            students: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        //look at this database in firebase
        const ginnahRef = firebase.database().ref('ginnahs');
        //put a firebase listener method call 'value' and snapshot is a bird's eye view of the items ref in the database
        ginnahRef.on('value', (snapshot) => {
            let ginnahs = snapshot.val();
            //create a new state and push the results into it with a for loop
            let newState = [];
            for(let ginnah in ginnahs) {
                newState.push({
                    id: ginnah,
                    name: ginnahs[ginnah].name,
                    school: ginnahs[ginnah].school,
                    description: ginnahs[ginnah].description
                });
            }
            //update the state from the database to students so that we can display it later.
            this.setState({
                students: newState
            });
            console.log(this.state.students);
        });
    }

    handleChange(e) {

        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        //carve out a space in firebase where we would like to store all the items
        const ginnahRef = firebase.database().ref('ginnahs');
        //grab the details the user typed in 
        const ginnah = {
            name: this.state.currentName,
            school: this.state.currentSchool,
            description: this.state.currentDescription
        }
        //similiar to array.push method, sends a copy of the object to store in firebase
        ginnahRef.push(ginnah);
        //to set the inputs to blank after we submit
        this.setState({
            currentName: '',
            currentSchool: '',
            currentDescription: ''
        });
    }

    removeGinnah(ginnahId) {
        const ginnahRef = firebase.database().ref(`/ginnahs/${ginnahId}`);
        ginnahRef.remove();
    }

    render() {
        return(
            <div className='app'>
                <header>
                    <div className='wrapper'>
                        <h1>Add Ginnah!</h1>
                    </div>
                </header>
                <div>
                    <form onSubmit={this.handleSubmit}>
                     <input type="text" name="currentName" placeholder="Ginnah's name?" onChange={this.handleChange} value={this.state.currentName}/>
                     <input type="text" name="currentSchool" placeholder="Ginnah's school?" onChange={this.handleChange} value={this.state.currentSchool}/>
                     <input type="text" name="currentDescription" placeholder="Ginnah's description" onChange={this.handleChange} value={this.state.currentDescription}/>
                     <button>Add Ginnah</button>
                    </form>
                </div>
                <section className='display-item'>
                    <div className='wrapper'>
                        <ul>
                            {this.state.students.map((ginnah) => {
                                return (
                                    <li key={ginnah.id}>
                                        <h3>Ginnah: {ginnah.name}</h3>
                                        <p>School: {ginnah.school}</p>
                                        <p>Description: {ginnah.description}</p>
                                        <button onClick={() => this.removeGinnah(ginnah.id)}>Remove Ginnah</button>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </section>

            </div>
        )
    }
}

export default InputData;