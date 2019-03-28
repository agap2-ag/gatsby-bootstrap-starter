import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import _ from "lodash";

class PostTags extends Component {
  render() {
    const { tags } = this.props;
    return (
      <div className="post-tag-container">
        {tags &&
          tags.map(tag => (
            <Button
              variant="outline-secondary"
              key={tag}
              href={`/tags/${_.kebabCase(tag)}`}
              title={tag}
            >
              {tag}
            </Button>
          ))}
      </div>
    );
  }
}

export default PostTags;
