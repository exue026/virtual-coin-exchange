import React, { Component } from 'react'

class Login extends Component {
  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    localStorage.setItem('authenticated', JSON.stringify(true))
    return (
      <Redirect to={from} />
    )
  }
}

export default Login
