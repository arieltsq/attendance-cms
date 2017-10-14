import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { firebaseConnect, helpers } from 'react-redux-firebase';
const { isLoaded, isEmpty, dataToJS } = helpers

// map the initate state to props

class Main extends Component {
  addToFirebase = () => {
    
  }
  render () {
    const { ginnahs } = this.props
    console.log(ginnahs)
    const ginnahList = !isLoaded(ginnahs)
      ? 'Loading'
      : isEmpty(ginnahs)
        ? 'Ginnah list is empty'
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
          )

    return (
      <div className='Main'>
        <div className='Main-Navbar'>
          <Link to='/'>
            <button>Back to home</button>
          </Link>
        </div>
        <input type="text" ref="name" />
        <input type="text" ref="school" />
        <input type="text" ref="description" />
        <button onClick={this.handleAdd}>
          Add
        </button>
        {ginnahList}
       
      </div>
    )
  }
}

const wrappedMain = firebaseConnect(['/ginnahs'])(Main)

export default connect(({ firebase }) => ({
  ginnahs: dataToJS(firebase, '/ginnahs')
}))(wrappedMain)
