import React from "react";
import Helmet from "react-helmet";
import { Container } from "react-bootstrap";
import { graphql } from "gatsby";
import urljoin from "url-join";
import Layout from "../layout";
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

class Index extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <Layout>
        <Helmet title={config.siteTitle} />
        <SEO />
        <Container className="text-center my-3">
          <h1>Browse Published Content</h1>
          <hr />
        </Container>
        <PostListing
          rootPath={urljoin(config.siteUrl, config.pathPrefix)}
          postEdges={postEdges}
        />
      </Layout>
    );
  }
}

export default Index;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [fields___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            category
            date
          }
        }
      }
    }
  }
`;
