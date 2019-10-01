import React, { Component } from "react";

class NavLink extends Component {
  render(){
    const { href, label } = this.props;
    return (
      <a href={href}>
        <div>
          {label}
        </div>
      </a>
    );
  }
}
export default NavLink;
