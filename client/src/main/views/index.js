import React, { Component } from 'react'

import Strings from '../../shared/strings.js'

import Header from './header'
import Login from './login'
import Footer from './footer'
import SideBar from './side-bar'

class MainPage extends Component {
  render() {
    return (
      <div className='mainpage-container'>
        <Header />
        <SideBar />
        <div className='mainpage-body'>
          <div className='login-container'>
            <div className='site-intro-text'>
              <h1 className = "header" onClick={this.notify}>{Strings.MAIN_PAGE_TITLE()}</h1>
              <p className= "paragraph">
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
