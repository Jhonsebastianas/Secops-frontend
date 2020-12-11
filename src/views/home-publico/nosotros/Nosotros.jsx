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
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit
              Deleniti amet ab <strong>necessitatibus!</strong> Libero necessitatibus accusamus</p>
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