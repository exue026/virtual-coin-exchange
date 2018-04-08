import React, { Component } from 'react'
import Calendar from '../../shared/img/ic_perm_contact_calendar_black_24px.svg'
import Money from '../../shared/img/ic_attach_money_black_24px.svg'
import Timer from '../../shared/img/ic_timer_black_24px.svg'
import Modal from '../../shared/views/modal'


class Games extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      email: '',
      open: false,
    }
  }

  onOpenModal = () => {
    console.log("hi")
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
          {this.props.game.start}-{this.props.game.end}
          <img src={Calendar} className = "iconTime" alt='Profile Pic' />
          {this.props.game.players.toString()}
          <button className = "third-button">
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

export default Games
