import React, { Component } from "react";
import Footer from "../Footer";
import Header from "../Header";
import Main from "../Main";

//Declare a class called Template, it's a prototype of the base react component//
class Template extends Component {
  render(){
    return (
      <div>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    );
  }
}
export default Template;
