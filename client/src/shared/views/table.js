import React, { Component } from 'react'
import PropTypes from 'prop-types'

const Row = ({row}) => (
  <tr>
    {Object.keys(row).map(key => <td key={row.id}>{row[key]}</td>)}
  </tr>
)

class Table extends Component {
  render() {
    return (
      <table className='table'>
        <tr>
          {this.props.header.map(heading => <th key={heading}>heading</th>)}
        </tr>
        {this.props.data.map(row => <Row row={row} />)}
      </table>
    )
  }
}

Table.propTypes = {
  header: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
}

export default Table
