import React from 'react';
import { TopMenu } from './menu/TopMenu';
import imgAgua from '../../assets/images/servicios/agua1.png';
import imgEnergia from '../../assets/images/servicios/energia1.png';
import imgGas from '../../assets/images/servicios/gas1.png';
import { Link } from 'react-router-dom';
import { Container, Collapsible, CollapsibleItem, Icon, Row, Col, Card, CardTitle, CardPanel } from 'react-materialize';

export function Home() {
    return (
        <div>
            <TopMenu />
            <Container>
                <h6>Resumen consumo de servicios públicos</h6>
                <p>En esta sección encontraras un resumen de tus gastos</p>
                <Collapsible accordion popout >
                    <CollapsibleItem
                        expanded
                        header="Hogar actual"
                        icon={<Icon>home</Icon>}
                        node="div"
                    >
                        <Col m={12}>
                            Información de tu hogar
                        </Col>
                        <Row>
                            <CardPanel className="">
                                <span className="black-text">
                                    Contrato: x123 | Estrato: 3
                                </span>
                            </CardPanel>
                            <Row>
                                <Col m={12}>
                                    Información de tus servicios
                                </Col>
                                <Col m={4}>
                                    <Card
                                        actions={[
                                            <a key="1" href="#">Ver al detalle</a>
                                        ]}
                                        closeIcon={<Icon>close</Icon>}
                                        header={<CardTitle image={imgAgua} />}
                                        horizontal
                                        revealIcon={<Icon>more_vert</Icon>}
                                    >
                                        AGUA
                                    </Card>
                                </Col>
                                <Col m={4}>
                                    <Card
                                        actions={[
                                            <a key="1" href="#">Ver al detalle</a>
                                        ]}
                                        closeIcon={<Icon>close</Icon>}
                                        header={<CardTitle image={imgEnergia} />}
                                        horizontal
                                        revealIcon={<Icon>more_vert</Icon>}
                                    >
                                        ENERGÍA
                                    </Card>
                                </Col>
                                <Col m={4}>
                                    <Card
                                        actions={[
                                            <a key="1" href="#">Ver al detalle</a>
                                        ]}
                                        closeIcon={<Icon>close</Icon>}
                                        header={<CardTitle image={imgGas    } />}
                                        horizontal
                                        revealIcon={<Icon>more_vert</Icon>}
                                    >
                                        GAS
                                    </Card>
                                </Col>
                            </Row>
                        </Row>
                    </CollapsibleItem>
                </Collapsible>
                <Link to='/agregar-un-hogar' className='botonSecundary'>
                    Agregar un hogar [+]
                </Link>
            </Container>
        </div>
    );
}