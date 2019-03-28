import React, { Component } from "react";
import { Container, Breadcrumb } from 'react-bootstrap';
import { Icon } from '../Icon/Icon.jsx';
import "./Breadcrumbs.less";

class Breadcrumbs extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { config } = this.props;
    return (
      <Container  className="breadcrumbs" fluid>
        <Breadcrumb>
          <Breadcrumb.Item href={this.props.rootPath}>
            <Icon name="home" />
          </Breadcrumb.Item>
          <Breadcrumb.Item
            title={this.props.pageName}
            active
          >
            {this.props.pageName}
          </Breadcrumb.Item>
        </Breadcrumb>
      </Container>
    );
  }
}

export default Breadcrumbs;
