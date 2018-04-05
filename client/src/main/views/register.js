import React, { Component } from 'react'
import PropTypes from 'prop-types'

import WebApi from '../web-api'

import {
  USERNAME,
  EMAIL,
  PASSWORD,
  CONFIRM_PASSWORD,
} from './constants'


class Register extends Component {
  render() {
    return (
      <div className='login-form'>
        <div className='login-form-header'>
          <h2>Sign up</h2>
        </div>
        <form onSubmit={this.register}>
          <input
            className = "text-box"
            type='text'
            placeholder='Username'
            value={this.props.creds[USERNAME]}
            onChange={e => this.changeInput(USERNAME, e.target.value)}
          />
          <input
            className = "text-box"
            type='text'
            placeholder='Email'
            value={this.props.creds[EMAIL]}
            onChange={e => this.changeInput(EMAIL, e.target.value)}
          />
          <input
            className = "text-box"
            type='password'
            placeholder='Password'
            value={this.props.creds[PASSWORD]}
            onChange={e => this.changeInput(PASSWORD, e.target.value)}
          />
          <input
            className = "text-box"
            type='password'
            placeholder='Confirm Password'
            value={this.props.creds[CONFIRM_PASSWORD]}
            onChange={e => this.changeInput(CONFIRM_PASSWORD, e.target.value)}
          />
          <div className='login-form-footer'>
            <label htmlFor="r1"><input type="radio" id="r1" />I agree to the terms and conditions</label>
          </div>
          <input className = "primary-button" type='submit' value='Submit' />
        </form>
     </div>
    )
  }

  register = (event) => {
    event.preventDefault()
    this.props.onRegister()
  }

  changeInput = (name, value) => {
    this.props.onUpdateText(name, value.slice(0))
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

Register.propTypes = {
  creds: PropTypes.object.isRequired,
  onUpdateText: PropTypes.func.isRequired,
  onRegister: PropTypes.func.isRequired,
}

export default Register
