import React, { Component } from 'react'
import Profile from '../../shared/img/profile.jpg'

class SideBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      email: '',
      password: '',
      selected: '',
    }
  }
  handleSelect = (event) => {
    this.props.onSelect(event);
  }
  // <img src={Profile} className = "picture" alt='Profile Pic' />
  // <div className = "profile">
  //   Ceiline Zhang
  // </div>
  render() {
    return (
      <div className = "sidebar">
        <div className = "menu">
          <div className = "title" onClick={() =>{this.handleSelect('Homepage')}}>
            Homepage
          </div>
          <div className = "title" onClick={() =>{this.handleSelect('Ranking')}}>
            Ranking
          </div>
          <div className = "title" onClick={() =>{this.handleSelect('Invest')}}>
            Invest
          </div>
          <div className = "title" onClick={() =>{this.handleSelect('Explore')}}>
            Explore
          </div>
          <div className = "title" onClick={() =>{this.handleSelect('Settings')}}>
            Settings
          </div>
        </div>
     </div>
    )
  }
}

export default SideBar
