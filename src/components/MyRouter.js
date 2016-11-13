import React, { Component } from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import Layout from './Layout'
import Home from './Home'
import MapPage from './MapPage'
import ScenariosPage from './ScenariosPage'
import Game from './Game'
import OneScenarioPage from './OneScenarioPage'
import WaypointPage from './WaypointPage'

export default class MyRouter extends Component {

  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Layout}>
          <IndexRoute component={Home} />
          <Route path="scenarios" component={ScenariosPage} />
          <Route path=":id" component={Game}>
            <IndexRoute component={OneScenarioPage} />
            <Route path="map" component={MapPage} />
            <Route path=":id/location/:id" component={WaypointPage} />
          </Route>

        </Route>
      </Router>
    )
  }
}
