import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import urljoin from "url-join";
import About from "../components/About/About";
import Breadcrumbs from "../components/Breadcrumbs/Page";
import config from "../../data/SiteConfig";

class AboutPage extends Component {
  render() {
    const pn = "About";
    return (
      <Layout>
        <Helmet title={`${pn} | ${config.siteTitle}`} />
        <Breadcrumbs pageName={pn} rootPath={urljoin(config.siteUrl, config.pathPrefix)} />
        <About />
      </Layout>
    );
  }
}

export default AboutPage;
