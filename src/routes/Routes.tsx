import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import ScrollToTop from './ScrollToTop'
import { HandleExternalRoute } from './HandleExternalRoute'
import { PageLoader } from '../components/Page/PageLoader.component'
import AuthRoute from './AuthRoute'

/* Pages */
const Login = lazy(() => import('../pages/Login'))
const Home = lazy(() => import('../pages/Home'))
const Product = lazy(() => import('../pages/Product'))

export function Routes () {
  return (
    <Router>
      <ScrollToTop />
      <HandleExternalRoute>
        <Suspense fallback={<PageLoader />}>
          <Switch>
            <Route exact path="/" component={Login} />
            <AuthRoute exact path="/home" component={Home} />
            <AuthRoute exact path="/product" component={Product} />
          </Switch>
        </Suspense>
      </HandleExternalRoute>
    </Router>
  )
}
