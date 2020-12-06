import React, { Component } from 'react';
import styles from './Nosotros.module.css';
import { Row, Col, Container, Button, Icon } from 'react-materialize';

//Imagenes
import nosotros from '../../../assets/images/nosotros.svg';


import { TopMenu } from '../menu/TopMenu';
import { FooterPublico } from '../../../components/common/footer/FooterPublico';

export default class Nosotros extends Component {

  render() {

    const { centrar, colorH4, imagenSvg, posicionImagen, fondoBoton } = styles;

    return (
      <div>
        <TopMenu />

        <Row className={imagenSvg}>

          <Col s={12} m={8} >

            <Container className={centrar}>
              <h4 className={colorH4}>Monitorea tus servicios</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit
              Deleniti amet ab <strong>necessitatibus!</strong> Libero necessitatibus accusamus</p>
              <Button  node="button" waves="light" className={fondoBoton}>
                Empieza ahora
                <Icon right>arrow_forward</Icon>
              </Button>
            </Container>
          </Col>
          <Col s={12} m={4} className={posicionImagen}>
            <img src={nosotros} className='responsive-img' alt="" />
          </Col>
        </Row>

        <FooterPublico />
      </div>

    );
  }
}