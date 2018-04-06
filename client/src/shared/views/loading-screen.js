import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactLoading from 'react-loading'

class LoadingScreen extends Component {
  render() {
    return (
      <div className='loading-screen'>
        <ReactLoading
          type={this.props.iconType}
          height={this.props.dimension}
          width={this.props.dimension}
          color={this.props.color}
          delay={300}
        />
      </div>
    )
  }
}

LoadingScreen.propTypes = {
  iconType: PropTypes.oneOf(['bars', 'bubbles', 'spin', 'spinningBubbles']),
  dimension: PropTypes.string,
  color: PropTypes.string,
}

LoadingScreen.defaultProps = {
  dimension: '132px',
  color: 'black',
}

export default LoadingScreen
