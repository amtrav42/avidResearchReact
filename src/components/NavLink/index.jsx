import React, { Component } from "react";
import { Link } from "react-router-dom";
import './styles.scss';

class NavLink extends Component {
  render(){
    const { href, label } = this.props;
    return (
      <Link className='navLink' to={href}>
        <div className='navText'>
          {label}
        </div>
      </Link>
    );
  }
}
export default NavLink;
