import React from 'react';
import { Row, Col, Icon, Button, Container, Table } from 'react-materialize';
import { TopMenu } from '../../../views/home-privado/menu/TopMenu';
import styles from '../../views/gestionar-consumo/GestionarConsumo.module.css';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
    {
        meses: 'Semana 1', Noviembre: 4000, Diciembre: 2400, amt: 2400,
    },
    {
        meses: 'Semana 2', Noviembre: 3000, Diciembre: 1398, amt: 2210,
    },
    {
        meses: 'Semana 3', Noviembre: 2000, Diciembre: 9800, amt: 2290,
    },
    {
        meses: 'Semana 4', Noviembre: 2780, Diciembre: 3908, amt: 2000,
    },

];

const percentage = 66;

export function GestionarConsumo() {


    const handleClick = () => {
        console.log('Se hizo click');
    }

    const { contenedorMediano, contenedorMaximum, tamanoCirculo,
        colorIcon, principalContenedor, botonAgregar, contenedorDescripcion,
        contenedorValores } = styles;

    return (

        <div>
            <TopMenu />
            <div className={principalContenedor}>

                <Row>
                    <Col s={12} m={4} >
                        <div className={contenedorMediano}>
                            <CircularProgressbarWithChildren
                                value={percentage}
                                text={`${percentage}%`}
                                styles={{
                                    //  Personaliza el elemento svg raíz
                                    root: {},
                                    //  Personaliza la ruta, es decir, el "progreso completado"
                                    path: {
                                        //  Color de ruta
                                        stroke: `rgba(40,167,40,0.9)`,
                                        //  Ya sea para usar esquinas redondeadas o planas en los extremos, puede usar 'butt' o 'round'
                                        strokeLinecap: 'round',
                                        //  Personalizar la animación de transición
                                        transition: 'stroke-dashoffset 0.5s ease 0s',
                                        //  Rotar el camino
                                        transform: 'rotate(0.25turn)',
                                        transformOrigin: 'center center',
                                    },
                                    //  Personaliza el círculo detrás de la ruta, es decir, el "progreso total"
                                    trail: {
                                        //  Color de la pista
                                        stroke: '#d6d6d6',
                                        //  Ya sea para usar esquinas redondeadas o planas en los extremos, puede usar 'butt' o 'round'
                                        strokeLinecap: 'butt',
                                        //  Rotar el sendero
                                        transform: 'rotate(0.25turn)',
                                        transformOrigin: 'center center',
                                    },
                                    // Personaliza el texto
                                    text: {
                                        // Color del texto
                                        fill: 'rgb(122,212,52)',
                                        // Tamaño del texto
                                        fontSize: '12px',

                                        margin: 'auto'

                                    },
                                    // Personalizar el fondo: solo se usa cuando el accesorio `background` es verdadero
                                    background: {
                                        fill: '#3e98c7',
                                    },

                                }}
                                className={tamanoCirculo}>
                                {/*<img className= {imagenServicio}
                        src="https://e7.pngegg.com/pngimages/546/134/png-clipart-renewable-energy-sustainable-development-green-energy-energy-conservation-energy-logo-waste.png" alt="doge" />
                        */}
                            </CircularProgressbarWithChildren>
                            <h5>Consumo del servicio</h5>
                            <p>Consumo promedio: 14</p>
                            <p>Exceso: 10</p>
                            <p>Total consumido: 24</p>

                        </div>
                    </Col>

                    <Col s={12} m={8} >
                        <div className={contenedorMaximum}>
                            <h5>Estadísticas</h5>
                            <Container>
                                <ResponsiveContainer width="100%" height={300}>

                                    <BarChart data={data}
                                        margin={{
                                            top: 5, right: 30, left: 20, bottom: 5,
                                        }}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="meses" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Bar dataKey="Diciembre" fill="#28A728" />
                                        <Bar dataKey="Noviembre" fill="#82ca9d" />
                                    </BarChart>

                                </ResponsiveContainer>
                            </Container>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col s={12} m={4} >
                        <div className={contenedorMediano}>
                            <h5>Valor del Consumo</h5>
                            
                            <Container>
                                <Table className='responsive-table'>
                                    <tr>
                                        <td>
                                            Servicio por m³
                                        </td>
                                        <td>
                                            $ 1.553
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Exceso por m³
                                        </td>
                                        <td>
                                            $ 1.776
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Cargo fijo
                                        </td>
                                        <td>
                                            $ 7.485
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Exceso
                                        </td>
                                        <td>
                                            $ 17.756
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Acueducto
                                        </td>
                                        <td>
                                            $ 0
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Alcantarillado
                                        </td>
                                        <td>
                                            $ 0
                                        </td>
                                    </tr>                                   
                                    <tr>
                                        <td>
                                            <strong>Total</strong>
                                        </td>
                                        <td>
                                            <strong>$ 49.488</strong>
                                        </td>
                                    </tr>
                                </Table>
                            </Container>

                        </div>
                    </Col>
                    <Col s={12} m={8} >
                        <div className={contenedorMaximum}>
                            <h5 className={colorIcon}>Tip de Ahorro <Icon >wb_incandescent</Icon></h5>
                            <p><strong>Reutiliza el agua.</strong> Intenta volver a utilizar el agua que no esté sucia para
                            otras acciones,  como por ejemplo, el agua del baño de tus hijos te puede
                            servir para fregar el suelo.</p>

                        </div>
                    </Col>
                </Row>
                <div className='fixed-action-btn'>
                    <Button
                        className={botonAgregar}
                        node="button"
                        tooltip="Agregar Consumo"
                        tooltipOptions={{
                            position: 'left'
                        }}
                        floating
                        icon={<Icon>mode_edit</Icon>}
                        large
                        onClick={handleClick}

                    />

                </div>

            </div>
        </div>
    );

}