import React from "react"
import { IHomeRequest } from "./../../interfaces/requests.interface"
import scss from './Footer.module.scss';

import Socials from "./../Socials"

export default ({ siteMetadata }: IHomeRequest["site"]) => {
  return (
    <footer className={scss.footer}>
      <p className={scss.copyright}>
        &copy; {new Date().getFullYear()} {siteMetadata.author}
      </p>
      <span id="footer-socials">
        {/*<Socials siteMetadata={siteMetadata} />*/}
      </span>
    </footer>
  )
}
