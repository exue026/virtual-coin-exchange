import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Modal extends Component {
  render() {
    console.log("hi");
    return (
      <div>
          <div className = "modalTop">
            <div className = "modalBottom">
              <div className="topModal">
              <button className= "close-button" onClick = {() => {this.props.closeModal()}}>
              x
              </button>
              {this.props.title}
              </div>
              <div className="bodyModal">
              {this.props.message}
              </div>
              <div>
                <div className="buttonModal">
                <button className="cancel-button-accent" onClick= {() => {this.props.closeModal()}}>
                Cancel
                </button>
                <button className="submit-button">
                Submit
                </button>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

Modal.propTypes = {

}

export default Modal
