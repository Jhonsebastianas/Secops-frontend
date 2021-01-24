import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Navbar, NavItem, Icon, Row } from 'react-materialize';
import { APP_NAME } from '../../../constants/Constants';
import "../menu/TopMenu.css";
const style = {
    menuColor: {
        backgroundColor: 'white',
    },
    colorNegro: {
        color: 'black'
    },
    link: {

    }
}

export function TopMenu() {
    const { menuColor, colorNegro } = style;
    const [actualizarMenuCelular, setMenuCelular] = useState(false);

    const menuCelular = () => {
        const formulario = (actualizarMenuCelular) ? false : true;
        setMenuCelular(formulario);
    }

    return (
        <Row>
            <nav className="banner-superior">
                <div>
                    <ul className="banner-lista">
                        <li><a>{APP_NAME}</a></li>
                        <li><a>Inicio</a></li>
                        <li><a>Nosotros</a></li>
                        <li><a>Contáctanos</a></li>
                    </ul>
                </div>
            </nav>
            <div class={(actualizarMenuCelular) ? "navigation active" : "navigation"}  onClick={menuCelular}>
                <div class={"ham-btn"}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div class="links">
                    <div class="link">
                        <a href="#">Inicio</a>
                    </div>
                    <div class="link">
                        <a href="#">Nosotros</a>
                    </div>
                    <div class="link">
                        <a href="#">Contáctanos</a>
                    </div>
                </div>
            </div>
        </Row>
    )
}