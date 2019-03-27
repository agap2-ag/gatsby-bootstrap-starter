import React from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import config from "../../data/SiteConfig";

export default () => (
  <Layout>
    <div className="index-container">
      <Helmet title={'Eureka! | ' + config.siteTitle} />
      <h1>Ooops...</h1>
      <h2>Should something be here?</h2>
    </div>
  </Layout>
);
