import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "./../assets/styles/style.scss";
import { graphql } from "gatsby";
import { IHomeRequest } from "./../interfaces/requests.interface";

import Layout from "./../components/Layout"
import Posts from "./../components/Posts"
import Hero from "../components/Hero"
import Blog from "./Blog";
import Contact from "./Contact";
import About from "./About";

const IndexPage = ({ data }: { data: IHomeRequest }) => {
  // Helper to organize useful data in request
  const content = data.allMarkdownRemark.edges.map(mod => {
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
  })
  const { siteMetadata } = data.site

  return (
    <BrowserRouter>
      <Layout siteMetadata={siteMetadata} title="Homepage">
        {/*<About authorPicture={authorPicture} siteMetadata={siteMetadata} />*/}
        <Hero />
        <Switch>
          <Route exact path="/" />
          <Route path="/about" component={About} />
          <Route path="/blog" component={Blog} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Posts content={content} />
      </Layout>
    </BrowserRouter>
  )
}

export const pageQuery = graphql`
  query HomePageQuery {
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
`

export default IndexPage
