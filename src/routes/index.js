import React from 'react'
import { Switch, Route } from 'react-router-dom'
import CoreLayout from '../layouts/CoreLayout'
import Home from './Home'
import AboutRoute from './About'
import PeopleRoute from './People'
import PublicationsRoute from './Publications'
import ProjectsRoute from './Projects'
import NotFoundRoute from './NotFound'

export default function createRoutes() {
  return (
    <CoreLayout>
      <Switch>
        <Route exact path={Home.path} component={Home.component} />
        {/* Build Route components from routeSettings */
        [AboutRoute, PeopleRoute, PublicationsRoute, ProjectsRoute].map(
          (settings, index) => (
            <Route exact key={`Route-${index}`} {...settings} />
          )
        )}
        <Route function={NotFoundRoute.component} />
      </Switch>
    </CoreLayout>
  )
}
