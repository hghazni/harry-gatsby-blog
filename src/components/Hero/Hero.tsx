import React from "react";
import scss from './Hero.module.scss';

const Hero = (props: { className?: "" | undefined; }) => {
  const {className = ""} = props;
  return (
    <div className={`${scss.hero} ${className}`}>
      <div className={scss.content}>
      <div className={scss.heroImage}></div>
       <div className={scss.heroInnerText}>
        <h1 className={scss.title}>Helping people make the world a better place through considered UI, empathy and teaching.</h1>
        <h2 className={scss.subTitle}></h2>
        <div className={scss.heroTags}>
          <button className={`${scss.tag} ${scss.uidev}`}>UI Developer</button>
          <button className={`${scss.tag} ${scss.a11yeng}`}>Accessibility Engineer</button>
          <button className={`${scss.tag} ${scss.youtuber}`}>YouTuber</button>
        </div>
       </div>
    </div>
    </div>
  )
}

export default Hero