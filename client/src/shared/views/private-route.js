import React from 'react'
import {
  Route,
  Redirect,
} from 'react-router-dom'

import store from '../../store'

const PrivateRoute = ({
  component: Component,
  ...args,
}) =>
    <Route
      {...args}
      render={props => {
        const { homePage } = store.getState()
        return (
          homePage.userId
          ? <Component {...props} />
          : <Redirect  to={{ pathname: '/', state: { from: props.location } }} />
        )
      }}
    />

export default PrivateRoute
