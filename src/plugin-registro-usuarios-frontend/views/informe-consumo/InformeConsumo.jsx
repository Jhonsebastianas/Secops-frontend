import React from "react";
import { Row, Col, Button, Modal, TextInput } from "react-materialize";
import "./InformeConsumo.css";
import { TopMenu } from "../../../views/home-privado/menu/TopMenu";
import {GraficasBarras} from "../../components/common/GraficasBarras";
import {ValorConsumoServicio} from "../../components/common/ValorConsumoServicio";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import M from "materialize-css";

const percentage = 66;

export function InformeConsumo() {

    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.fixed-action-btn');
        var instances = M.FloatingActionButton.init(elems);
    });
 
    return (
        <div>
            <TopMenu />
            <div className="contenedorPrincipal">
                <Row>
                    <Col s={12} m={4} className="dimensionContenedor">
                        <div className="contenedorMediano">
                            <div className="anchoGrafica">
                            <CircularProgressbar
                                value={percentage}
                                text={`${percentage} %`}
                                styles={{
                                    root: {},
                                    path: {
                                        stroke: `#00aae4`,
                                        strokeLinecap: "round",
                                        transition: "stroke-dashoffset 0.5s ease 0s",
                                        transform: "rotate(0.25turn)",
                                        transformOrigin: "center center",
                                    },
                                    trail: {
                                        stroke: "#d6d6d6",
                                        strokeLinecap: "butt",
                                        transform: "rotate(0.25turn)",
                                        transformOrigin: "center center",
                                    },
                                    text: {
                                        fill: "#179fcd)",
                                        fontSize: "18px",
                                        margin: "auto",
                                    },
                                    background: {
                                        fill: "#3e98c7",
                                    },
                                    width: "50px",
                                }}
                                className="anchoGrafica"
                            ></CircularProgressbar>
                            </div>
                            <h5>Gasto del servicio</h5>
                            <div className="informacion">
                                <p>Consumo promedio: </p>
                                <p>14</p>
                                <p>Consumo actual: </p>
                                <p>10</p>
                                <p>Total consumido: </p>
                                <p>14</p>
                                <p>Total</p>
                                <p><strong>$ 49.488</strong></p>
                            </div>
                            <Button className="modal-trigger" href="#modalNuevoRegistro" node="button">
                            Nuevo Registro de Consumo
                            </Button> 
                            <Modal
                                actions={[
                                        <Button flat modal="close" node="button" waves="green">Cerrar</Button>,
                                        <Button type="submit" modal="close" node="button">Confirmar</Button>,
                                ]}
                                bottomSheet={false}
                                fixedFooter={false}
                                header="Nuevo Registro"
                                id="modalNuevoRegistro"
                                open={false}
                                options={{
                                    dismissible: true,
                                    endingTop: "10%",
                                    inDuration: 250,
                                    onCloseEnd: null,
                                    onCloseStart: null,
                                    onOpenEnd: null,
                                    onOpenStart: null,
                                    opacity: 0.5,
                                    outDuration: 250,
                                    preventScrolling: true,
                                    startingTop: "4%",
                                }}
                            >
                                <TextInput id="consumoanterior" label="Consumo mes anterior" />
                                <TextInput id="consumoactual" label="Consumo mes actual" />
                            </Modal>
                        </div>
                    </Col>
                    <Col s={12} m={8}>
                        <div className="contenedorMaximum">
                            <GraficasBarras/>       
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col s={12} m={4} className="dimensionContenedor">
                        <div className="contenedorMediano">
                            <h5>Tip de Ahorro</h5>
                            <p><strong>Reutiliza el agua.</strong> Intenta volver a utilizar el
                                agua que no esté sucia para otras acciones, como por ejemplo, el
                                agua del baño de tus hijos te puede servir para fregar el suelo.
                             </p>
                        </div>
                    </Col>
                    <Col s={12} m={8}>
                        <div className="contenedorMaximum">
                            <ValorConsumoServicio/>
                        </div>
                    </Col>
                </Row>
                <div className="botonFlotante">
                    <div className="fixed-action-btn click-to-toggle" >
                        <a className="btn-floating btn-large botonAgregar">
                            <i class="large material-icons">add</i>
                        </a>
                        <ul>
                            <li class="waves-effect waves-light"> 
                                <a class="btn-floating botonAgregar"><i class="material-icons">insert_chart</i></a>
                            </li>
                            <li class="waves-effect waves-light">
                                <a class="btn-floating botonAgregar"><i class="material-icons">receipt</i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
