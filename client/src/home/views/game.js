import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import Calendar from '../../shared/img/ic_perm_contact_calendar_black_24px.svg'
import Money from '../../shared/img/ic_attach_money_black_24px.svg'
import Timer from '../../shared/img/ic_timer_black_24px.svg'
import Modal from '../../shared/views/modal'


class Game extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      email: '',
      open: false,
    }
  }

  onOpenModal = () => {
    this.setState({
      open:true,
    })
  }
  onCloseModal = () => {
    this.setState({
      open:false,
    })
  }
  renderModal = () => {
    return(
      <div>
        <form>
          <input
            className = "dark-text-box"
            type='text'
            placeholder='Change Game Name'
          />
          <input
            className = "dark-text-box"
            type='text'
            placeholder='Add new players'
          />
          <input
            className = "dark-text-box"
            type='password'
            placeholder='Change duration of game'
          />
          <input
            className = "dark-text-box"
            type='password'
            placeholder='Add additional budget'
          />
        </form>
      </div>
    )
  }

  settingModal = () => {
    return(
      <Modal title="Settings" message={this.renderModal()} closeModal={this.onCloseModal}/>
    )
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
          {moment(this.props.game.start).format("MMM Do YYYY")}-{moment(this.props.game.end).format("MMM Do YYYY")}
          <img src={Calendar} className = "iconTime" alt='Profile Pic' />
          {this.props.game.players.length}
          <button className="third-button" onClick={this.props.onEnter}>
            Enter
          </button>
          <button className = "third-button-accent" onClick = {() => {this.onOpenModal()}}>
            Settings
          </button>
          {this.state.open? this.settingModal() : ''}
        </div>
     </div>
    )
  }
}

Game.propTypes = {
  game: PropTypes.object.isRequired,
  onEnter: PropTypes.func.isRequired,
}

export default Game
