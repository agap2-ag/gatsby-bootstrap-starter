import React, { Component } from "react";
import { Link } from "gatsby";
import UserLinks from "../UserLinks/UserLinks";
import { Button } from 'react-bootstrap';
import "./Footer.css";

class Footer extends Component {
  render() {
    const { config } = this.props;
    const url = config.siteRss;
    const { copyright } = config;
    if (!copyright) {
      return null;
    }

    return (
      <footer className="footer fixed-bottom">
        <div className="notice-container">
          <p>{copyright}</p>
          <div className="d-none">subscribe btn here</div>
          <Link to={url}>
            <Button variant="outline-warning">Subscribe</Button>
          </Link>
          <UserLinks config={config} labeled />
          <p>
            Based on{" "}
            <a href="https://github.com/Vagr9K/gatsby-advanced-starter">
              Gatsby Advanced Starter
            </a>.
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
