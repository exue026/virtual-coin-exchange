import React, { Component } from 'react';
import logo from './logo.svg';
import 'app/styles/App.css';

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
    const response = await fetch('/api')
    const body = await response.json()

    if (response.status !== 200) throw Error(body.message)
    return body
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.state.displayText}</h1>
        </header>
      </div>
    )
  }
}

export default App
