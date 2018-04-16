import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Profile from '../../shared/img/profile.jpg'
import Arrow from '../../shared/img/arrow.png'
import Chart from '../../shared/views/chart'
import LoadingScreen from '../../shared/views/loading-screen'
import Sidebar from './side-bar'
import Coins from './coins'

import { loadPageData } from './actions'

class GamePage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selected: '',
    }
  }
  componentDidMount() {
    this.props.loadPageData()
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
    })-
    console.log(value);
  }
  renderOverView = () => {
    return(
      <div className = "overview">
      </div>
    )
  }
  renderTable = () => {
    var coins = [
      {id: 1,
      name: 'BitCoin',
      price: '10,000',
      difference: '+0.11',
      },
      {id: 2,
      name: 'Ethereum',
      price: '8,000',
      difference: '+0.06',
      },
      {id: 3,
      name: 'GarliCoin',
      price: '1,000',
      difference: '+0.02',
      }
    ]
    return(
      coins.map(coin =>
        <Coins
          key={coin.id}
          coin={coin}
          onEnter={this.props.onEnterGame}
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
  render() {
    if (this.props.loading) {
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
              {this.state.selected == "Homepage" ? this.renderHome() : ''}
              {this.state.selected == "Invest" ? this.renderInvest() : ''}
           </div>
        </div>
      </div>
    )
  }
}

GamePage.propTypes = {
  loading: PropTypes.bool.isRequired,
  loadPageData: PropTypes.func.isRequired,
}

const mapStateToProps = ({ gamePage }) => ({
  loading: gamePage.loading,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  loadPageData: loadPageData,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(GamePage)
