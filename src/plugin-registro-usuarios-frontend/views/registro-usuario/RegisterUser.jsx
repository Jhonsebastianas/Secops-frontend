import React, { Component } from 'react';
// CSS
import styles from './RegisterUser.module.css';
// Images
import backgroundImage from '../../../assets/images/ahorro_1.webp';
// Others
import { Row, Col, Card } from 'react-materialize';
import { RegisterUserForm } from './RegisterUserForm';
import { Link } from "react-router-dom";

export default class RegisterUser extends Component {
    render() {
        const { parallaxContainer, cardRegistro, parallax } = styles;
        return (
            <div className={"parallax-container " + parallaxContainer}>
                <Row>
                    <Col s={2}></Col>
                    <Col s={12} m={8} l={8}>
                        <Card className={cardRegistro}>
                            <div className="card-content">
                                <h6>Crea tu cuenta</h6>
                                <RegisterUserForm />
                                <div className="center-align">
                                    <Link to='registro/recuperar-cuenta'>¿Olvidaste tu contraseña?</Link>
                                </div>
                                {/* <div className="condiciones">
                                    <p>
                                        Si continúa creando una cuenta, acepta nuestra Política de privacidad y términos y condiciones
                                    </p>
                                </div> */}
                                <Link to="/">VOLVER</Link>
                            </div>
                        </Card>
                        <div className={"parallax " + parallax}>
                            <img height="100dv" src={backgroundImage} alt="Unsplashed background img 1" />
                        </div>
                    </Col>
                    <Col s={2}></Col>
                </Row>
            </div>
        );
    }
}