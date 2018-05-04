import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Modal from '../../shared/views/react-modal'
import Chart from '../../shared/views/chart'

class Coins extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      email: '',
      open: false,
    }
  }
  onCloseInvestModal = () => {
    this.setState({
      open: false,
    })
  }
  renderInvestModal = () => {
    return(
      <div>
        <Chart
          xDataName='date'
          xLabelName='Date'
          yDataName='price'
          yLabelName='Price (USD)'
          data={this.props.coinHistory}
        />
        <form>
          <input
            className = "dark-text-box"
            type='text'
            placeholder='Amount to sell'
          />
          <input
            className = "dark-text-box"
            type='text'
            placeholder='Amount to buy'
          />
        </form>
     </div>
    )
  }
  setInvestModal = () => {
    return (
      <Modal
        isOpen={this.state.open}
        onClose={this.onCloseInvestModal}
        title={this.props.coin.name}
        renderOn='game-page-container'
      >
        {this.renderInvestModal()}
      </Modal>
    )
  }
  render() {
    return (
      <div className = "coin">
        {this.props.coin.name}
          (${this.props.coin.price_usd})
        <button className = "buy-button" onClick = {this.openModal}>
          Buy/Sell
        </button>
        {this.setInvestModal()}
     </div>
    )
  }

  openModal = () => {
    this.setState({ open: true })
    this.props.openCoinGeneralModal('bitcoin')
  }
}

Coins.propTypes = {
  openCoinGeneralModal: PropTypes.func.isRequired,
  coinHistory: PropTypes.array.isRequired,
}

export default Coins

