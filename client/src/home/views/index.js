import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import LoadingScreen from '../../shared/views/loading-screen'
import FloatingActionButton from '../../shared/views/floating-action-button'
import Modal from '../../shared/views/modal'
import { loadPageData } from './actions'
import TopBar from './topbar'
import Games from './games'
import SideBar from './side-bar'

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
  onOpenNewModal = () => {
    console.log('click')
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
    console.log('open')
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
        <button className= "floating-action-button" onClick={() => {this.onOpenNewModal()}}>
         +
        </button>
        {this.state.open ? this.settingNewModal() : ''}
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
