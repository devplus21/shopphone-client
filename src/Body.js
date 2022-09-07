import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Home from './pages/home'
import Login from './pages/login'
import Register from './pages/register'
import Forgot from './pages/forgotPassword'
import Reset from './pages/reset'
import NotFound from './components/NotFound'
import Alert from './components/Alert'

function Body() {
  const auth = useSelector((state) => state.auth)
  const { isLogged } = auth
  return (
    <Router>
      <Alert />
      <section>
        <Switch>
          <Route
            path="/reset/:token"
            component={isLogged ? NotFound : Reset}
            exact
          />
        </Switch>
      </section>
    </Router>
  )
}

export default Body
