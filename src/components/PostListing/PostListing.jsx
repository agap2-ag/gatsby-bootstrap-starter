import React from "react";
import { Link } from "gatsby";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead
      });
    });
    return postList;
  }

  getContainerRows() {
    const postList = this.getPostList();
    const rp = this.props.rootPath;
    const rows = [];
    const colNum = 3;
    postList.map((post, idx) => {
      const tagsTxt = post.tags ? post.tags.join(' | ') : '';

      const col = (
        <Col className="text-center">
          <Card>
            <Card.Img
              variant="top"
              src={post.cover}
            />
            <Card.Body>
              <Card.Title>
                <h3>
                  <Link
                    to={post.path}
                    key={post.title}
                  >
                    {post.title}
                  </Link>
                </h3>
                <p className="text-muted">{post.date.slice(0, 10)}</p>
              </Card.Title>
              <Card.Text>
                <p>{post.excerpt}</p>
                <p className="text-muted">
                  {tagsTxt}
                </p>
              </Card.Text>
              <Button href={rp + post.path} variant="outline-info">Read more</Button>
            </Card.Body>
          </Card>
        </Col>
      );
      if(idx%colNum === 0) {
        rows.push([]); // add a new row
      }
      rows[rows.length-1].push(col);
      return null;
    });
    return rows;
  }

  render() {
    const rows = this.getContainerRows();
    // https://react-bootstrap.github.io/layout/grid/
    return (
      <Container fluid>
        {
          rows.map((r) => (
            <Row className="mt-3">
              {
                r.map(c => c)
              }
            </Row>
          ))
        }
      </Container>
    );
  }
}

export default PostListing;
