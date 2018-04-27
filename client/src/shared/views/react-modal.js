import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactModal from 'react-modal'

import closeButton from '../img/close_button.svg'

const customStyles = {
  content: {
    'top': '60px',
    'bottom': 'auto',
    'left': '60px',
    'right': '60px',
    'background-color': '#545865',
  }
}

ReactModal.setAppElement('#root')

class Modal extends Component {
  render() {
    return (
      <div>
        <ReactModal
          isOpen={this.props.isOpen}
          parentSelector={() => document.getElementById(this.props.renderOn)}
          onRequestClose={this.props.onClose}
          style={customStyles}
        >
          <div className='title-wrapper'>
            <h2>{this.props.title}</h2>
            <img
              className='close-button'
              src={closeButton}
              onClick={this.props.onClose}
            />
          </div>
          {this.props.children}
        </ReactModal>
      </div>
    )
  }
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.any.isRequired,
  renderOn: PropTypes.string.isRequired,
}

export default Modal
