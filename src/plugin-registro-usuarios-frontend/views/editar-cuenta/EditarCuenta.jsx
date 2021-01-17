import React, { useState, useEffect } from 'react';
import { TopMenu } from '../../../views/home-privado/menu/TopMenu';
import styles from './EditarCuenta.module.css';
import backgroundImage from '../../../assets/images/contactanos.svg';
import aguaLogoVerde from '../../../assets/images/servicios/aguaLogoVerde.png';
import energiaLogoVerde from '../../../assets/images/servicios/energiaLogoVerde.png';
import LoginUtils from '../../../plugin-loginjwt-frontend/utils/login.utils';
// Hogares
import imgAgua from '../../../assets/images/servicios/agua1.png';
import imgEnergia from '../../../assets/images/servicios/energia1.png';
import { Col, Row, Table, Modal, Button, TextInput, Card } from 'react-materialize';
import { Services } from '../../../plugin-hogares-frontend/services/hogar.services';

export function EditarCuenta() {
    const { imagen, nombre, logoServicio, fondoBlanco } = styles;
    // const [visibilidadFormulario, setVisibilidadformulario] = useState(false);
    const [actualizarFormulario, setActualizarformulario] = useState(false);
    const [listaHogares, setListaHogares] = useState([]);
    const [editarHogar, setEditarHogar] = useState(null);

    const actualizarInformacion = () => {
        const formulario = (actualizarFormulario) ? false : true;
        setActualizarformulario(formulario);
    }
    // const esconderFormulario = () => {
    //     const formulario = (visibilidadFormulario) ? false : true;
    //     setVisibilidadformulario(formulario);
    // }

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

    function getHomeByNumeroContrato(numeroContrato) {
        Services.getHogarByNumeroContrato(numeroContrato, ({ data }) => {
            console.log(data);
            setEditarHogar(data);
        }, (error) => { });
    }

    return (

        <div>
            <TopMenu />
            <Row>
                <form method="post" id="perfil">
                    <Col s={12} className={fondoBlanco} >
                        <Col s={12} m={5} l={3} xl={13}>
                            <Col className="center">
                                <img className={imagen} src={backgroundImage}></img>
                                <p className={nombre}><strong>{LoginUtils.getFullName()}</strong></p>
                                {/* <a className="btn" onClick={esconderFormulario}>Editar</a> */}
                                <Col id="contenedorFormulario">
                                    {/* {visibilidadFormulario && (<div id="contenidoFormulario">
                                                <div>
                                                    <div className="input-field col s11">
                                                        <i className="material-icons prefix">account_circle</i>
                                                        <input id="icon_prefix" type="text" className="validate" value={LoginUtils.getFullName()} />
                                                        <label htmlFor="icon_prefix"></label>
                                                    </div>
                                                </div>
                                                <TextInput label='Apellidos' icon={<Icon>account_circle</Icon>} s={11} placeholder={LoginUtils.getFullName()}/>
                                            </div>)} */}
                                </Col>
                            </Col>
                        </Col>
                        <Col s={12} m={7} l={9} xl={9}>


                            <Table className="centered">
                                <thead>
                                    <tr>
                                        <th>#Contrato</th>
                                        <th>Hogar</th>
                                        <th>Estrato</th>
                                        <th>Servicios</th>
                                        <th></th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {listaHogares.map(hogar => {
                                        return (
                                            <tr>
                                                <td>{hogar.numeroContrato}</td>
                                                <td>{hogar.nombre}</td>
                                                <td>{hogar.estrato}</td>
                                                <td>
                                                    {hogar.servicios.map(servicio => {
                                                        return (
                                                            <img className={logoServicio} src={(servicio === 'Agua') ? energiaLogoVerde : aguaLogoVerde}></img>

                                                        );
                                                    })}


                                                </td>
                                                <td>
                                                    {/*<i className="material-icons prefix" onClick={()=>getHomeByNumeroContrato(hogar.numeroContrato)}>mode_edit</i>*/}
                                                    <Modal
                                                        actions={[
                                                            <Button flat modal="close" node="button" waves="green">Close</Button>
                                                        ]}
                                                        bottomSheet={false}
                                                        fixedFooter
                                                        header="Modal Header"
                                                        id="Modal-0"
                                                        open={false}
                                                        options={{
                                                            dismissible: true,
                                                            endingTop: '10%',
                                                            inDuration: 250,
                                                            onCloseEnd: null,
                                                            onCloseStart: null,
                                                            onOpenEnd: actualizarInformacion,
                                                            onOpenStart: () => getHomeByNumeroContrato(hogar.numeroContrato),
                                                            opacity: 0.5,
                                                            outDuration: 250,
                                                            preventScrolling: true,
                                                            startingTop: '4%'
                                                        }}
                                                        /*root={[object HTMLBodyElement]}*/
                                                        trigger={<i className="material-icons prefix" node="button">mode_edit</i>}
                                                    >
                                                        <p>{/*(editarHogar) ? editarHogar.numeroContrato : ""*/}</p>
                                                        <Row>
                                                            <TextInput label={"Nombre hogar: " + ((editarHogar) ? editarHogar.nombre : "")} id='nombreHogar' m={6} s={12} />
                                                            <TextInput label={"# Contrato: " + ((editarHogar) ? editarHogar.numeroContrato : "")} id='numeroContrato' m={6} s={12} autocomplete="off" />
                                                            <Col m={12}>
                                                                <p>Tipo de vivienda: *</p>
                                                                <Col m={4} s={12}>
                                                                    <Card>
                                                                        <label>
                                                                            <input name="tipoHogar" value='casa' type="radio"
                                                                                onChange="" checked />
                                                                            <span>Casa</span>
                                                                        </label>
                                                                    </Card>
                                                                </Col>
                                                                <Col m={4} s={12}>
                                                                    <Card>
                                                                        <label>
                                                                            <input name="tipoHogar" value='apartamento' type="radio"
                                                                                onChange="" />
                                                                            <span>Apartamento</span>
                                                                        </label>
                                                                    </Card>
                                                                </Col>
                                                                <Col m={4} s={12}>
                                                                    <Card>
                                                                        <label>
                                                                            <input name="tipoHogar" value='otro' type="radio"
                                                                                onChange="" />
                                                                            <span>Otro</span>
                                                                        </label>
                                                                    </Card>
                                                                </Col>
                                                                <Col m={6}>
                                                                    <p>Estrato de la vivienda: *</p>
                                                                    <Col m={4}>
                                                                        <p>
                                                                            <label>
                                                                                <input className="with-gap" name='estrato' id='estrato1' value='1' type="radio"
                                                                                   />
                                                                                <span>1</span>
                                                                            </label>
                                                                        </p>
                                                                    </Col>
                                                                    <Col m={4}>
                                                                        <p>
                                                                            <label>
                                                                                <input className="with-gap" name='estrato' id='estrato2' value='2' type="radio"
                                                                                  />
                                                                                <span>2</span>
                                                                            </label>
                                                                        </p>
                                                                    </Col>
                                                                    <Col m={4}>
                                                                        <p>
                                                                            <label>
                                                                                <input className="with-gap" name='estrato' id='estrato3' value='3' type="radio"
                                                                                     />
                                                                                <span>3</span>
                                                                            </label>
                                                                        </p>
                                                                    </Col>
                                                                    <Col m={4}>
                                                                        <p>
                                                                            <label>
                                                                                <input className="with-gap" name='estrato' id='estrato4' value='4' type="radio"
                                                                                     />
                                                                                <span>4</span>
                                                                            </label>
                                                                        </p>
                                                                    </Col>
                                                                    <Col m={4}>
                                                                        <p>
                                                                            <label>
                                                                                <input className="with-gap" name='estrato' id='estrato5' value='5' type="radio"
                                                                                    />
                                                                                <span>5</span>
                                                                            </label>
                                                                        </p>
                                                                    </Col>
                                                                    <Col m={4}>
                                                                        <p>
                                                                            <label>
                                                                                <input className="with-gap" name='estrato' id='estrato6' value='6' type="radio"
                                                                                     />
                                                                                <span>6</span>
                                                                            </label>
                                                                        </p>
                                                                    </Col>
                                                                   
                                                                </Col>
                                                            </Col>
                                                        </Row>
                                                    </Modal>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </Table>
                        </Col>
                        </Col>

                </form>
                    {/* <FooterPublico /> */}
            </Row>
        </div>
    );

};


/*
function mostrarFormulario() {
    var elemento = document.getElementById("contenedorFormulario");
    elemento.append('<div id="editarFormulario"><div><div className="input-field col s11"> <i className="material-icons prefix">account_circle</i><input id="icon_prefix" type="text" className="validate" /><label htmlFor="icon_prefix">First Name</label></div> </div> <div><div className="input-field col s11"> <i className="material-icons prefix">account_circle</i><input id="icon_prefix" type="text" className="validate" /> <label htmlFor="icon_prefix">Direccion</label></div></div></div>');
}*/
