import React from 'react';
import { Link } from "react-router-dom";
import { Navbar, NavItem, Icon } from 'react-materialize';

const style = {
    menuColor: {
        backgroundColor: '#26a69a',
    }
}

export function TopMenu() {
    const { menuColor } = style;
    return (<Navbar style={menuColor}
        alignLinks="right"
        brand={<Link to='/' className="brand-logo">Home</Link>}
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
        <NavItem href="/">
            Inicio
            </NavItem>
        <NavItem href="/nosotros">
            Nosotros
            </NavItem>
        <NavItem href="/contactanos">
            Contáctanos
            </NavItem>
    </Navbar>)
}