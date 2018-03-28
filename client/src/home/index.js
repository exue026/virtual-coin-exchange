import React, { Component } from 'react'

class Login extends Component {
  render() {
    return (
      <div>Homepage!</div>
    )
  }
  /*
  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    localStorage.setItem('authenticated', JSON.stringify(true))
    return (
      <Redirect to={from} />
    )
  }
  */
}

export default Login
