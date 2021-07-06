import React, {useContext} from 'react'
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom'
import Navbar from "../components/Navbar/index" 

import Home from "../pages/Home/index"
import Seguidores from "../pages/Seguidores/index"
import Seguindo from "../pages/Seguindo/index"
import Repositorios from "../pages/Repositorios/index"
import Login from "../pages/login/login"

function Routes() {
  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem("user") ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );
  return (
    <BrowserRouter>


      <Switch>
        <Route path="/" exact component={Login} />
        <PrivateRoute path="/home" component={Home} />
        <PrivateRoute path="/Repositorios" component={Repositorios} />
        <PrivateRoute path="/Seguidores" component={Seguidores} />
        <PrivateRoute path="/Seguindo" component={Seguindo} />
      </Switch>

    </BrowserRouter>

  )
}

export default Routes