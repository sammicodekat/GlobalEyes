/* global document */

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import MyRouter from './components/MyRouter'

import store from './store'

render(
  <Provider store={store}>
    <MyRouter />
  </Provider>,
  document.getElementById('root')
)
