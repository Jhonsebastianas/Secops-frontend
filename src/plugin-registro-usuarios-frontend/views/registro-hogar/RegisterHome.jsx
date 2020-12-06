import React from 'react';
import { Container } from 'react-materialize';
import { TopMenu } from '../../../views/home-privado/menu/TopMenu';
import { RegisterHomeForm } from './RegisterHomeForm';

export function RegisterHome() {
    return (
        <div>
            <TopMenu />
            <Container>
                <RegisterHomeForm/>
            </Container>
        </div>
    );
}