import React from 'react';
import { TopMenu } from './menu/TopMenu';
import { Button, Col, Container } from 'react-materialize';
import { ListaHogares } from '../../plugin-hogares-frontend/views/homes-list/ListaHogares';
import { useHistory } from 'react-router-dom';

export function Home() {

    const history = useHistory();

    return (
        <div>
            <TopMenu />
            <Container>
                <h6>Resumen consumo de servicios públicos</h6>
                <p>En esta sección encontrarás un resumen de tus gastos</p>
                <ListaHogares />
                <Col s={12} m={12}>
                    <Button className='botonSecundary' onClick={() => history.push("agregar-un-hogar")}>
                        Agregar un hogar [+]
                    </Button>
                </Col>

            </Container>
        </div>
    );
}