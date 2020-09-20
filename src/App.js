import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import RouterPrincipal from './RouterPrincipal';

class App extends Component {
  constructor() {
    super();
    this.state = {
      login: false
    }
  }
  render() {
    return (
      <RouterPrincipal />
    );
  }
}

export default App;
