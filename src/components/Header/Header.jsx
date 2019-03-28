import React, { Component } from "react";
import { Link } from "gatsby";
import urljoin from "url-join";
import UserLinks from "../UserLinks/UserLinks";
import LogoReact from '../../../static/logos/logo_react.svg';
import LogoGatsby from '../../../static/logos/logo-1024.png';
import "./Header.less";
import { IconWrapped } from '../Icon/Icon.jsx';

class Header extends Component {
  render() {
    const { config } = this.props;
    return (
      <header className="header sticky-top">
        <Link to={config.pathPrefix}>
          <img src={LogoGatsby} className="logo-circular" alt="Gatsby" />
          <IconWrapped name="bootstrap" brand="1" />
          <img src={LogoReact} className="logo-circular logo-rotate" alt="React" />
          <h2>Gatsby-Bootstrap React!</h2>
        </Link>
        <UserLinks config={config} labeled />
      </header>
    );
  }
}

export default Header;
