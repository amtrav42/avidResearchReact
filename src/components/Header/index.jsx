import React, { Component } from "react";
import Nav from "../Nav";
import './styles.scss';

class Header extends Component {
  render(){
    return (
      <header className='container'>
        <h1 className='header'>Welcome to Avid Research</h1>
        <Nav/>
      </header>
    );
  }
}
export default Header;
