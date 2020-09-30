import React from 'react'
import { Route, Redirect } from 'react-router-dom'

function PrivateRoute({ children, ...rest }) {
  const isAuth = localStorage.getItem('accessToken')

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  )
}

export default PrivateRoute
