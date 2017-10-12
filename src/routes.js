import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import { initStore } from './Store'
// routes components
import InputData from './Components/InputData/InputData'
import Kakia from './Components/Kakia/AllKakias'
import App from './Components/App/App'
import AddKakias from './Components/Kakia/AddKakias'
import Ginnah from './Components/Ginnah/AllGinnah'
// const storeAndHistory = initStore()
// const history = storeAndHistory[1]

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={App} />
        <Route path='/Add' component={InputData} />
        <Route exact path='/Kakias' component={Kakia} />
        <Route exact path='/Ginnah' component={Ginnah} />
      </Switch>
    </Router>
  )
}
