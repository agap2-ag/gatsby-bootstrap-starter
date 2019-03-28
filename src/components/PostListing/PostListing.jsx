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
    const rows = [];
    const colNum = 3;
    postList.map((post, idx) => {
      const col = (
        <Col className="text-center">
          <Card>
            <Card.Img
              variant="top"
              src={'https://via.placeholder.com/64x64/00000/ffdd00?text=' + (idx+1)}
            />
            <Card.Body>
              <Card.Title>
                <Link
                  to={post.path}
                  key={post.title}
                >
                  {post.title}
                </Link>
              </Card.Title>
              <Card.Text>
                {post.title} content.
              </Card.Text>
              <Button href={post.path} variant="primary">Read more</Button>
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
