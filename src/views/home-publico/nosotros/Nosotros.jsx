import React from 'react';
import styles from './Nosotros.module.css';
import { Row, Col, Container, Icon } from 'react-materialize';

//Imagenes
import nosotros from '../../../assets/images/nosotros.svg';


import { TopMenu } from '../menu/TopMenu';
import { FooterPublico } from '../../../components/common/footer/FooterPublico';

export function  Nosotros (){

  
    const { centrar, colorH4, imagenSvg, posicionImagen, botonEmpezar, icono } = styles;

    return (
      <div>
        <TopMenu />

        <Row className={imagenSvg}>

          <Col s={12} m={8} >

            <Container className={centrar}>
              <h4 className={colorH4}>Monitorea tus servicios</h4>
              <p>Ten a la mano tu consumo de servicios públicos en tu(s) Hogar(es) siempre que lo necesites, y conoce tu forma de gasto de manera automática o manual, adaptado a tus preferencias.</p>
              <a href="/registro" className={botonEmpezar}>Empieza Ahora
              {/*<Icon className={icono}> arrow_forward</Icon>*/}
              </a>
            </Container>
          </Col>
          <Col s={12} m={4} className={posicionImagen}>
            <img src={nosotros} className='responsive-img' alt="" />
          </Col>
        </Row>

        <FooterPublico />
      </div>

    )
  
}