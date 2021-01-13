import React from 'react';
import { Link } from "react-router-dom";
import { Navbar, NavItem, Icon  } from 'react-materialize';
import { APP_NAME } from '../../../constants/Constants';

const style = {
    menuColor: {
        backgroundColor: 'white',
    },
    colorNegro: {
        color: 'black'
    }
}

export function TopMenu () {
    const { menuColor, colorNegro } = style;
    return (
        <Navbar style={menuColor}
            alignLinks="right"
            brand={<Link to='/' className="brand-logo">{APP_NAME}</Link>}
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
        >
            <NavItem href="/" style={colorNegro}>
                Inicio
            </NavItem>
            <NavItem href="/nosotros" style={colorNegro}>
                Nosotros
            </NavItem>
            <NavItem href="/contactanos" style={colorNegro}>
                Contáctanos
            </NavItem>
        </Navbar>
    )
}