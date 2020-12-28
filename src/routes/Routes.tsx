import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { PageLoader } from '../components/Page/PageLoader.component'

import AuthRoute from './AuthRoute'
import { HandleExternalRoute } from './HandleExternalRoute'
import ScrollToTop from './ScrollToTop'

/* Pages */
const Login = lazy(() => import('../pages/Login'))
const Home = lazy(() => import('../pages/Home'))
const Product = lazy(() => import('../pages/Product/Product.page'))

export function Routes() {
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
