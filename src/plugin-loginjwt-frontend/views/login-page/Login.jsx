import React from 'react';
import { LoginForm } from './LoginForm';
// CSS
import styles from './Login.module.css';
// Images
import backgroundImage from '../../../assets/images/money-bg.jpg';
// Materialize
import { Row, Col, Card  } from 'react-materialize';

export function Login() {

    const { parallaxContainer, cardLogin, parallax } = styles;

    return (
        <div className={`parallax-container ${parallaxContainer}`}>
            <Row>
                <Col s={3}></Col>
                <Col s={12} m={6} l={6}>
                    <Card className={cardLogin}>
                        <div class="card-content">
                            <h6>INICIO DE SESSIÓN</h6>
                            <LoginForm />
                            <div class="center-align">
                                <a class="">¿Olvidaste tu contraseña?</a>
                            </div>
                            <a href="/" class="">VOLVER</a>
                        </div>
                    </Card>
                </Col>
                <div className={`parallax ${parallax}`}>
                    <img height="100dv" src={backgroundImage} alt="Unsplashed background img 1" />
                </div>
            </Row>
            <div class="col s2"></div>
        </div>
    );
}