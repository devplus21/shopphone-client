import { useEffect } from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'

import PageRender from './routes/PageRender'
import PrivateRouter from './routes/PrivateRouter'

import Login from './pages/login'
import Register from './pages/register'
import Forgot from './pages/forgotPassword'
import Reset from './pages/reset'

import Header from './components/Header'
import NotFound from './components/NotFound'
import Alert from './components/Alert'
import { useSelector, useDispatch } from 'react-redux'
import { refreshToken } from './redux/actions/authAction'
import Home from './pages/home'
import ProductModal from './components/ProductModal'
import { getPosts } from './redux/actions/productAction'
import Body from './Body'

function App() {
  const { auth, status } = useSelector((state) => state)
  const { isLogged } = auth

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(refreshToken())
  }, [dispatch])

  useEffect(() => {
    if (auth.token) {
      dispatch(getPosts(auth.token))
    }
  }, [dispatch, auth.token])

  return (
    <Router>
      <Alert />
      <div className="App">
        {auth.token && <Header />}

        {status && <ProductModal />}
        <Body />

        <Route exact path="/" component={auth.token ? Home : Login} />
        <Route
          exact
          path="/register"
          component={isLogged ? NotFound : Register}
        />
        <Route
          exact
          path="/forgot_password"
          component={isLogged ? NotFound : Forgot}
        />

        <Route
          exact
          path="/reset/:token"
          component={isLogged ? NotFound : Reset}
        />
        <PrivateRouter exact path="/:page" component={PageRender} />
        <PrivateRouter exact path="/:page/:id" component={PageRender} />
      </div>
    </Router>
  )
}

export default App
