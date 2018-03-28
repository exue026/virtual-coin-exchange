import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import HomePage from '../main/views'

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
