import React from 'react';
import { Link, useHistory } from "react-router-dom";
import { Navbar, NavItem, Icon, Container, Row, Col } from 'react-materialize';
import { APP_NAME } from '../../../constants/Constants';
import LoginUtils from '../../../plugin-loginjwt-frontend/utils/login.utils';
import { useToasts } from 'react-toast-notifications';
import { MenuLateral } from './MenuLateral';

const style = {
    menuColor: {
        backgroundColor: 'white',
    },
    colorNegro: {
        color: 'black',
    }
}

export function TopMenu() {
    const { menuColor, colorNegro } = style;

    const { addToast } = useToasts();
    const history = useHistory();

    const singOff = () => {
        LoginUtils.SignOff();
        addToast('Sesión cerrada con éxito', { appearance: 'success', autoDismiss: true, });
        history.push("/");
    }

    return (
        <Navbar style={menuColor}
            alignLinks="right"
            brand={<Link to='/home' className="brand-logo">{APP_NAME}</Link>}
            centerChildren
            id="mobile-nav"
            menuIcon={<Icon style={colorNegro}>menu</Icon>}
            options={{
                draggable: true,
                edge: 'left',
                inDuration: 250,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                outDuration: 200,
                preventScrolling: true
            }}
            sidenav={<MenuLateral />}
        >
            <NavItem href="/home" style={colorNegro}>
                Inicio
        </NavItem>
            <NavItem href="/editar-cuenta" style={colorNegro}>
                Perfil
        </NavItem>
            <NavItem href="/notificaciones" style={colorNegro}>
                Notificaciones
        </NavItem>

            <NavItem onClick={singOff} style={colorNegro}>
                Cerrar sesión
        </NavItem>
        </Navbar>
    )
}