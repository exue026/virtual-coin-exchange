import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import { Redirect } from 'react-router-dom'

import Header from './header'
import Register from './register'
import Footer from './footer'

import {
  updateLoginText,
  updateRegisterText,
  login,
  register,
  closeNotification,
  toggleLogin,
} from './actions'

class MainPage extends Component {
  componentDidUpdate() {
    if (this.props.notificationMessage) {
      this.notify()
    }
  }

  componentWillUnmount() {
    this.props.toggleLogin()
  }

  render() {
    if (this.props.loggedIn) {
      const { from } = this.props.location.state || { from: { pathname: '/home' } }
      return (
        <Redirect to={from} push/>
      )
    }

    return (
      <div className='mainpage-container'>
        <Header
          creds={this.props.loginCreds}
          onUpdateText={this.props.onUpdateLogin}
          onLogin={this.props.onLogin}
        />
        <div className='mainpage-body'>
          <div className='login-container'>
            <div className='site-intro-text'>
              <h1 className = "header">What's your strategy?</h1>
              <p className= "paragraph">
                Sign up to start your free session and test your cryptocurrency trading strategies
                and expertise in our real time virtual simulator!
              </p>
            </div>
            <Register
              creds={this.props.registerCreds}
              onUpdateText={this.props.onUpdateRegister}
              onRegister={this.props.onRegister}
            />
          </div>
        </div>
        <Footer />
        <ToastContainer />
      </div>
    )
  }

  notify = () => {
    toast.success(this.props.notificationMessage, {
      position: toast.POSITION.BOTTOM_LEFT,
    })
    this.props.closeNotification()
  }
}

MainPage.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  registerCreds: PropTypes.object.isRequired,
  loginCreds: PropTypes.object.isRequired,
  onUpdateRegister: PropTypes.func.isRequired,
  onUpdateLogin: PropTypes.func.isRequired,
  onRegister: PropTypes.func.isRequired,
  onLogin: PropTypes.func.isRequired,
  notificationMessage: PropTypes.string,
  closeNotification: PropTypes.func.isRequired,
  toggleLogin: PropTypes.func.isRequired,
}

const mapStateToProps = ({ mainPage }) => ({
  loggedIn: mainPage.loggedIn,
  registerCreds: mainPage.register,
  loginCreds: mainPage.login,
  notificationMessage: mainPage.notificationMessage,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  onUpdateRegister: updateRegisterText,
  onUpdateLogin: updateLoginText,
  onRegister: register,
  onLogin: login,
  closeNotification: closeNotification,
  toggleLogin: toggleLogin,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)
