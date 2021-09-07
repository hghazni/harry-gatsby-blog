import React from "react"
import { navigate } from "gatsby"
import { IPostRequest } from "./../../interfaces/requests.interface"
import scss from './Header.module.scss';
import HeaderMenu from '../Header/Menu/';

import Socials from "./../Socials"

export default ({ siteMetadata }: IPostRequest["site"]) => {
  return (
    <header className={scss.header}>
      <h1 onClick={() => navigate("/")}>{siteMetadata.title}</h1>
      <div>
        {/*<Socials siteMetadata={siteMetadata} />*/}
        <HeaderMenu />
      </div>
    </header>
  )
}
