import React, { Component } from 'react'

class Coins extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      email: '',
      open: false,
    }
  }
  render() {
    return (
      <div className = "coin">
        {this.props.coin.name}
        <button>
          Buy/Sell
        </button>
     </div>
    )
  }
}

export default Coins
