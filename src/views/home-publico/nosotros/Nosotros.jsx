import React, { Component } from 'react';
import styles from './Nosotros.module.css';
import { Parallax, Container,  Row, Col } from 'react-materialize';

//Imagen nosotros
import nosotros from '../../../assets/images/nosotros.svg';

import { TopMenu } from '../menu/TopMenu';

export default class Nosotros extends Component {

  render() {

    const { centrar, colorH4 } = styles;

    return (
      <div>
        <TopMenu />

        
          <h4 className={colorH4}>Acerca de Nosotros</h4>
          <Row>
            <Col s={6} className={centrar}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Deleniti amet ab <strong>necessitatibus!</strong> Libero necessitatibus accusamus
                   repellendus quam aperiam, eveniet quisquam eos, ipsam incidunt 
                   laudantium nesciunt obcaecati aspernatur saepe laboriosam praesentium.</p>
            </Col>
            <Col s={6}>
              <img src={nosotros} className='responsive-img' alt=""/>
            </Col>
          </Row>
           <Row>
             <Col s={12}>
             
             </Col>
           </Row>
      </div>

    );
  }
}