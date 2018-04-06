import React, { Component } from 'react'
import Profile from '../../shared/img/profile.jpg'

class SideBar extends Component {
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
      <div className = "sidebar">
        <img src={Profile} className = "picture"/>
        <div className = "profile">
          Ceiline Zhang
        </div>
        <div className = "menu">
          <div className = "title">
            Home
          </div>
          <div className = "title">
            Rank
          </div>
          <div className = "title">
            Home
          </div>
          <div className = "title">
            Rank
          </div>
          <div className = "title">
            Home
          </div>
          <div className = "title">
            Rank
          </div>
        </div>
     </div>
    )
  }
}

export default SideBar
