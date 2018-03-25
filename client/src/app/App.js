import React, { Component } from 'react'
import axios from 'axios'

import logo from './logo.svg'

import 'app/styles/App.css'

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
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.state.displayText}</h1>
        </header>
        <div>
          <button onClick={this.login}>Log in</button>
          <button onClick={this.logout}>Logout</button>
          <button onClick={this.register}>Register</button>
        </div>
      </div>
    )
  }

  login = async() => {
    const response = await axios.post('/api/auth/login', {
      username: 'theanswer',
      password: 'qwe123'
    })
    console.log(response)
  }

  logout = async() => {
    const response = await axios.post('/api/auth/logout')
    console.log(response)
  }

  register = async() => {
    const response = await axios.post('/api/auth/register')
    console.log(response)
  }
}

export default App
