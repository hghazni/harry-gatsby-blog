import React from "react"
import scss from './Footer.module.scss';

import Socials from "./../Socials"

export default () => {
  return (
    <footer className={scss.footer}>
      <div className={scss.inner}>
      <p className={scss.copyright}>
        &copy; {new Date().getFullYear()} {"Harry"}
      </p>
      <span id="footer-socials">
        {/*<Socials siteMetadata={siteMetadata} />*/}
      </span>
      </div>
    </footer>
  )
}
