import React, { Component } from 'react'
import Profile from '../../shared/img/profile.jpg'

class TopBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div className='mainpage-header'>
        <div className='mainpage-header-left'>
          Virtual Coin Exchange
        </div>
        <div className='mainpage-header-right'>
        </div>
      </div>
    )
  }
}

export default TopBar
