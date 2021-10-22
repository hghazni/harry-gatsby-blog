import React from "react";
import "./../../assets/styles/style.scss";
import { graphql, StaticQuery } from "gatsby";

import Layout from "../../components/Layout"
import Posts from "../../components/Posts"

const Blog = () => {
  return (
    <StaticQuery query={graphql`
    query BlogPageQuery {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            excerpt(pruneLength: 100)
            timeToRead
            fields {
              slug
            }
            frontmatter {
              title
              date(formatString: "MMMM DD, YYYY")
              featuredImage {
                childImageSharp {
                  fluid(maxWidth: 400) {
                    src
                  }
                }
              }
            }
          }
        }
      }
      site {
        siteMetadata {
          author
          authorDescription
          description
          title
          socials {
            linkedin
            twitter
            github
          }
          themeColor
          siteUrl
        }
      }
      authorPicture: file(relativePath: { eq: "author.jpg" }) {
        childImageSharp {
          fixed(width: 40, height: 40) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `}
  render={data => (
          <Layout title="Blog">
            {/*<About authorPicture={authorPicture} siteMetadata={siteMetadata} />*/}
            <Posts content={data.allMarkdownRemark.edges.map(mod => {
    const {
      frontmatter: {
        title,
        date,
        featuredImage: { childImageSharp },
      },
      timeToRead,
      excerpt,
      fields: { slug },
    } = mod.node
    return { title, timeToRead, date, excerpt, slug, childImageSharp }
  })} />
  </Layout>
  )}
  />
  )
}

export default Blog;
