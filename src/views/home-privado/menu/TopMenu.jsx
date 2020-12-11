import React from 'react';
import { Link, useHistory } from "react-router-dom";
import { Navbar, NavItem, Icon } from 'react-materialize';
import { APP_NAME } from '../../../constants/Constants';
import LoginUtils from '../../../plugin-loginjwt-frontend/utils/login.utils';
import { useToasts } from 'react-toast-notifications';

const style = {
    menuColor: {
        backgroundColor: '#26a69a',
    }
}

export function TopMenu() {
    const { menuColor } = style;

    const { addToast } = useToasts();
    const history = useHistory();

    const singOff = () => {
        LoginUtils.SignOff();
        addToast('Sesión cerrada con éxito', { appearance: 'success', autoDismiss: true, });
        history.push("/");
    }

    return (<Navbar style={menuColor}
        alignLinks="right"
        brand={<Link to='/home' className="brand-logo">{APP_NAME}</Link>}
        centerChildren
        id="mobile-nav"
        menuIcon={<Icon>menu</Icon>}
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
    >
        <NavItem href="/home">
            Inicio
        </NavItem>
        <NavItem href="/editar-cuenta">
            Perfil
        </NavItem>
        <NavItem onClick={singOff}>
            Cerrar sesión
        </NavItem>
    </Navbar>)
}