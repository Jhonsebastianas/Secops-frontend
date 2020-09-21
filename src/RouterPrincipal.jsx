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
                    <Route path="/nosotros">
                        <Nosotros />
                    </Route>
                </Switch>
            </ToastProvider>
        </Router>
    );
}