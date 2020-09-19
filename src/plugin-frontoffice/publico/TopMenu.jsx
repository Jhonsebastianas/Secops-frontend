import React from 'react';
import { Link } from "react-router-dom";
import { Navbar, NavItem, Icon  } from 'react-materialize';

export function TopMenu () {
    return (
        <Navbar
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
                Getting started
            </NavItem>
            <NavItem href="/">
                Components
            </NavItem>
        </Navbar>
    )
}