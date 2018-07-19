import React, { Component } from 'react';
import SignatureCanvas from 'react-signature-canvas'
import { Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Collapse, Button } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';

class App extends Component {
  constructor(props) {
    super(props)

    this.sigCanvas;
    this.btnClica = this.btnClica.bind(this);
  }

  btnClica() {
    // this.sigCanvas.clear();
    const data = this.sigCanvas.toDataURL("image/jpeg");
    alert(data);
    console.log(data);
  }
  render() {
    return (
      <div className="App">
        <HeaderComponent></HeaderComponent>
        <SignatureCanvas ref={(ref) => {this.sigCanvas = ref }} penColor="green" canvasProps={{ width: 200, height: 500, className: 'sigCanvas' }} />
        <Button color="primary" onClick={ this.btnClica }>Clica Aqui</Button>
      </div>
    );
  }
}

export default App;
