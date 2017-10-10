import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { initStore } from './Store'
// routes components
import InputData from './Components/InputData/InputData'
import Kakia from './Components/Kakia/AllKakia'
import App from './Components/App/App'
import AddKakias from './Components/Kakia/AddKakias'

const storeAndHistory = initStore()
const history = storeAndHistory[1]

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={App} />
        <Route path='/Add' component={InputData} />
        <Route exact path='/AddKakias' component={AddKakias} />
        <Route exact path='/Kakias' component={Kakia} />
      </Switch>
    </Router>
  )
}
