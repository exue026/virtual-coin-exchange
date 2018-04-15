import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import LoadingScreen from '../../shared/views/loading-screen'
import FloatingActionButton from '../../shared/views/floating-action-button'

import {
  loadPageData,
  enterGame,
  resetState,
} from './actions'

import Modal from '../../shared/views/modal'
import TopBar from './topbar'
import Games from './games'

class HomePage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      open: false,
    }
  }

  componentDidMount() {
    this.props.loadPageData()
  }

  componentWillMount() {
    this.props.resetState()
  }

  onOpenNewModal = () => {
    this.setState({
      open: true,
    })
  }

  onCloseNewModal = () => {
    this.setState({
      open: false,
    })
  }

  renderNewModal = () => {
    return(
      <div>
        <form>
          <input
            className = "dark-text-box"
            type='text'
            placeholder='Game Name'
          />
          <input
            className = "dark-text-box"
            type='text'
            placeholder='Add players'
          />
          <input
            className = "dark-text-box"
            type='password'
            placeholder='Duration of game'
          />
          <input
            className = "dark-text-box"
            type='password'
            placeholder='Starting Budget'
          />
        </form>
     </div>
    )
  }

  settingNewModal = () => {
    return(
      <Modal title="New Game" message={this.renderNewModal()} closeModal={this.onCloseNewModal}/>
    )
  }

  renderGames = () => {
    var gamesNow = [
      {
        id: 1,
        name: 'game1',
        start: 'Monday',
        end: 'Friday',
        createdBy: 'Ceiline',
        players: ['Ceiline', 'Ethan'],
        startingBudget: '1000',
      },
      {
        id: 2,
        name: 'game2',
        start: 'Monday',
        end: 'Friday',
        createdBy: 'Ceiline',
        players: ['Ceiline', 'Ethan'],
        startingBudget: '1000',
      },
      {
        id: 3,
        name: 'game3',
        start: 'Monday',
        end: 'Friday',
        createdBy: 'Ceiline',
        players: ['Ceiline', 'Ethan'],
        startingBudget: '1000',
      }
    ]

    return(
      gamesNow.map( game =>
        <Games
          key={game.id}
          game={game}
          onEnter={this.props.onEnterGame}
        />
      )
    )
  }

  render() {
    if (this.props.loading) {
      return (
        <LoadingScreen
          iconType='bars'
          color='white'
        />
      )
    }

    if (this.props.selectedGameId) {
      return (
        <Redirect to='/games' />
      )
    }

    return (
      <div className = "homepage">
        <TopBar />
        <button className= "floating-action-button" onClick={() => {this.onOpenNewModal()}}>
         +
        </button>
        {this.state.open ? this.settingNewModal() : ''}
        {this.renderGames()}
      </div>
    )
  }

  onEnterGame = () => {
    this.props.onEnterGame()
  }
}

HomePage.propTypes = {
  games: PropTypes.array.isRequired,
  selectedGameId: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  loadPageData: PropTypes.func.isRequired,
  onEnterGame: PropTypes.func.isRequired,
  resetState: PropTypes.func.isRequired,
}

const mapStateToProps = ({ homePage }) => ({
  loading: homePage.loading,
  selectedGameId: homePage.selectedGameId,
  games: homePage.games,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  loadPageData: loadPageData,
  onEnterGame: enterGame,
  resetState: resetState,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
