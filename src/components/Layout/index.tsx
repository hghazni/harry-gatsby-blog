import React from "react";
import { ISiteMetadata } from "./../../interfaces/requests.interface";
import scss from './Layout.module.scss';
import Head from "./../Head";
import Header from "./../Header";
import Footer from "./../Footer";

export default ({
  children,
  siteMetadata,
  title,
}: {
  children: any
  siteMetadata: ISiteMetadata
  title: string
}) => (
  <div className={scss.layout}>
    <Head siteMetadata={siteMetadata} pageName={title}>
      <title>{title}</title>
    </Head>
    <Header siteMetadata={siteMetadata} />
    {children}
    <Footer siteMetadata={siteMetadata} />
  </div>
)
