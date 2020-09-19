import React, { Component } from 'react';
// CSS
import './RegisterUser.css';
// Images
import backgroundImage from '../../../assets/images/money-bg.jpg';
// Others
import { Row, Col, Card } from 'react-materialize';
import { RegisterUserForm } from './RegisterUserForm';
import { Link } from "react-router-dom";

export default class RegisterUser extends Component {
    render() {
        return (
            <div className="parallax-container">
                <Row>
                    <Col s='2'></Col>
                    <Col s='12' m='8' l='8'>
                        <Card className="card-registro">
                            <div className="card-content">
                                <h6>INFORMACIÓN REGISTRO:</h6>
                                <RegisterUserForm />
                                <div className="center-align">
                                    <a className="">¿Olvidaste tu contraseña?</a>
                                </div>
                                <Link to="/">VOLVER</Link>
                            </div>
                        </Card>
                        <div className="parallax">
                            <img height="100dv" src={backgroundImage} alt="Unsplashed background img 1" />
                        </div>
                    </Col>
                    <Col s='2'></Col>
                </Row>
            </div>
        );
    }
}