import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import ScrollToTop from './ScrollToTop'

/* Pages */
const Login = lazy(() => import('../pages/Login'))
const Home = lazy(() => import('../pages/Home'))

export function Routes () {
  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/home" component={Home} />
        </Switch>
      </Suspense>
    </Router>
  )
}
