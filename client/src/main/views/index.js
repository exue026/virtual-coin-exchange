import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Strings from '../../shared/strings.js'

import Header from './header'
import Login from './login'
import Footer from './footer'

import { loadPageData } from './actions'

class MainPage extends Component {
  render() {
    return (
      <div className='mainpage-container'>
        <Header />
        <div className='mainpage-body'>
          <div className='login-container'>
            <div className='site-intro-text'>
              <h1 onClick={this.notify}>{this.props.text}</h1>
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
    this.props.onChangeText(this.props.text + '1')
    /*
    toast.success("Warning Notification !", {
      position: toast.POSITION.BOTTOM_LEFT
    })
    */
  }
}

MainPage.propTypes = {
  text: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
}

const mapStateToProps = ({ mainPage }) => ({
  text: mainPage.text,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  onChangeText: loadPageData,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)
