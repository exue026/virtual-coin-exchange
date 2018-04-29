import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { NavLink, Route } from 'react-router-dom'
import PrivateRoute from '../../shared/views/private-route'
import Profile from '../../shared/img/profile.jpg'
import Chart from '../../shared/views/chart'
import LoadingScreen from '../../shared/views/loading-screen'
import Sidebar from './side-bar'
import Coins from './coins'

import { loadPageData } from './actions'

class GamePage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selected: 'Homepage',
    }
  }
  componentDidMount() {
    const gameId = this.props.match.params.gameId
    this.props.loadPageData(gameId)
  }
  renderSearchBar = () => {
    return(
      <div className='search'>
      <form>
        <input
          className = "box"
          type='text'
          placeholder='Search coins'
        />
        <input className = "button" type='submit' value='Search' />
      </form>
      </div>
    )
  }
  onSelect = (value) => {
    this.setState({
      selected: value,
    })
  }
  renderOverView = () => {
    const { overview } = this.props
    return(
      <div>
        <div className = "overview">
          Overview
        </div>
        <div>
          <div className = "explore">
            Explore
            <div>Net Worth</div>
            <div>Budget: {overview.budget}</div>
            <div>Number of Transactions: {overview.numTransactions}</div>
            <div>Coins holding: {overview.numCoins}</div>
          </div>
          <div className = "myCoins">
            My Coins
            {this.renderTable()}
          </div>
        </div>
      </div>
    )
  }
  renderTable = () => {
    return(
      this.props.coins.map(coin =>
        <Coins
          key={coin.id}
          coin={coin}
        />
      )
    )
  }
  renderHome = () => {
    return(
      <div>
      {this.renderOverView()}
      </div>
    )
  }
  renderInvest = () => {
    return(
      <div>
      {this.renderTable()}
      </div>
    )
  }
  renderRanking = () => {
    return(
      <div className = "leadership">
      Leadership Board
        <div className = "coin">
          Ceiline Zhang
          <div className = "price">
          10,100
          </div>
        </div>
        <div className = "coin">
          Ethan Xue
        </div>
        <div className = "coin">
          Player 3
        </div>
        <div className = "coin">
          Player 4
        </div>
      </div>
    )
  }
  render() {
    if (!this.props.overview || this.props.loading) {
      return (
        <LoadingScreen
          iconType='bars'
          color='white'
        />
      )
    }
    return(
      <div className='game-page-container'>
        <Sidebar onSelect={this.onSelect}/>
        <div className='body'>
           <div>
           <div className='profile'>
             <img src={Profile} className = "picture" alt='Profile Pic' />
           </div>
           {this.renderSearchBar()}
           </div>
           <div className='page-title'>
              {this.state.selected === "Homepage" ? this.renderHome() : ''}
              {this.state.selected === "Invest" ? this.renderInvest() : ''}
              {this.state.selected === "Ranking" ? this.renderRanking() : ''}
           </div>
           <Route path='/games/settings' component={random} />
        </div>
      </div>
    )
  }
}

const random = () => <div>Settings</div>

GamePage.propTypes = {
  loading: PropTypes.bool.isRequired,
  loadPageData: PropTypes.func.isRequired,
  overview: PropTypes.object,
  coins: PropTypes.array,
}

const mapStateToProps = ({ gamePage }) => ({
  loading: gamePage.loading,
  overview: gamePage.overview,
  coins: gamePage.coins,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  loadPageData: loadPageData,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(GamePage)
