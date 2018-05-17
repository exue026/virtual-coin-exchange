import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import moment from 'moment'

import Chart from '../../shared/views/chart'

class Overview extends Component {
  render() {
    const summary = this.props.summaryData
    console.log(this.props.coins)
    return (
      <div className='overview'>
        <div className='progress-container'>
          <Chart
            outerWidth={800}
            xDataName='date'
            xLabelName='Date'
            yDataName='price'
            yLabelName='Price (USD)'
            data={[
              {date: 'Jan 3, 2018', price: 3},
              {date: 'Jan 8, 2018', price: 3},
              {date: 'Jan 30, 2018', price: 3},
              {date: 'Feb 8, 2018', price: 5},
              {date: 'Feb 9, 2018', price: 9},
              {date: 'Feb 11, 2018', price: 1},
              {date: 'March 3, 2018', price: 3},
              {date: 'March 13, 2018', price: 6},
              {date: 'March 20, 2018', price: 9},
              {date: 'April 4, 2018', price: 15},
              {date: 'April 24, 2018', price: 26},
              {date: 'May 9, 2018', price: 28},
            ]}
          />
        </div>
        <div className='summary-coins-wrapper'>
          <div className='summary-container'>
            <h2>Summary container</h2>
            <p>Budget: ${summary.budget}</p>
            <p>Number of coins holding: {summary.numCoins}</p>
            <p>Total number of transactions: {summary.numTransactions}</p>
          </div>
          <div className='coins-container'>
            <h2>Coins container</h2>
            {this.props.coins.map(coin => {
              return (
                <p>name: {coin.name},
                quantity: {coin.quantity},
                purchased on: {moment(coin.purchasedTime).format('MMM Do YYYY')}
                </p>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

Overview.propTypes = {
  summaryData: PropTypes.object.isRequired,
  coins: PropTypes.array.isRequired,
}

const mapStateToProps = ({ gamePage }) => ({
  summaryData: gamePage.overview,
  coins: gamePage.coins,
})

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Overview)
