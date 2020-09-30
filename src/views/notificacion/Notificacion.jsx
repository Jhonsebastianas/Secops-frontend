import React from 'react';
import { Row, Col } from 'react-materialize';
import Plantillas from '../../constants/PlantillasNotificaciones';
import { useParams } from "react-router-dom";
import Styles from './Notificacion.module.css';

export function Notificacion() {

    const { padre } = Styles;

    const { nombrePlantilla } = useParams();

    const plantilla = Plantillas.find(plantilla => plantilla.nombre === nombrePlantilla);

    const { nombreImagen, titulo, descripcion, tituloBoton, rutaBoton } = plantilla;

    return (
        <div className={padre}>
            <div className="valign-wrapper center-align">
                <Row>
                    <Col m={12}>
                        <img width="200px" src={require(`../../assets/images/alerts/${nombreImagen}`)} alt="mailSend" className="responsive-img" />
                    </Col>
                    <Col className="center-align" m={12}>
                        <h3>{titulo}</h3>
                    </Col>
                    <Col m={12}>
                        <Col m={3}></Col>
                        <Col m={6}>
                            <p className="flow-text">{descripcion}</p>
                        </Col>
                        <Col m={3}></Col>
                    </Col>
                    <Col className="center-align" m={12}>
                        <a className="btn waves-effect waves-light btn-secundario" href={rutaBoton}>{tituloBoton}</a>
                    </Col>
                </Row>
            </div>
        </div>
    );
}