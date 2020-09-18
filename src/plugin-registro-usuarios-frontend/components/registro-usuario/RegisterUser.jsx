import React, { Component } from 'react';
// CSS
import './RegisterUser.css';
// Images
import backgroundImage from '../../../assets/images/money-bg.jpg';
// Others
import { Row } from 'react-materialize';
import { RegisterUserForm } from './RegisterUserForm'

export default class RegisterUser extends Component {
    render() {
        return (
            <div className="parallax-container">
                <Row>
                    <div className="col s2"></div>
                    <div className="col s12 m8 l8">
                        <div className="card card-registro">
                            <div className="card-content">
                                <h6>INFORMACIÓN REGISTRO:</h6>
                                <RegisterUserForm />
                                <div className="center-align">
                                    <a className="">¿Olvidaste tu contraseña?</a>
                                </div>
                                <a href="/" className="">VOLVER</a>
                            </div>
                        </div>
                        <div className="parallax">
                            <img height="100dv" src={backgroundImage} alt="Unsplashed background img 1" />
                        </div>
                    </div>
                    <div className="col s2"></div>
                </Row>
            </div>
        );
    }
}