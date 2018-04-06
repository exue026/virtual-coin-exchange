import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Redirect, } from 'react-router-dom'

import WebApi from '../web-api'

import {
  USERNAME,
  PASSWORD,
} from './constants'


class Header extends Component {
  render() {
    /*
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    localStorage.setItem('authenticated', JSON.stringify(true))
    return (
      <Redirect to={from} />
    )
    */
    return (
      <div className='mainpage-header'>
        <div className='mainpage-header-left'>
          Virtual Coin Exchange
        </div>
        <div className='mainpage-header-right'>
          <form className='credentials-container' onSubmit={this.login}>
            <input
              type='text'
              className="sign-in"
              placeholder='Username'
              value={this.props.creds[USERNAME]}
              onChange={e => this.changeInput(USERNAME, e.target.value)}
            />
            <input
              type='text'
              className="sign-in"
              placeholder='Password'
              value={this.props.creds[PASSWORD]}
              onChange={(e) => this.changeInput(PASSWORD, e.target.value)}
            />
            <button className = "secondary-button" >Sign in</button>
          </form>
        </div>
      </div>
    )
  }

  login = (event) => {
    event.preventDefault()
    this.props.onLogin()
  }

  changeInput = (name, value) => {
    this.props.onUpdateText(name, value.slice(0))
  }
}

Header.propTypes = {
  creds: PropTypes.object.isRequired,
  onUpdateText: PropTypes.func.isRequired,
  onLogin: PropTypes.func.isRequired,
}

export default Header
