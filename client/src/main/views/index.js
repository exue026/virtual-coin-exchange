import React, { Component } from 'react'

import Header from './header'
import Login from './login'
import Footer from './footer'

import '../styles/index.css'

class MainPage extends Component {
  render() {
    return (
      <div className='mainpage-container'>
        <Header />
        <div className='mainpage-body'>
          <div className='login-container'>
            <div className='site-intro-text'>
              <h1>What's your strategy?</h1>
              <p>
                Sign up to start your free session and test your cryptocurrency trading strategies
                and expertise in our real time virtual simulator!
              </p>
            </div>
            <Login />
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default MainPage
