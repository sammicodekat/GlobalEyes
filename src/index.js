import React from 'react';
import { render } from 'react-dom';
import { Provider }  from 'react-redux';
import MyRouter from './components/MyRouter';
import { getScenarios } from './actions/scenarioActions'

import store from './store';
store.dispatch(getScenarios());
render(
  <Provider store={store}>
    <MyRouter/>
  </Provider>,
  document.getElementById('root')
);
