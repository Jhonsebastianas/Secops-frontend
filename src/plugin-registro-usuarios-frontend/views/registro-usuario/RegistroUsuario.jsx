import React from 'react';
import './RegistroUsuario.css';
import { RegisterUserForm } from './RegisterUserForm';

export function RegistroUsuario() {
    return (
        <div className="register-photo">
            <div className="form-container">
                <div role="img" aria-label="imagen registro usuario" className="image-holder"></div>
                    <RegisterUserForm/>
            </div>
        </div>
    );
}