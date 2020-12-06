import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route, Redirect
} from "react-router-dom";
// Plugins a hacer routing
import RegisterUser from '../plugin-registro-usuarios-frontend/views/registro-usuario/RegisterUser';
import { RecuperarCuenta } from '../plugin-registro-usuarios-frontend/views/recuperar-cuenta/RecuperarCuenta';
import { RestablecerClave } from '../plugin-registro-usuarios-frontend/views/recuperar-cuenta/restablecer-clave/RestablecerClave';
import Nosotros from "../views/home-publico/nosotros/Nosotros";
import { Inicio } from '../views/home-publico/Inicio/Inicio';
import { Contactanos } from '../views/home-publico/contactanos/Contactanos';
import { Login } from '../plugin-loginjwt-frontend/views/login-page/Login';
import { Notificacion } from '../views/notificacion/Notificacion';
import ConstantsList from '../constants/Constants';
// Rutas privadas
import { Home } from '../views/home-privado/Home';
import { RegisterHome } from '../plugin-registro-usuarios-frontend/views/registro-hogar/RegisterHome';

// Toast
import { ToastProvider } from 'react-toast-notifications';

import { RecoilRoot } from 'recoil';

export default function RouterPrincipal() {
    return (
        <Router>
            <RecoilRoot>
                <ToastProvider>
                    <Switch>
                        <Route exact path="/">
                            <Inicio />
                        </Route>
                        <Route exact path="/registro">
                            <RegisterUser />
                        </Route>
                        <Route exact path="/registro/recuperar-cuenta">
                            <RecuperarCuenta />
                        </Route>
                        <Route exact path="/registro/restablecer-cuenta/:tokenUsuario">
                            <RestablecerClave />
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
                        <Route path="/notificacion/:nombrePlantilla">
                            <Notificacion />
                        </Route>
                        {/* Rutas Privadas */}
                        <PrivateRoute path='/home'>
                            <Home />
                        </PrivateRoute>
                        <PrivateRoute path='/agregar-un-hogar'>
                            <RegisterHome />
                        </PrivateRoute>
                    </Switch>
                </ToastProvider>
            </RecoilRoot>
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