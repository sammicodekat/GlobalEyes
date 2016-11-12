import React, { Component } from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import Layout from './Layout'
import Home from './Home'
import MapPage from './MapPage'
import ScenariosPage from './ScenariosPage'
import OneScenarioPage from './OneScenarioPage'

export default class MyRouter extends Component {

  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Layout}>
          <IndexRoute component={Home} />
          <Route path="/map" component={MapPage} />
          <Route path="/scenarios" component={ScenariosPage} />
          <Route path="/scenarios/:id" component={OneScenarioPage} />
        </Route>
      </Router>
    )
  }
}
