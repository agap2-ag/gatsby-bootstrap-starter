import React, { Component } from "react";
import { Container, Breadcrumb } from 'react-bootstrap';
import { Icon } from '../Icon/Icon.jsx';
import "./Breadcrumbs.less";

class Breadcrumbs extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container  className="breadcrumbs" fluid>
        <Breadcrumb>
          <Breadcrumb.Item href={this.props.rootPath}>
            <Icon name="home" />
          </Breadcrumb.Item>
          <Breadcrumb.Item
            title={this.props.post.category_id + ' category'}
            active
          >
            {this.props.post.category_id}
          </Breadcrumb.Item>
          <Breadcrumb.Item
            title={this.props.post.title}
            active
          >
            {this.props.post.title}
          </Breadcrumb.Item>
        </Breadcrumb>
      </Container>
    );
  }
}

export default Breadcrumbs;
