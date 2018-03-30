import React, { Component } from 'react'

import Header from './header'
import Login from './login'
import Footer from './footer'


class MainPage extends Component {
  render() {
    return (
      <div className='mainpage-container'>
        <Header />
        <div className='mainpage-body'>
          <div className='login-container'>
            <div className='site-intro-text'>
              <h1 onClick={this.notify}>What's your strategy?</h1>
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

  notify = () => {
    /*
    toast.success("Warning Notification !", {
      position: toast.POSITION.BOTTOM_LEFT
    })
    */
  }
}

export default MainPage
