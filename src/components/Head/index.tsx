import React from "react"
import { Helmet } from "react-helmet"
import { HeadProps } from "./Head.types"


const Head = (props: HeadProps) => {
  const { author = "me", pageName, siteUrl = "/", description = "a site about me", themeColor } = props;
  return (
    <Helmet htmlAttributes={{ lang: "en" }}>
    <meta charSet="utf-8" />
    <title>
      {author} | {pageName}
    </title>
    <link rel="canonical" href={siteUrl} />
    <meta name="description" content={description} />
    <meta name="theme-color" content={themeColor || "#fff"} />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
  </Helmet>
  )
}

export default Head;
