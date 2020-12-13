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
import { Card, CardPanel, CardTitle, Col, Collapsible, CollapsibleItem, Collection, Icon, Row, Table } from 'react-materialize';
import { Services } from '../../../plugin-hogares-frontend/services/hogar.services';

export function EditarCuenta() {
    const { imagen, nombre, logoServicio, fondoBlanco } = styles;
    // const [visibilidadFormulario, setVisibilidadformulario] = useState(false);

    // const esconderFormulario = () => {
    //     const formulario = (visibilidadFormulario) ? false : true;
    //     setVisibilidadformulario(formulario);
    // }
    const [listaHogares, setListaHogares] = useState([]);
    const [editarHogar, setEditarHogar] = useState(null);

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

    function getHomeByNumeroContrato(numeroContrato){
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
                                                    <i className="material-icons prefix" onClick={()=>getHomeByNumeroContrato(hogar.numeroContrato)}>mode_edit</i>
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
