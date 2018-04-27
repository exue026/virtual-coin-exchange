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
} from './actions'

//import Modal from '../../shared/views/modal'
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
          title="Hello World!"
          renderOn='homepage'
        >
          <form onSubmit={this.onSubmit}>
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
              type='date'
              placeholder='Start Date'
            />
            <input
              className = "dark-text-box"
              type='date'
              placeholder='End Date'
            />
            <input
              className = "dark-text-box"
              type='text'
              placeholder='Starting Budget'
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

  onSubmit = (event) => {
    event.preventDefault()
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
        <Redirect to='/games' push/>
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
