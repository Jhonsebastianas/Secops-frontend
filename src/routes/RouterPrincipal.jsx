import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route, Redirect
} from "react-router-dom";
// Plugins a hacer routing
import RegisterUser from '../plugin-registro-usuarios-frontend/views/registro-usuario/RegisterUser';
import Nosotros from "../views/home-publico/nosotros/Nosotros";
import { Inicio } from '../views/home-publico/Inicio/Inicio';
import { Contactanos } from '../views/home-publico/contactanos/Contactanos';
import { Login } from '../plugin-loginjwt-frontend/views/login-page/Login';
import { Home } from '../views/home-privado/Home';
import ConstantsList from '../constants/Constants';
// Toast
import { ToastProvider } from 'react-toast-notifications'

export default function RouterPrincipal() {
    return (
        <Router>
            <ToastProvider>
                <Switch>
                    <Route exact path="/">
                        <Inicio />
                    </Route>
                    <Route path="/registro">
                        <RegisterUser />
                    </Route>
                    <Route path="/contactanos">
                        <Contactanos />
                    </Route>
                    <Route path="/nosotros">
                        <Nosotros />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <PrivateRoute path='/home'>
                        <Home />
                    </PrivateRoute>
                </Switch>
            </ToastProvider>
        </Router>
    );
}

function verifyAuth() {
    const { TOKEN_NAME, USER_NAME } = ConstantsList;
    const user = JSON.parse(localStorage.getItem(USER_NAME));
    if (user && user[TOKEN_NAME]) {
        return true;
    } else {
        return false;
    }
}

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({ children, ...rest }) {
    return (
        <Route
            {...rest}
            render={({ location }) =>
                verifyAuth() ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
}