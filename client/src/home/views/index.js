import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import LoadingScreen from '../../shared/views/loading-screen'
import FloatingActionButton from '../../shared/views/floating-action-button'

import { loadPageData } from './actions'
import TopBar from './topbar'
import Games from './games'
import SideBar from './side-bar'

class HomePage extends Component {
  componentDidMount() {
    this.props.loadPageData()
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

    return (
      <div className = "homepage">
        <TopBar />
        <FloatingActionButton onClick={() => {}} />
        {this.renderGames()}
      </div>
    )
  }
}

HomePage.propTypes = {
  games: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  loadPageData: PropTypes.func.isRequired,
}

const mapStateToProps = ({ homePage }) => ({
  loading: homePage.loading,
  games: homePage.games,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  loadPageData: loadPageData,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
