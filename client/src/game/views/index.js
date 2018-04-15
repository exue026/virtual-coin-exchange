import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Chart from '../../shared/views/chart'
import LoadingScreen from '../../shared/views/loading-screen'
import Sidebar from './side-bar'

import { loadPageData } from './actions'

class GamePage extends Component {

  componentDidMount() {
    this.props.loadPageData()
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
        <Sidebar />
        {/* your code here */}
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

