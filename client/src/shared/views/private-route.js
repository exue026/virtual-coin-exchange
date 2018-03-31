import React from 'react'
import {
  Route,
  Redirect,
} from 'react-router-dom'

const PrivateRoute = ({
  component: Component,
  ...args,
}) => {
  return (
    <Route
      {...args}
      render={(props) => {
        const isLoggedIn = JSON.parse(localStorage.getItem('authenticated'))
        if (isLoggedIn) {
          return (
            <Component {...props} />
          )
        } else {
          return (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: props.location }
              }}
            />
          )
        }
      }}
    />
  )
}

export default PrivateRoute
