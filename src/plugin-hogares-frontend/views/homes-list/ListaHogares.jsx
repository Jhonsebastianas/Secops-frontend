import React, { useState, useEffect } from 'react';
import imgAgua from '../../../assets/images/servicios/agua1.png';
import imgEnergia from '../../../assets/images/servicios/energia1.png';
import { Card, CardPanel, CardTitle, Col, Collapsible, CollapsibleItem, Icon, Row } from 'react-materialize';
import { Services } from '../../services/hogar.services';
import LoginUtils from '../../../plugin-loginjwt-frontend/utils/login.utils';

export function ListaHogares() {

    const [listaHogares, setListaHogares] = useState([]);

    useEffect(() => {
        let mounted = true;
        console.log(mounted)
        Services.getHogaresByUsername(LoginUtils.getUsernameUser(), ({ data }) => {
            if (mounted) {
                setListaHogares(data);
            }
        }, (error) => { });
        return () => mounted = false;
    }, [])

    return (
        <div>
            <Collapsible accordion popout >

                {listaHogares.map(hogar => {
                    return (
                        <CollapsibleItem
                            //expanded
                            header={hogar.nombre}
                            icon={<Icon>{(hogar.tipoHogar === 'casa')? 'home': 'apartment'}</Icon>}
                            node="div"
                        >
                            <Col m={12}>
                                Información de tu hogar: {hogar.nombre}
                            </Col>
                            <Row>
                                <CardPanel className="">
                                    <span className="black-text">
                                        Contrato: {hogar.numeroContrato} | Tipo hogar: {hogar.tipoHogar} | Estrato: {hogar.estrato}
                                    </span>
                                </CardPanel>
                                <Row>
                                    <Col m={12}>
                                        Información de tus servicios
                                    </Col>
                                    {hogar.servicios.map(servicio => {
                                        return (
                                            <Col m={6}>
                                                <Card
                                                    actions={[
                                                        <a key="1" href="">Ver al detalle</a>
                                                    ]}
                                                    closeIcon={<Icon>close</Icon>}
                                                    header={<CardTitle image={(servicio === 'Agua')? imgAgua: imgEnergia} />}
                                                    horizontal
                                                    revealIcon={<Icon>more_vert</Icon>}
                                                >
                                                    {servicio}
                                                </Card>
                                            </Col>
                                        );
                                    })}
                                </Row>
                            </Row>

                        </CollapsibleItem>
                    );
                })}
            </Collapsible>
        </div>
    );
}