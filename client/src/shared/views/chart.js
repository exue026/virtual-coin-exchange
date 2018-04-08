import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Label
} from 'recharts'

class Chart extends Component {
  render() {
    return (
      <AreaChart width={this.props.outerWidth} height={this.props.outerHeight} data={this.props.data}>
        <CartesianGrid strokeDasharray='3 3'/>
        <XAxis dataKey={this.props.xDataName}>
          <Label value={this.props.xLabelName} offset={0} position='bottom' />
        </XAxis>
        <YAxis label={{ value: this.props.yLabelName, angle: -90, position: 'left' }}/>
        <Tooltip/>
        <Area type='monotone' dataKey={this.props.yDataName} stroke='#8884d8' fill='#8884d8' />
      </AreaChart>
    )
  }
}

Chart.propTypes = {
  outerWidth: PropTypes.number,
  outerHeight: PropTypes.number,
  xDataName: PropTypes.string.isRequired,
  xLabelName: PropTypes.string.isRequired,
  yDataName: PropTypes.string.isRequired,
  yLabelName: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
}

Chart.defaultProps = {
  outerWidth: 600,
  outerHeight: 450,
}

export default Chart
