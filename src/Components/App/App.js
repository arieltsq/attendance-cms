import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from '../../actions/actions'
import { Link } from 'react-router-dom'

import './App.css'

// map the initate state to props

class Main extends Component {
  render () {
    return (
      <div className='Main'>
        <div className='Main_Container'>
          <div id='shape_container' >
            <h1 className='Main-title'> Welcome to Attendance CMS System</h1>
          </div>

          <div className='Main-Navbar'>
            <Link to='/Add'>
              <button>Add Ginnah(firebase)</button>
            </Link>
            <Link to='/Tao'>
              <button>Access Tao Page</button>
            </Link>
            <Link to='/Kakia'>
              <button>Access Kakia Page</button>
            </Link>
            <Link to='/Ginnah'>
              <button>Access Ginnah Page</button>
            </Link>
            <Link to='/FBExample/1'>
              <button>Example of Firebase</button>
            </Link>
          </div>
        </div>

      </div>
    )
  }
}
function mapStateToProps (state) {
  return {
    // ginnahs: state.ginnahs,
    kakias: state.kakias
    // taos: state.taos
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

// subscribe to the store

const App = connect(mapStateToProps, mapDispatchToProps)(Main)

export default App
