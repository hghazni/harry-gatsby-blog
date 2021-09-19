import React from "react";
import scss from './Hero.module.scss';
import spacerooster from '../../assets/images/spacerooster.png';

const Hero = (props: { className?: "" | undefined; }) => {
  const {className = ""} = props;
  return (
    <div className={`${scss.hero} ${className}`}>
      <div className={scss.content}>
      <div className={scss.heroImage}>
        {/* <img src={spacerooster} alt="Space Rooster" /> */}
      </div>
       <div className={scss.heroInnerText}>
        <h1 className={scss.subTitle}></h1>
        <h1 className={scss.title}>UI / Accessibility Engineer</h1>
        <h2 className={scss.subTitle}>I'm a <span className={scss.developer}>UI Developer</span>, <span className={scss.youtuber}>YouTuber</span> and <span className={scss.blogger}>Blogger</span></h2>
       </div>
    </div>
    </div>
  )
}

export default Hero