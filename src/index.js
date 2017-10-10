import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import { Provider } from 'react-redux'
// import { Router, Route } from "react-router";
import {Routes} from './routes'
import { initStore } from './Store'

// import { ConnectedRouter } from 'react-redux-redux';

// Makes the Redux store available to the connect() calls in the component hierarchy below. Normally, you can’t use connect() without wrapping a parent or ancestor component in <Provider>.

// If you really need to, you can manually pass store as a prop to every connect()ed component, but we only recommend to do this for stubbing store in unit ftests, or in non-fully-React codebases. Normally, you should just use <Provider>.

const storeAndHistory = initStore()
const store = storeAndHistory[0]
// const history = storeAndHistory[1]

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
)
