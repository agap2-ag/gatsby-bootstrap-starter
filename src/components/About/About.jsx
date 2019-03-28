import React, { Component } from "react";
import { Container, Media } from 'react-bootstrap';
import "./About.less";

class About extends Component {
  render() {
    return (
      <Container className="about">
        <h1>
          Edit About component or pages/about.jsx to include your information.
        </h1>
        <ul className="list-unstyled">
          <Media as="li">
            <img
              width={64}
              height={64}
              className="mr-3"
              src="https://via.placeholder.com/64x64/00000/ffdd00?text==D"
              alt="Generic placeholder"
            />
            <Media.Body>
              <h5>List-based media object</h5>
              <p>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                fringilla. Donec lacinia congue felis in faucibus.
              </p>
            </Media.Body>
          </Media>

          <Media as="li">
            <img
              width={64}
              height={64}
              className="mr-3"
              src="https://via.placeholder.com/64x64/00000/ffdd00?text=;)"
              alt="Generic placeholder"
            />
            <Media.Body>
              <h5>List-based media object</h5>
              <p>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                fringilla. Donec lacinia congue felis in faucibus.
              </p>
            </Media.Body>
          </Media>

          <Media as="li">
            <img
              width={64}
              height={64}
              className="mr-3"
              src="https://via.placeholder.com/64x64/00000/ffdd00?text==O"
              alt="Generic placeholder"
            />
            <Media.Body>
              <h5>List-based media object</h5>
              <p>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                fringilla. Donec lacinia congue felis in faucibus.
              </p>
            </Media.Body>
          </Media>
        </ul>
      </Container>
    );
  }
}

export default About;
