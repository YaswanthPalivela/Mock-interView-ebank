import {Switch, Route, Redirect} from 'react-router-dom'

import LoginForm from './Components/LoginForm/index'
import ProtectedRoute from './Components/ProtectedRoute/index'
import Home from './Components/Home/index'
import NotFound from './Components/NotFound/index'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/ebank/login" component={LoginForm} />
    <ProtectedRoute exact path="/" component={Home} />
    <Route path="/not-found" component={NotFound} />
    <Redirect to="/not-found" />
  </Switch>
)

export default App
