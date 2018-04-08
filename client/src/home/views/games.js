import React, { Component } from 'react'
import Calendar from '../../shared/img/ic_perm_contact_calendar_black_24px.svg'
import Money from '../../shared/img/ic_attach_money_black_24px.svg'
import Timer from '../../shared/img/ic_timer_black_24px.svg'
import Modal from 'react-modal'

class Games extends Component {
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
      <div className= "game">
        <div className = "nameBar">
          {this.props.game.name}
        </div>
        <div className = "information">
          <img src={Money} className = "icon" alt='Profile Pic' />
          {this.props.game.startingBudget}
          <img src={Timer} className = "iconTime" alt='Profile Pic' />
          {this.props.game.start}-{this.props.game.end}
          <img src={Calendar} className = "iconTime" alt='Profile Pic' />
          {this.props.game.players.toString()}
          <button className = "third-button">
            Enter
          </button>
          <button className = "third-button-accent">
            Settings
          </button>
        </div>
     </div>
    )
  }
}

export default Games
