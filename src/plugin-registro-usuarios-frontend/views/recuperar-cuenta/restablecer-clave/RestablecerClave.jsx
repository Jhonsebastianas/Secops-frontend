import React from 'react';
import styles from '../RecuperarCuenta.module.css';
// Images
import backgroundImage from '../../../../assets/images/JP_8.webp';
// Others
import { Row, Col, Card } from 'react-materialize';
import { Link } from "react-router-dom";
import { RestablecerClaveForm } from './RestablecerClaveForm';

export function RestablecerClave() {
    const { parallaxContainer, cardRegistro, parallax } = styles;
    return (
        <div className={"parallax-container " + parallaxContainer}>
            <Row>
                <Col s={3}></Col>
                <Col s={12} m={6} l={6}>
                    <Card className={cardRegistro}>
                        <div className="card-content">
                            <h6>Restablecer clave</h6>
                            <RestablecerClaveForm />
                            <Link to="/">VOLVER</Link>
                        </div>
                    </Card>
                    <div className={"parallax " + parallax}>
                        <img height="100dv" src={backgroundImage} alt="Unsplashed background img 1" />
                    </div>
                </Col>
                <Col s={3}></Col>
            </Row>
        </div>
    );
}