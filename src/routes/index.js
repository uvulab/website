import React from 'react'
import { Switch, Route } from 'react-router-dom'
import CoreLayout from '../layouts/CoreLayout'
import Home from './Home'
import AboutRoute from './About'
import PublicationsRoute from './Publications'
import TeachingRoute from './Teaching'
import NotFoundRoute from './NotFound'

export default function createRoutes() {
  return (
    <CoreLayout>
      <Switch>
        <Route exact path={Home.path} component={Home.component} />
        {/* Build Route components from routeSettings */
        [AboutRoute, PublicationsRoute, TeachingRoute].map(
          (settings, index) => (
            <Route exact key={`Route-${index}`} {...settings} />
          )
        )}
        <Route function={NotFoundRoute.component} />
      </Switch>
    </CoreLayout>
  )
}
