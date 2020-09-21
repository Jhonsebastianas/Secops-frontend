import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
// Plugins a hacer routing
import RegisterUser from './plugin-registro-usuarios-frontend/components/registro-usuario/RegisterUser';
import Nosotros from "./plugin-nosotros-fronted/components/nosotros-page/Nosotros";
import { Inicio } from './plugin-frontoffice/publico/Inicio/Inicio';
import {Contactanos} from './plugin-frontoffice/publico/contactanos/Contactanos';

// Toast
import { ToastProvider } from 'react-toast-notifications'

export default function RouterPrincipal() {
    return (
        <Router>
<<<<<<< HEAD
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
            </Switch>
=======
            <ToastProvider>
                <Switch>
                    <Route exact path="/">
                        <Inicio />
                    </Route>
                    <Route path="/registro">
                        <RegisterUser />
                    </Route>
                    <Route path="/nosotros">
                        <Nosotros />
                    </Route>
                </Switch>
            </ToastProvider>
>>>>>>> dc5f014bafc61472f7139cc54615dfdc31736a86
        </Router>
    );
}