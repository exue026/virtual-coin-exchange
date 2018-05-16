import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class Overview extends Component {
  render() {
    return (
      <div className='overview'>

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
