import React from 'react';
import firstBackImage from '../../../assets/images/money-bg.jpg';
import styles from './Inicio.module.css';
import { TopMenu } from '../menu/TopMenu';
import { Link } from "react-router-dom";
import { Row, Col, Container, Icon } from 'react-materialize';
import { APP_NAME } from '../../../constants/Constants';
import { FooterPublico } from '../../../components/common/footer/FooterPublico';

export function Inicio() {
    const { parallaxContainer, parallax } = styles;
    return (
        <div>
            <TopMenu />
            <div id="index-banner" className={"parallax-container " + parallaxContainer}>
                <div className="section no-pad-bot">
                    <Container>
                        <br></br><br></br>
                        <h1 className="header center teal-text text-lighten-2">{APP_NAME}</h1>
                        <Row className='center' >
                            <h5 className="header col s12 light">Una forma moderna e interactiva de administrar tu consumo en servicios públicos.</h5>
                        </Row>
                        <Row className='center' >
                            <Link to='/login' className="btn-large waves-effect waves-light teal lighten-1">Inicia sesión</Link>
                            <br></br>
                            <br></br>
                            <Link to='/registro' className="btn-large waves-effect waves-light teal lighten-1">Registrate</Link>
                        </Row>
                    </Container>
                </div>
                <div className={"parallax " + parallax}>
                    <img src={firstBackImage} alt="Unsplashed background img 1" />
                </div>
            </div>
            <Container>
                <div className="section">
                    <Row>
                        <Col s={12} m={4}>
                            <div className="icon-block">
                                <h2 className="center brown-text"><i className="material-icons">flash_on</i></h2>
                                <h5 className="center">Controla tus servicios públicos</h5>

                                <p className="light">Ten a la mano tu consumo de servicios públicos en tu(s) Hogar(es) siempre que lo necesites, y conoce tu forma de gasto de manera automática o manual, adaptado a tus preferencias.</p>
                            </div>
                        </Col>

                        <Col s={12} m={4}>
                            <div className="icon-block">
                                <h2 className="center brown-text"><i className="material-icons">group</i></h2>
                                <h5 className="center">Pensado para reducir tu consumo</h5>

                                <p className="light">{APP_NAME}, te alerta cuando estás teniendo un desfase en comparación de tu consumo regular, permitiendo detectar aumentos en el consumo de servicios públicos como posibles fugas.</p>
                            </div>
                        </Col>

                        <Col s={12} m={4}>
                            <div className="icon-block">
                                <h2 className="center brown-text"><i className="material-icons">settings</i></h2>
                                <h5 className="center">Easy to work with</h5>

                                <p className="light">Hemos proporcionado documentación detallada, así como ejemplos de código específicos para ayudar a los nuevos usuarios a comenzar. También estamos siempre abiertos a comentarios y podemos responder cualquier pregunta que un usuario pueda tener sobre Materialise.</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
            <FooterPublico />
        </div>
    );
}