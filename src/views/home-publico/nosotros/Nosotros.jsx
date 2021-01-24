import React from 'react';
import './Nosotros.css';
import { Row, Col, Container } from 'react-materialize';
import nosotros from '../../../assets/images/nosotros.svg';
import { TopMenu } from '../menu/TopMenu';
import { FooterPublico } from '../../../components/common/footer/FooterPublico';

export function Nosotros() {

  return (
    <div>
      <TopMenu />

      <Row className="imagenSvg">

        <Col s={12} m={8} >

          <Container className="centrar">
            <h4 className="colorH4">Monitorea tus servicios</h4>
            <p>Ten a la mano tu consumo de servicios públicos en tu(s) hogar(es)
            siempre que lo necesites, y conoce tu forma de gasto de manera
              automática o manual, adaptado a tus preferencias.</p>
            <a href="/registro" className="botonEmpezar">Empieza Ahora</a>
          </Container>
        </Col>
        <Col s={12} m={4} className="posicionImagen">
          <img src={nosotros} className='responsive-img' alt="nosotros" />
        </Col>
      </Row>
      <Row className="quienesSomos">

        <Col s={12} m={4}>

        </Col>
        <Col s={12} m={8}>
          <h4 className="tituloH4">Quienes somos</h4>
          <p>
            SECOPS Nace de la necesidad de los habitantes de Medellín de conocerse el gasto de los 
            sus servicios públicos (Agua y Energía) pudiendo asi llevar un mejor control de los mismos
            y familiarizarce con las mediciones como metros cúbicos o kilovatios.
          </p>
        </Col>

      </Row>

      <Row className="centrar">
        <h4 className="tituloH4">Nuestro Equipo</h4>
        <Col s={12} m={4}>

        </Col>
        <Col s={12} m={4}>

        </Col>
        <Col s={12} m={4}>

        </Col>
      </Row>

      <FooterPublico />
    </div>

  )

}