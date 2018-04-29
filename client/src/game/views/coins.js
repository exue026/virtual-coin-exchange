import React, { Component } from 'react'
import Modal from '../../shared/views/modal'

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
    return(
      <Modal title={this.props.coin.name} message={this.renderInvestModal()} closeModal={this.onCloseInvestModal}/>
    )
  }
  render() {
    return (
      <div className = "coin">
        {this.props.coin.name}
          (${this.props.coin.price_usd})
        <button className = "buy-button" onClick = {() => {this.setState({open: true})}}>
          Buy/Sell
        </button>
        {this.state.open ? this.setInvestModal() : ''}
     </div>
    )
  }
}

export default Coins
