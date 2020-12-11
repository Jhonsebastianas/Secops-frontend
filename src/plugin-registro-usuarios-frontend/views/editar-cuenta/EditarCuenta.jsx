import React, { useState } from 'react';
import { TopMenu } from '../../../views/home-privado/menu/TopMenu';
import { Row, Col, Card, Preloader, TextInput, Icon } from 'react-materialize';
import styles from './EditarCuenta.module.css';
import backgroundImage from '../../../assets/images/contactanos.svg';
import aguaLogoVerde from '../../../assets/images/servicios/aguaLogoVerde.png';
import energiaLogoVerde from '../../../assets/images/servicios/energiaLogoVerde.png';
import gasLogoGris from '../../../assets/images/servicios/gasLogoGris.png';
import LoginUtils from '../../../plugin-loginjwt-frontend/utils/login.utils';
// Images

export function EditarCuenta() {
    const { imagen, nombre, logoServicio, fondoBlanco } = styles;
    const [visibilidadFormulario, setVisibilidadformulario] = useState(false);

    const esconderFormulario = () => {
        const formulario = (visibilidadFormulario) ? false : true;
        setVisibilidadformulario(formulario);
    }

    return (

        <div>
            <TopMenu />
            <div className="row">
                <form method="post" id="perfil">
                    <div className={"col s12 " + fondoBlanco} >
                        <div className="col s12 m5 l3 xl13">
                            <div className="center">
                                <img className={imagen} src={backgroundImage}></img>
                                <p className={nombre}><strong>{LoginUtils.getFullName()}</strong></p>
                                <a className="btn" onClick={esconderFormulario}>Editar</a>
                                <div id="contenedorFormulario">
                                    {visibilidadFormulario && (<div id="contenidoFormulario">
                                        <div>
                                            <div className="input-field col s11">
                                                <i className="material-icons prefix">account_circle</i>
                                                <input id="icon_prefix" type="text" className="validate" value={LoginUtils.getFullName()} />
                                                <label htmlFor="icon_prefix"></label>
                                            </div>
                                        </div>
                                        <TextInput label='Apellidos' icon={<Icon>account_circle</Icon>} s={11} placeholder={LoginUtils.getFullName()}/>
                                        {/* <div>
                                            <div className="input-field col s11">
                                                <i className="material-icons prefix">account_circle</i>
                                                <input id="icon_prefix" type="text" className="validate" />
                                                <label htmlFor="icon_prefix">Direccion</label>
                                            </div>
                                        </div> */}
                                    </div>)}
                                </div>
                            </div>
                        </div>
                        <div className="col s12 m7 l9 xl9">


                            <table className="centered">
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
                                    <tr>
                                        <td>056511313321</td>
                                        <td>MyCasa</td>
                                        <td>3</td>
                                        <td>

                                            <img className={logoServicio} src={energiaLogoVerde}></img>
                                            <img className={logoServicio} src={aguaLogoVerde}></img>

                                        </td>
                                        <td>
                                            <i className="material-icons prefix">mode_edit</i>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>60521503031</td>
                                        <td>Edificio</td>
                                        <td>2</td>
                                        <td>

                                        <img className={logoServicio} src={energiaLogoVerde}></img>
                                        <img className={logoServicio} src={aguaLogoVerde}></img>
                                        
                                        </td>
                                        <td>
                                        <i className="material-icons prefix">mode_edit</i>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>98653201102</td>
                                        <td>Porteria</td>
                                        <td>1</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </form>
                {/* <FooterPublico /> */}
            </div>

        </div>
    );
    
};


/*
function mostrarFormulario() {
    var elemento = document.getElementById("contenedorFormulario");
    elemento.append('<div id="editarFormulario"><div><div className="input-field col s11"> <i className="material-icons prefix">account_circle</i><input id="icon_prefix" type="text" className="validate" /><label htmlFor="icon_prefix">First Name</label></div> </div> <div><div className="input-field col s11"> <i className="material-icons prefix">account_circle</i><input id="icon_prefix" type="text" className="validate" /> <label htmlFor="icon_prefix">Direccion</label></div></div></div>');
}*/
