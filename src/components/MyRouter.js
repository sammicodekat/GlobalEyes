import React, { Component } from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import Layout from './Layout'
import Home from './Home'
import MapPage from './MapPage'
import ScenariosPage from './ScenariosPage'
import CreateScenarioPage from './CreateScenarioPage'
import Game from './Game'
import OneScenarioPage from './OneScenarioPage'
import EndScenarioPage from './EndScenarioPage'
import GameOverPage from './GameOverPage'
import ContinueScenarioPage from './ContinueScenarioPage'
import WaypointPage from './WaypointPage'
import FalseRoutePage from './FalseRoutePage'
import PointOfInterestPage from './pointOfInterestPage'

export default class MyRouter extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Layout}>
          <IndexRoute component={Home} />
          <Route path="/create" component={CreateScenarioPage} />
          <Route path="/scenarios" component={ScenariosPage} />
          <Route path="/continue" component={ContinueScenarioPage} />
          <Route path="/:id" component={Game}>
            <IndexRoute component={OneScenarioPage} />
            <Route path="/:id/endgame" component={EndScenarioPage} />
            <Route path="/:id/gameover" component={GameOverPage} />
            <Route path="/:id/map" component={MapPage} />
            <Route path="/:id/location/:waypointId/poi/:poiId" component={PointOfInterestPage} />
            <Route path="/:id/location/:waypointId/:falseRouteIndex" component={FalseRoutePage} />
            <Route path="/:id/location/:waypointId" component={WaypointPage} />
          </Route>
        </Route>
      </Router>
    )
  }
}
