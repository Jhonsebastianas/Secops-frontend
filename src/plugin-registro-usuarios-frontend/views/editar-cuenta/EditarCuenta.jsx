import React, { useState } from 'react';
import { TopMenu } from '../../../views/home-publico/menu/TopMenu';
import { Row, Col, Card, Preloader, TextInput, Icon } from 'react-materialize';
import styles from './EditarCuenta.module.css';
import backgroundImage from '../../../assets/images/contactanos.svg';
import aguaLogoVerde from '../../../assets/images/servicios/aguaLogoVerde.png';
import energiaLogoVerde from '../../../assets/images/servicios/energiaLogoVerde.png';
import gasLogoGris from '../../../assets/images/servicios/gasLogoGris.png';
// Images
import { FooterPublico } from '../../../components/common/footer/FooterPublico'

export function EditarCuenta() {
    const { imagen, nombre, logoServicio, fondoBlanco } = styles;
    const [visibilidadFormulario, setVisibilidadformulario] = useState(false);

    const esconderFormulario = () => {

        const elemento = document.getElementById("contenidoFormulario");
        const formulario = (visibilidadFormulario) ? false : true;
        setVisibilidadformulario(formulario);
    }

    return (

        <div>
            <TopMenu />
            <div className="row">
                <form method="post" id="perfil">
                    <div className={"col s12 " + fondoBlanco} >
                        <div className="col s12 m5 l5 xl5">
                            <div className="center">
                                <img className={imagen} src={backgroundImage}></img>
                                <p className={nombre}><strong>Jhon Sebastian</strong></p>
                                <a className="waves-effect waves-light btn" onClick={esconderFormulario}>Editar</a>
                                <div id="contenedorFormulario">
                                    {visibilidadFormulario && (<div id="contenidoFormulario">
                                        <div>
                                            <div className="input-field col s11">
                                                <i className="material-icons prefix">account_circle</i>
                                                <input id="icon_prefix" type="text" className="validate" />
                                                <label htmlFor="icon_prefix">First Name</label>
                                            </div>
                                        </div>
                                        <TextInput label='Hola wey' icon={<Icon>account_circle</Icon>} s={11}/>
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
                        <div className="col s12 m7 l7 xl7">


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
                                            <img className={logoServicio} src={gasLogoGris}></img>

                                        </td>
                                        <td>
                                            <i className="material-icons prefix">mode_edit</i>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Alan</td>
                                        <td>Jellybean</td>
                                        <td>$3.76</td>
                                    </tr>
                                    <tr>
                                        <td>Jonathan</td>
                                        <td>Lollipop</td>
                                        <td>$7.00</td>
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
