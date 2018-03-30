import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import './styles/App.css'

import MainPage from '../main/views'
import HomePage from '../main/views'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route exact path='/' component={MainPage} />
        </Router>
        <Router>
          <Route path='/home' component={HomePage} />
        </Router>
      </div>
    )
  }
}

export default App
