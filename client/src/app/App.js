import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from 'react-router-dom'

import WebApi from './web-api'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">{this.state.displayText}</h1>
          </header>
          <div>
            <button onClick={this.login}>Log in</button>
            <button onClick={this.logout}>Logout</button>
            <ul>
              <li><Link to='/public'>Public Page </Link></li>
              <li><Link to='/protected'>Protected Page </Link></li>
            </ul>
          </div>
        </div>
      </Router>
    )
  }
}

export default App
