import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import LoadingScreen from '../../shared/views/loading-screen'

import { loadPageData } from './actions'

import SideBar from './side-bar'

class HomePage extends Component {
  componentDidMount() {
    this.props.loadPageData('5ac020e74fdd2a4f38f1858b')
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
      <SideBar />
    )
  }
}

HomePage.propTypes = {
  loading: PropTypes.bool.isRequired,
  loadPageData: PropTypes.func.isRequired,
}

const mapStateToProps = ({ homePage }) => ({
  loading: homePage.loading,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  loadPageData: loadPageData,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
