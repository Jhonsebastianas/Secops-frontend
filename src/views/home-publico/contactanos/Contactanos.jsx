import React from 'react';
import { TopMenu } from '../menu/TopMenu';
import styles from './Contactanos.module.css';
import { Row, Col, Card, Preloader } from 'react-materialize';
// Images
import backgroundImage from '../../../assets/images/contactanos.svg';

import { FooterPublico } from '../../../components/common/footer/FooterPublico'

export function Contactanos() {
    const { parallaxContainer, cardRegistro, parallax, apodoAlmacen, light, iconPhone, ladoInforamcion, nombreAlmacen, googleMaps, responsiveIframe, informacionContacto } = styles;
    return (
        <div>
            <TopMenu />
            <div className={"parallax-container " + parallaxContainer}>
                <Row>
                    <Col s={2}></Col>
                    <Col s={12} m={8} l={8}>
                        <Card className={cardRegistro}>
                            <div className="card-content">
                                <div class="row">
                                    <div className="col s12 m6">
                                        <div class="icon-block">
                                            <img height="280dv" className='responsive-img' src={backgroundImage} alt="Unsplashed background img 1" />
                                        </div>
                                        <h1>Contáctenos</h1>
                                    </div>
                                    <Col s={12} m={6} className={ladoInforamcion}>
                                        <h2 class={apodoAlmacen + " center"}><strong>ALIS</strong></h2>
                                        <h5 className={nombreAlmacen + " center nombre-almacen"}>(Almacen La Isla)</h5>
                                        <h2 className={light + " light-blue-text"}><i className={iconPhone + " material-icons"}>contact_phone</i></h2>
                                        <p className={informacionContacto}>Líneas de atención <br />Teléfono: 8951351<br />Celular: 3009874562</p>
                                        <h2 className={light + " light-blue-text"}><i className={iconPhone + " material-icons"}>email</i></h2>
                                        <p className="">Redes sociales <br />Gmail: almacenIsla@gmail.com<br /></p>
                                    </Col>
                                </div>
                                <section>
                                    <div className="map" >
                                        <h5>
                                            Estamos ubicados en:
                                         </h5>
                                        <p>
                                            1600 Pennsylvania Avenue NW, Washington, DC 20500, Estados Unidos
                                         </p>
                                        <div className={responsiveIframe}>
                                            <iframe
                                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10985.875768912832!2d-77.03980597134134!3d38.897762870329736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b7bcdecbb1df%3A0x715969d86d0b76bf!2sCasa%20Blanca!5e0!3m2!1ses!2sco!4v1597694495765!5m2!1ses!2sco"
                                                allowfullscreen=""
                                                aria-hidden="false"
                                                frameborder="0"
                                                tabindex="0"
                                                className={googleMaps}
                                            ></iframe>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </Card>
                    </Col>
                    <Col s={4}></Col>
                </Row>
            </div>
            <FooterPublico />
        </div >
    );

};