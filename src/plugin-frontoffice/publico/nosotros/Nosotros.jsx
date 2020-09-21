import React, { Component } from 'react';
import styles from './Nosotros.module.css';
import { Parallax, Container, Col } from 'react-materialize';

import { TopMenu } from '../menu/TopMenu';


export default class Nosotros extends Component {
  render() {
    const { tamano } = styles;
    return (
      <div>
        <TopMenu />
        <Parallax
          image={<img alt=""
            src="https://mijobrands.com/wp-content/uploads/2018/07/brainstorming-d48e541c.jpg" />}
          options={{
            responsiveThreshold: 0
          }} />
        <div className="section white centrar">
          <Container>
            <hr className={tamano} />
            <h2 className="header alinear">NOSOTROS</h2>
            <hr className=" tamano" />
            <p className="grey-text text-darken-3 lighten-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Numquam quia inventore, ea molestiae id nisi dolore neque,
              saepe quibusdam alias rerum! Incidunt molestias dolores sint
              in praesentium, omnis consequatur ipsum.
                </p>
            <p className="grey-text text-darken-3 lighten-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Numquam quia inventore, ea molestiae id nisi dolore neque,
              saepe quibusdam alias rerum! Incidunt molestias dolores sint
              in praesentium, omnis consequatur ipsum.
                </p>
            <p className="grey-text text-darken-3 lighten-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Numquam quia inventore, ea molestiae id nisi dolore neque,
              saepe quibusdam alias rerum! Incidunt molestias dolores sint
              in praesentium, omnis consequatur ipsum.
                </p>

            <div className="row containerMain">
              <div className="col l6">
                <h4>Visión</h4>
                <div className="col l4">
                  <div className="imgContent">
                    <ul>
                      <h5>Información</h5>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        met quae recusandae fugit ipsam eos distinctio nam id
                        ias magnam, dolore libero placeat commodi saepe cum ipsum
                        it molestiae odio cupiditate!
                           </p>
                    </ul>
                  </div>
                </div>
              </div>

              <Col l={6}>
                <h4>Misión</h4>
                <div className="col l4">
                  <div className="imgContent" id="limon">
                    <ul>
                      <h5>Información</h5>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        met quae recusandae fugit ipsam eos distinctio nam id
                        ias magnam, dolore libero placeat commodi saepe cum ipsum
                        it molestiae odio cupiditate!
                           </p>
                    </ul>
                  </div>
                </div>
              </Col>
            </div>
          </Container>
        </div>
      </div>
    );
  }
}