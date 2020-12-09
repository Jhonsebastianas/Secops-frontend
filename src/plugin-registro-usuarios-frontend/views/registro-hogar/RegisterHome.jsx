import React from 'react';
import { Container } from 'react-materialize';
import { TopMenu } from '../../../views/home-privado/menu/TopMenu';
import { RegisterHomeForm } from './RegisterHomeForm';

export function RegisterHome() {
    return (
        <div>
            <TopMenu />
            <Container>
                <h6>Agregar un nuevo hogar:</h6>
                <RegisterHomeForm/>
                <br></br><br></br><br></br><br></br>
            </Container>
        </div>
    );
}