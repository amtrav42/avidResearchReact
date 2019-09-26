import React, { Component } from "react";

//Declare a class called Template, it's a prototype of the base react component//
class Template extends Component {
  render(){
    return (
      <div>
        <header>This is our header</header>
        <main>This is our main</main>
        <h1>This is a header</h1>
        <footer>This is our footer</footer>
      </div>
    );
  }
}
export default Template;
