import React from 'react';
import { useHistory } from "react-router-dom";
import { NavItem, Container, Row, Col } from 'react-materialize';
import LoginUtils from '../../../plugin-loginjwt-frontend/utils/login.utils';
import { useToasts } from 'react-toast-notifications';

export function MenuLateral () {

    const { addToast } = useToasts();
    const history = useHistory();

    const singOff = () => {
        LoginUtils.SignOff();
        addToast('Sesión cerrada con éxito', { appearance: 'success', autoDismiss: true, });
        history.push("/");
    }
    return (
        <Container>
            <Row>
                <Col s={12} m={12}>
                    <NavItem href="/home">
                        Inicio
                    </NavItem>
                </Col>
                <Col s={12} m={12}>
                    <NavItem href="/editar-cuenta">
                        Perfil
                    </NavItem>
                </Col>
                <Col s={12} m={12}>
                    <NavItem onClick={singOff}>
                        Cerrar sesión
                    </NavItem>
                </Col>
            </Row>
        </Container>
    );

}