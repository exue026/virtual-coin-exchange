import React, { Component } from 'react'

import WebApi from '../web-api'

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      email: '',
      password: '',
    }
  }

  render() {
    return (
      <div className='login-form'>
        <div className='login-form-header'>
          <h2>Sign up</h2>
        </div>
        <form onSubmit={this.register}>
          <input type='text' placeholder='Username' value={this.state.username} onChange={this.changeInput} className = "text-box"/>
          <input type='text' placeholder='Email' value={this.state.email} onChange={this.changeInput} className = "text-box"/>
          <input type='text' placeholder='Password' value={this.state.password} onChange={this.changeInput} className = "text-box"/>
          <input type='text' placeholder='Confirm Password' value={this.state.password} onChange={this.changeInput} className = "text-box"/>
          <div className='login-form-footer'>
            <label htmlFor="r1"><input type="radio" id="r1" />I agree to the terms and conditions</label>
          </div>
          <input className = "primary-button" type='submit' value='Submit' />
        </form>
     </div>
    )
  }

  register = async(event) => {
    event.preventDefault()
    const response = await WebApi.register(
      this.state.username,
      this.state.email,
      this.state.password,
    )
  }

  changeInput = (event) => {
    const name = event.target.placeholder.toLowerCase()
    this.setState({
      [name]: event.target.value
    })
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
