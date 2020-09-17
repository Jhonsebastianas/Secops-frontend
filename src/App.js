import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// Importar components generales
import { Container } from 'react-materialize'
// Importación components plugins
import RegisterUser from './plugin-registro-usuarios-frontend/components/registro-usuario/RegisterUser';

class App extends Component {
  state = {
    ruta: 'lista', // Formulario
  }
  render() {
    return (
      <Container>
        <RegisterUser />
      </Container>
    );
  }
}

export default App;
