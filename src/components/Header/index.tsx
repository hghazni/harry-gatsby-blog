import React from "react"
import { navigate } from "gatsby"
import { IPostRequest } from "./../../interfaces/requests.interface"
import scss from './Header.module.scss';

import Socials from "./../Socials"

export default ({ siteMetadata }: IPostRequest["site"]) => {
  return (
    <header id="header">
      <h1 onClick={() => navigate("/")}>{siteMetadata.title}</h1>
      <span>
        <Socials siteMetadata={siteMetadata} />
      </span>
      <h1 className={scss.test}>test lolololol</h1>
    </header>
  )
}
