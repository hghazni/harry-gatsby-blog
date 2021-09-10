import React from "react";
import scss from './Hero.module.scss';

const Hero = (props) => {
  const {className = ""} = props;
  return (
    <div className={`${scss.hero} ${className}`}>
      <div className={scss.content}>
      <h1 className={scss.title}>Hey It's Harry!</h1>
      <h2 style={{color: "white"}}>I'm a <span className={scss.developer}>UI Developer</span>, <span className={scss.youtuber}>YouTuber</span> and <span className={scss.blogger}>Blogger</span></h2>
    </div>
    </div>
  )
}

export default Hero