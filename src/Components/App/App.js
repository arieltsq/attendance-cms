import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from '../../actions/actions'
import { Link } from 'react-router-dom'
// import AllKakia from '../Kakia/AllKakia'
// import AllGinnah from '../Ginnah/AllGinnah'
import './App.css'
// import * as actionCreators from "../../Actions/ActionsCreator";
// import fire from './fire';

// map the initate state to props

class Main extends Component {
  render () {
    console.log(this.props)

    return (
      <div className='Main'>
        <h1 className='Main-title'> Welcome to Attendance CMS System</h1>
        <div className='Main-Navbar'>
          <Link to='/GinnahFB'>
            <button>Access Ginnah(firebase)</button>
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
        </div>
        {/* <AllGinnah {...this.props} /> */}
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
