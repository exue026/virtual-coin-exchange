import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from 'react-router-dom'

import HomePage from '../home'

import WebApi from './web-api'


class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path='/' component={HomePage} />
      </Router>
    )
  }
}

export default App
