import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import { initStore } from './Store'
// routes components
import InputData from './Components/InputData/InputData'
import Kakia from './Components/Kakia/AllKakias'
import App from './Components/App/App'
import Ginnah from './Components/Ginnah/AllGinnah'
import Tao from './Components/Tao/AllTao'
// const storeAndHistory = initStore()
// const history = storeAndHistory[1]

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={App} />
        <Route path='/Add' component={InputData} />
        <Route exact path='/Tao'component={Tao} />
        <Route exact path='/Kakia' component={Kakia} />
        <Route exact path='/Ginnah' component={Ginnah} />
      </Switch>
    </Router>
  )
}
