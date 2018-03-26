import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from 'react-router-dom'
import axios from 'axios'

import 'app/styles/app.css'

import WebApi from './web-api'

const publicpage = () => {
  return (
    <div>
      Public
    </div>
  )
}

class login extends Component {
  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    localStorage.setItem('authenticated', JSON.stringify(true))
    return (
      <Redirect to={from} />
    )
  }
}

const protectedpage = () => {
  return (
    <div>
      Protected
    </div>
  )
}

const PrivateRoute = ({
  component: Component,
  ...args,
}) => {
  return (
    <Route
      {...args}
      render={(props) => {
        const isLoggedIn = JSON.parse(localStorage.getItem('authenticated'))
        if (isLoggedIn) {
          return (
            <Component {...props} />
          )
        } else {
          return (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: props.location }
              }}
            />
          )
        }
      }}
    />
  )
}

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      displayText: '',
    }
  }

  componentWillMount() {
    this.hitApi()
      .then(res => this.setState({ displayText: res.data }))
      .catch(err => console.log(err))
  }

  hitApi = async() => {
    const response = await axios.get('/api/users')

    if (response.status !== 200) throw Error(response.statusText)
    return response.data
  }

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

            <Route path='/public' component={publicpage} />
            <Route path='/login' component={login} />
            <PrivateRoute path='/protected' component={protectedpage} />
          </div>
        </div>
      </Router>
    )
  }

  login = async() => {
    const response = await WebApi.login()
    console.log(response)
  }

  logout = async() => {
    const response = await WebApi.logout()
    console.log(response)
  }

  register = async() => {
    const response = await axios.post('/api/auth/register')
    console.log(response)
  }
}

export default App
