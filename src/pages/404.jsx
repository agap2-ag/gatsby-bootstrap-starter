import React from "react";
import Helmet from "react-helmet";
import { Container, Media } from 'react-bootstrap';
import Layout from "../layout";
import config from "../../data/SiteConfig";

export default () => (
  <Layout>
    <Container>
      <Helmet title={`Eureka!? ${config.siteTitle}`} />
      <h1>Ooops...</h1>
      <h2>Should something be here?</h2>
      <Media>
        <Media.Body>
          <h5>Media Heading</h5>
          <p>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
            ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
            tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
            Donec lacinia congue felis in faucibus.
          </p>
        </Media.Body>
        <img
          width={64}
          height={64}
          className="ml-3"
          src="https://via.placeholder.com/64x64/00000/ffdd00?text==D"
          alt="Generic placeholder"
        />
      </Media>
    </Container>
  </Layout>
)
;
