import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  Redirect,
} from 'react-router-dom'

import LoadingScreen from '../../shared/views/loading-screen'
import FloatingActionButton from '../../shared/views/floating-action-button'

import {
  loadPageData,
  enterGame,
  resetState,
} from './actions'


class HomePage extends Component {
  componentDidMount() {
    this.props.loadPageData()
  }

  componentWillMount() {
    this.props.resetState()
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
      <div>
        <div onClick={this.onEnterGame}>Enter Game</div>
        <FloatingActionButton onClick={() => {}} />
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
