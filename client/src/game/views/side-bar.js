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
      Homepage: "title",
      Ranking: "title",
      Invest: "title",
      Explore: "title",
      Settings: "title",
    }
  }
  handleSelect = (event) => {
    this.props.onSelect(event);
    if(event == "Homepage"){
    this.setState({
      Homepage: "title-selected",
      Ranking: "title",
      Invest: "title",
      Explore: "title",
      Settings: "title",
    })
    }
    if(event == "Ranking"){
    this.setState({
      Homepage: "title",
      Ranking: "title-selected",
      Invest: "title",
      Explore: "title",
      Settings: "title",
    })
    }
    if(event == "Invest"){
    this.setState({
      Homepage: "title",
      Ranking: "title",
      Invest: "title-selected",
      Explore: "title",
      Settings: "title",
    })
    }
    if(event == "Settings"){
    this.setState({
      Homepage: "title",
      Ranking: "title",
      Invest: "title",
      Explore: "title",
      Settings: "title-selected",
    })
    }
    if(event == "Explore"){
    this.setState({
      Homepage: "title",
      Ranking: "title",
      Invest: "title",
      Explore: "title-selected",
      Settings: "title",
    })
    }

  }
  // <img src={Profile} className = "picture" alt='Profile Pic' />
  // <div className = "profile">
  //   Ceiline Zhang
  // </div>
  render() {
    return (
      <div className = "sidebar">
        <div className = "menu">
          <div className = {this.state.Homepage} onClick={() =>{this.handleSelect('Homepage')}}>
            Homepage
          </div>
          <div className = {this.state.Ranking} onClick={() =>{this.handleSelect('Ranking')}}>
            Ranking
          </div>
          <div className = {this.state.Invest} onClick={() =>{this.handleSelect('Invest')}}>
            Invest
          </div>
          <div className = {this.state.Explore} onClick={() =>{this.handleSelect('Explore')}}>
            Explore
          </div>
          <div className = {this.state.Settings} onClick={() =>{this.handleSelect('Settings')}}>
            Settings
          </div>
        </div>
     </div>
    )
  }
}

export default SideBar
