import React, { Component } from "react";
import { Link } from "gatsby";
import UserLinks from "../UserLinks/UserLinks";
import LogoReact from '../../../static/logos/logo_react.svg';
import LogoGatsby from '../../../static/logos/logo-48.png';
import "./Header.less";

class Header extends Component {
  render() {
    const { config } = this.props;
    return (
      <header className="header sticky-top">
        <img src={LogoGatsby} className="logo-circular" alt="gatsby" />
        <img src={LogoReact} className="logo-circular logo-rotate" alt="logo" />
        <h2>Gatsby React!!</h2>
        <UserLinks config={config} labeled />
      </header>
    );
  }
}

export default Header;
