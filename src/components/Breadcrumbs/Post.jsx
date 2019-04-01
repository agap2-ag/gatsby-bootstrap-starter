import React, { Component } from "react";
import { Container, Breadcrumb } from 'react-bootstrap';
import urljoin from "url-join";
import { Icon } from '../Icon/Icon.jsx';
import "./Breadcrumbs.less";

class Breadcrumbs extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const category = this.props.post.category;
    const postTitle = this.props.post.title;
    const catName = typeof category == "string" ?
      category.charAt(0).toUpperCase() + category.substring(1) :
      'Unknown';
    return (
      <Container  className="breadcrumbs" fluid>
        <Breadcrumb>
          <Breadcrumb.Item href={this.props.rootPath}>
            <Icon name="home" />
          </Breadcrumb.Item>
          <Breadcrumb.Item
            title={catName + ' category'}
            href={urljoin('/', 'category', category)}
          >
            {catName}
          </Breadcrumb.Item>
          <Breadcrumb.Item
            title={postTitle}
            active
          >
            {postTitle}
          </Breadcrumb.Item>
        </Breadcrumb>
      </Container>
    );
  }
}

export default Breadcrumbs;
