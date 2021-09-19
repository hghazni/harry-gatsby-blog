import React from "react"
import { navigate } from "gatsby"
import { IPostRequest } from "./../../interfaces/requests.interface"
import scss from './Header.module.scss';
import HeaderMenu from '../Header/Menu/';

import Socials from "./../Socials"

export default ({ siteMetadata }: IPostRequest["site"]) => {
  return (
    <header className={scss.header}>
      <div className={scss.content}>
      <h1 role="button" tabIndex={0} className={scss.logo} onClick={() => navigate("/")}>HEGA</h1>
      <div>
        {/*<Socials siteMetadata={siteMetadata} />*/}
        <HeaderMenu />
      </div>
      </div>
    </header>
  )
}
