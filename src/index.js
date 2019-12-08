import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Login from './Login'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'
import './styles.css'

const PrivateRoute = ({ loggedIn, path, component: Component }) => (
  <Route
    path={path}
    render={props =>
      loggedIn ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
)

const Private = () => <div>This is private route!</div>

const Home = () => (
  <div className="column-box">
    <h1>Yet another home page</h1>
    <Link to="/login">Login</Link>
    <Link to="/private">Private route</Link>
  </div>
)

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          path="/login"
          render={props => (
            <Login
              {...props}
              setLoggedIn={setLoggedIn}
              redirectUrl="/private"
            />
          )}
        />
        <PrivateRoute loggedIn={loggedIn} path="/private" component={Private} />
      </Switch>
    </Router>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
