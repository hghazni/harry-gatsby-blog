import React from "react";
import { ISiteMetadata } from "./../../interfaces/requests.interface";
import scss from './Layout.module.scss';
import Head from "./../Head";
import Header from "./../Header";
import Footer from "./../Footer";
import { LayoutProps } from "./Layout.types";


const Layout = (props: LayoutProps) => {
const { title, children } = props;

  return (
    <div className={scss.layout}>
      <Head pageName={title}>
        <title>{title}</title>
      </Head>
      <Header/>
      <main className={scss.main}>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout;