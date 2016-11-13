import React, { Component } from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import Layout from './Layout'
import Home from './Home'
import MapView from './MapView'
import ScenariosPage from './ScenariosPage'
import OneScenarioPage from './OneScenarioPage'
import WaypointPage from './WaypointPage'

export default class MyRouter extends Component {

  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Layout}>
          <IndexRoute component={Home} />
          <Route path="/map" component={MapView} />
          <Route path="/scenarios" component={ScenariosPage} />
          <Route path="/map/waypoints/:id" component={WaypointPage} />
          <Route path="/scenarios/:id" component={OneScenarioPage} />
        </Route>
      </Router>
    )
  }
}
