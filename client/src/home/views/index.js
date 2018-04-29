import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Calendar from 'react-calendar'

import Modal from '../../shared/views/react-modal'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import LoadingScreen from '../../shared/views/loading-screen'
import FloatingActionButton from '../../shared/views/floating-action-button'

import {
  loadPageData,
  enterGame,
  resetState,
  changeCreateGameField,
  createGame,
} from './actions'

import { GAME } from './constants'
import TopBar from './topbar'
import Game from './game'

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

  componentWillUnmount() {
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

  settingNewModal = () => {
    return(
      <Modal
          isOpen={this.state.open}
          onClose={this.onCloseNewModal}
          title='Create a game'
          renderOn='homepage'
        >
          <form onSubmit={this.onSubmit}>
            <input
              className = "dark-text-box"
              type='text'
              placeholder='Game Name'
              value={this.props.createGame[GAME.GAME_NAME]}
              onChange={e => this.onChangeInput(GAME.GAME_NAME, e.target.value)}
            />
            <input
              className = "dark-text-box"
              type='text'
              placeholder='Add players'
            />
            <input
              className = "dark-text-box"
              type='date'
              placeholder='Start Date'
              value={this.props.createGame[GAME.START_DATE]}
              onChange={e => this.onChangeInput(GAME.START_DATE, e.target.value)}
            />
            <input
              className = "dark-text-box"
              type='date'
              placeholder='End Date'
              value={this.props.createGame[GAME.END_DATE]}
              onChange={e => this.onChangeInput(GAME.END_DATE, e.target.value)}
            />
            <input
              className = "dark-text-box"
              type='text'
              placeholder='Starting Budget'
              value={this.props.createGame[GAME.STARTING_BUDGET]}
              onChange={e => this.onChangeInput(GAME.STARTING_BUDGET, e.target.value)}
            />
            <div className='submit-game'>
              <input
                className='submit-button'
                type='submit'
                value='Submit'
              />
            </div>
          </form>
      </Modal>
    )
  }

  onChangeInput = (field, value) => {
    this.props.onChangeCreateGameField(field, value)
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.onCreateGame()
  }

  renderGames = () => {
    if (this.props.games.length > 0) {
      return(
        this.props.games.map(game =>
          <Game
            key={game._id}
            game={game}
            onEnter={this.props.onEnterGame}
          />
        )
      )
    }
    return (
      <div className='empty-state'>Looks like you don't have any new games.</div>
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
        <Redirect
          to={{
            pathname: `/games/${this.props.selectedGameId}`,
            state: { referrer: this.props.selectedGameId }
          }}
          push
        />
      )
    }

    return (
      <div id='homepage'>
        <TopBar />
        <FloatingActionButton onClick={() => {this.onOpenNewModal()}} />
        {this.settingNewModal()}
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
  createGame: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  loadPageData: PropTypes.func.isRequired,
  onEnterGame: PropTypes.func.isRequired,
  resetState: PropTypes.func.isRequired,
  onChangeCreateGameField: PropTypes.func.isRequired,
  onCreateGame: PropTypes.func.isRequired,
}

const mapStateToProps = ({ homePage }) => ({
  loading: homePage.loading,
  selectedGameId: homePage.selectedGameId,
  games: homePage.games,
  createGame: homePage.createGame,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  loadPageData: loadPageData,
  onEnterGame: enterGame,
  resetState: resetState,
  onChangeCreateGameField: changeCreateGameField,
  onCreateGame: createGame,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
