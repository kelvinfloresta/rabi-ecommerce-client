/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import { authService } from '../services/Auth.service'

export default function AuthRoute({ component: Component, ...rest }: any) {
  return (
    <Route
      {...rest}
      render={props =>
        authService.restoreSession() ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  )
}
