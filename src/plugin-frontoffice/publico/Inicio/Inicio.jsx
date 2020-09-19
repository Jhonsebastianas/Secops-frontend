import React from 'react';
import firstBackImage from '../../../assets/images/money-bg.jpg';
import { TopMenu } from '../TopMenu';
import { Link } from "react-router-dom";
import { Row, Container } from 'react-materialize';

export function Inicio() {
    return (
        <div>
            <TopMenu />
            <div id="index-banner" className="parallax-container">
                <div className="section no-pad-bot">
                    <Container>
                        <br></br><br></br>
                        <h1 className="header center teal-text text-lighten-2">Home administrator</h1>
                        <Row className='center' >
                            <h5 className="header col s12 light">Una forma moderna e interactiva de administrar tu inventario.</h5>
                        </Row>
                        <Row className='center' >
                            <Link to='/login' className="btn-large waves-effect waves-light teal lighten-1">Inicia sesión</Link>
                            <br></br>
                            <br></br>
                            <Link to='/registro' className="btn-large waves-effect waves-light teal lighten-1">Registrate</Link>
                        </Row>
                    </Container>
                </div>
                <div className="parallax">
                    <img src={firstBackImage} alt="Unsplashed background img 1" />
                </div>
            </div>
            <div class="container">
                <div class="section">
                <div class="row">
                    <div class="col s12 m4">
                    <div class="icon-block">
                        <h2 class="center brown-text"><i class="material-icons">flash_on</i></h2>
                        <h5 class="center">Speeds up development</h5>

                        <p class="light">We did most of the heavy lifting for you to provide a default stylings that incorporate our custom components. Additionally, we refined animations and transitions to provide a smoother experience for developers.</p>
                    </div>
                    </div>

                    <div class="col s12 m4">
                    <div class="icon-block">
                        <h2 class="center brown-text"><i class="material-icons">group</i></h2>
                        <h5 class="center">User Experience Focused</h5>

                        <p class="light">By utilizing elements and principles of Material Design, we were able to create a framework that incorporates components and animations that provide more feedback to users. Additionally, a single underlying responsive system across all platforms allow for a more unified user experience.</p>
                    </div>
                    </div>

                    <div class="col s12 m4">
                    <div class="icon-block">
                        <h2 class="center brown-text"><i class="material-icons">settings</i></h2>
                        <h5 class="center">Easy to work with</h5>

                        <p class="light">We have provided detailed documentation as well as specific code examples to help new users get started. We are also always open to feedback and can answer any questions a user may have about Materialize.</p>
                    </div>
                    </div>
                </div>

                </div>
            </div>
        </div>
    );
}