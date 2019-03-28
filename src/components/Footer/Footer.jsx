import React, { Component } from "react";
import { Link } from "gatsby";
import { Button } from 'react-bootstrap';
import UserLinks from "../UserLinks/UserLinks";
import "./Footer.less";

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
          <Link to="/about">About</Link>
          <div className="d-none">subscribe btn here</div>
          <Button
            href={url}
            variant="outline-warning"
            title="RSS"
          >
            Subscribe
          </Button>
          <UserLinks config={config} labeled />
          <p>
            Based on
            {" "}
            <a href="https://github.com/agap2-ag/gatsby-advanced-starter">
              Gatsby Advanced Starter
            </a>
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
