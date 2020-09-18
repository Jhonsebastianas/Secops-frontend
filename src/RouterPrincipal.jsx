import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
// Plugins a hacer routing
import RegisterUser from './plugin-registro-usuarios-frontend/components/registro-usuario/RegisterUser';

export default function RouterPrincipal () {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <RegisterUser />
                </Route>
            </Switch>
        </Router>
    );
}