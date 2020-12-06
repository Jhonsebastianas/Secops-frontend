import React from 'react';
import { Col, Row, TextInput, RadioGroup, Card, CardTitle, Icon } from 'react-materialize';

const estratosMedellin = [1, 2, 3, 4, 5, 6];

const preguntaHogarPrincipal = ['Si', 'No'];

export function RegisterHomeForm() {
    return (
        <form>
            <Row>
                <TextInput label='Nombre hogar: *' id='nombreHogar'
                    m={5} />
                <TextInput label='# Contrato: *' id='numeroContrato'
                    m={4} />
                <Col m={3}>
                    <p>¿Este es su hogar principal?</p>
                    {preguntaHogarPrincipal.map(respuesta => {
                        return (
                            <Col m={6}>
                                <p>
                                    <label>
                                        <input className="with-gap" name='hogarPrincipal' id={`hogarPrincipal${respuesta}`} type="radio" />
                                        <span>{respuesta}</span>
                                    </label>
                                </p>
                            </Col>
                        );
                    })}
                </Col>
                <Col m={6}>
                    <p>Tipo de vivienda: *</p>
                    <Col m={6} s={12}>
                        <Card
                            closeIcon={<Icon>close</Icon>}
                            header={<CardTitle image="https://materializecss.com/images/sample-1.jpg">Casa</CardTitle>}
                            revealIcon={<Icon>more_vert</Icon>}
                        >
                            Hogar residencial
                        </Card>
                    </Col>
                    <Col m={6} s={12}>
                        <Card
                            closeIcon={<Icon>close</Icon>}
                            header={<CardTitle image="https://materializecss.com/images/sample-1.jpg">Apartamento</CardTitle>}
                            revealIcon={<Icon>more_vert</Icon>}
                        >
                            Apartamento
                        </Card>
                    </Col>
                </Col>
                <Col m={6}>
                    <p>Estrato de la vivienda: *</p>
                    {estratosMedellin.map(estrato => {
                        return (
                            <Col m={4}>
                                <p>
                                    <label>
                                        <input className="with-gap" name='estratoVivienda' id={`estrato${estrato}`} type="radio" />
                                        <span>{estrato}</span>
                                    </label>
                                </p>
                            </Col>
                        );
                    })}
                </Col>
            </Row>
        </form>
    );
}