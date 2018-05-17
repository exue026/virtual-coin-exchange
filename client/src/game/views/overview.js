import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class Overview extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='overview'>
        <div className='progress-container'>
        </div>
        <div className='summary-container'></div>
        <div className='coins-container'></div>
      </div>
    )
  }
}

Overview.propTypes = {

}

const mapStateToProps = ({ gamePage }) => ({
})

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Overview)
