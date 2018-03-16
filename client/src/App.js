import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      response: '',
    }
  }

  componentDidMount() {
    this.hitApi()
      .then(res => this.setState({ response: res.data }))
      .catch(error => console.log(error))
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
          <h1 className="App-title">{this.state.response}</h1>
        </header>
        <p className="App-intro">
        </p>
      </div>
    );
  }
}

export default App;
