import React, { Component } from 'react'
import PropTypes from 'prop-types'

class FloatingActionButton extends Component {
  render() {
    return (
      <div className='floating-action-button'> + </div>
    )
  }
}

FloatingActionButton.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default FloatingActionButton
