import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
// Importación components plugins
//import RegisterUser from './plugin-registro-usuarios-frontend/components/registro-usuario/RegisterUser';
import RouterPrincipal from './RouterPrincipal';

class App extends Component {
  state = {
    ruta: 'lista', // Formulario
  }
  render() {
    return (
      <RouterPrincipal />
    );
  }
}

export default App;
