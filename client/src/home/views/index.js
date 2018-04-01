import React, { Component } from 'react'
import LoadingScreen from '../../shared/views/loading-screen'

import Strings from '../../shared/strings.js'

class HomePage extends Component {
  render() {
    return (
      <LoadingScreen
        iconType='bars'
        color='white'
      />
    )
  }
}

export default HomePage
