import React from 'react';
import { TopMenu } from './menu/TopMenu';
import { Link } from 'react-router-dom';
import { Container } from 'react-materialize';
import { ListaHogares } from '../../plugin-hogares-frontend/views/homes-list/ListaHogares';

export function Home() {
    return (
        <div>
            <TopMenu />
            <Container>
                <h6>Resumen consumo de servicios públicos</h6>
                <p>En esta sección encontraras un resumen de tus gastos</p>
                <ListaHogares />
                <Link to='/agregar-un-hogar' className='botonSecundary'>
                    Agregar un hogar [+]
                </Link>
            </Container>
        </div>
    );
}