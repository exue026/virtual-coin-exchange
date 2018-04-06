import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import LoadingScreen from '../../shared/views/loading-screen'
import FloatingActionButton from '../../shared/views/floating-action-button'

import { loadPageData } from './actions'

import SideBar from './side-bar'

class HomePage extends Component {
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

    return (
      <div>
        <FloatingActionButton onClick={() => {}} />
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
