import React, { Component } from "react";
import { Button, ButtonToolbar } from 'react-bootstrap';
import { Icon } from '../Icon/Icon.jsx';
import "./UserLinks.less";

class UserLinks extends Component {
  getLinkElements() {
    const { userLinks } = this.props.config;
    const { labeled } = this.props;
    return userLinks.map(link => (
      <Button
        variant="outline-primary"
        key={link.label}
        href={link.url}
        title={labeled ? link.label : ""}
      >
        <Icon name={link.iconClassName} brand={link.iconBrand} />
      </Button>
    ));
  }

  render() {
    const { userLinks } = this.props.config;
    if (!userLinks) {
      return null;
    }
    return (
      <ButtonToolbar className="user-links">
        {this.getLinkElements()}
      </ButtonToolbar>
    );
  }
}

export default UserLinks;
