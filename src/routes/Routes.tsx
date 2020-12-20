import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import ScrollToTop from './ScrollToTop'
import { HandleExternalRoute } from './HandleExternalRoute'
import { PageLoader } from '../components/Page/PageLoader.component'

/* Pages */
const Login = lazy(() => import('../pages/Login'))
const Home = lazy(() => import('../pages/Home'))

export function Routes () {
  return (
    <Router>
      <ScrollToTop />
      <HandleExternalRoute>
        <Suspense fallback={<PageLoader />}>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/home" component={Home} />
          </Switch>
        </Suspense>
      </HandleExternalRoute>
    </Router>
  )
}
