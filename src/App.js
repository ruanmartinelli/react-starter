import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Header from './components/Header'
import PrivateRoute from './components/PrivateRoute'

// Pages
import BreweryListPage from './pages/BreweryList'
import BreweryDetailPage from './pages/BreweryDetail'
import SignInPage from './pages/SignIn'
import Footer from './components/Footer'

function App() {
  const isAuth = localStorage.getItem('accessToken')

  return (
    <>
      <Router>
        {isAuth && <Header />}
        <Switch>
          <Route path="/login">
            <SignInPage isAuth={isAuth} />
          </Route>

          <PrivateRoute path="/breweries/:id">
            <BreweryDetailPage />
          </PrivateRoute>

          <PrivateRoute path="/">
            <BreweryListPage />
          </PrivateRoute>
        </Switch>
        {isAuth && <Footer />}
      </Router>
    </>
  )
}

export default App
