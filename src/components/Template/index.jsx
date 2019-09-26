import React, { Component } from "react";
import Footer from "../Footer";

//Declare a class called Template, it's a prototype of the base react component//
class Template extends Component {
  render(){
    return (
      <div>
        <header>This is our header</header>
        <main>This is our main</main>
        <h1>This is a header</h1>
        <Footer/>
      </div>
    );
  }
}
export default Template;
