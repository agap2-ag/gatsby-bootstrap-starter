import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import About from "../components/About/About";
import Breadcrumbs from "../components/Breadcrumbs/Page";
import config from "../../data/SiteConfig";

class AboutPage extends Component {
  pn = "About";

  render() {
    return (
      <Layout>
        <Helmet title={`${this.pn} | ${config.siteTitle}`} />
        <Breadcrumbs pageName={this.pn} />
        <About />
      </Layout>
    );
  }
}

export default AboutPage;
