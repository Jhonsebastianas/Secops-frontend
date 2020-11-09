import React from 'react';
import { Link } from "react-router-dom";
import { Row, Col, Icon, Footer } from 'react-materialize';
import { APP_NAME } from '../../../constants/Constants';
import styles from './FooterPublico.module.css';

export function FooterPublico() {
    return (
        <Footer
            className={`example ${styles.footerPrincipal}`}
            copyrights={`© 2020 Copyright ${APP_NAME} All Rights Reserved - Versión 1.0`}
            links={<div><h5>Redes sociales</h5>
                <a className={`grey-text text-lighten-3 ${styles.socialLink}`} target="_blank" href="https://www.facebook.com/Arjeware-753778911629883"><Icon small>facebook</Icon></a>
            </div>}
            moreLinks={<a className="grey-text text-lighten-4 right" href="#!">Política de privacidad</a>}
        >
            <Row m={12}>
                <Col m={12}>
                    <h5>{APP_NAME}</h5>
                    <ul>
                        <li>
                            <Link to='nosotros' className={styles.simpleLink}>Acerca de</Link>
                        </li>
                        <li>
                            <Link to='contactanos' className={styles.simpleLink}>Contactanos</Link>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Footer>
    );
}