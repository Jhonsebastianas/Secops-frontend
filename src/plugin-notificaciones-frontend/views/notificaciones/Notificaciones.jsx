import React from 'react';
import { Badge, CardPanel, Col, Container, Icon, Row } from 'react-materialize';
import './Notificaciones.css';

export function Notificaciones() {
    return (
        <Container>
            <h5>Alertas <Badge className="orange" newIcon>1</Badge></h5>
            <p>22 de Enero</p>
            <Row>
                <Col s={12}>
                    <CardPanel className="card-notificaciones">
                        <Row>
                            <Col s={1} className="center">
                                <Icon className="white-text" center >notifications_active</Icon>
                            </Col>
                            <Col s={11}>
                                <Col s={12}>
                                    <h6 className="titulo-notificacion">Ya casi alcanzas el limite subsidiado</h6>
                                </Col>
                                <Col s={12}>
                                    <p className="white-text">
                                        <strong>Hoy</strong>, 01:30 p.m. | Has consumido x m<sup>3</sup> de los 13 m<sup>3</sup> que subsidia tu ciudad, te recomendamos que sigas los siguientes tips y así ahorrarte un poco más de consumo.
                                    </p>
                                    <span className="white-text">
                                        <Icon tiny>home</Icon> Hogar: Mi casa
                                    </span>
                                </Col>
                            </Col>
                        </Row>
                    </CardPanel>
                </Col>
            </Row>
        </Container>
    )
}