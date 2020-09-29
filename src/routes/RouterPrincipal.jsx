import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
// Plugins a hacer routing
import RegisterUser from '../plugin-registro-usuarios-frontend/views/registro-usuario/RegisterUser';
import Nosotros from "../plugin-frontoffice/publico/nosotros/Nosotros";
import { Inicio } from '../plugin-frontoffice/publico/Inicio/Inicio';
import { Contactanos } from '../plugin-frontoffice/publico/contactanos/Contactanos';
import { Login } from '../plugin-loginjwt-frontend/views/login-page/Login';

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
                </Switch>
            </ToastProvider>
        </Router>
    );
}