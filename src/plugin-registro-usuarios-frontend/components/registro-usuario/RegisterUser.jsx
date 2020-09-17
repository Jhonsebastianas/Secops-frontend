import React, { Component } from 'react';
import RegisterUserForm from './RegisterUserForm';
import './RegisterUser.css';

import { Row } from 'react-materialize';

export default class RegisterUser extends Component {
    render() {
        return (
            <div class="parallax-container">
                <div class="row">
                    <div class="col s2"></div>
                    <div class="col s12 m8 l8">
                        <div class="card card-registro">
                            <div class="card-content">
                                <h6>INFORMACIÓN REGISTRO:</h6>
                                <div class="row">
                                    <RegisterUserForm />
                                </div>
                                <div class="center-align">
                                    <a class="">¿Olvidaste tu contraseña?</a>
                                </div>
                                <a href="/" class="">VOLVER</a>
                            </div>
                        </div>
                        <div class="parallax">
                            <img height="100dv" src="../../../../assets/images/money2-bg.jpg" alt="Unsplashed background img 1" />
                        </div>
                    </div>
                    <div class="col s2"></div>
                </div>
            </div>
        );
    }
}