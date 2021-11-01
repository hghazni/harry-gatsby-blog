import scss from './Card.module.scss';
import React, { useState } from 'react';
import { CardProps } from './Card.types';

const Card = (props: CardProps) => {
    const {className = '', postData} = props;
    const {title, description, date, timeToRead, thumbnail} = postData;
    const [hover, isHovered] = useState(false);

    return (
        <button
        onMouseEnter={() => isHovered(true)}
        onMouseLeave={() => isHovered(false)}
        className={`${scss.card} ${className}`} 
        style={{backgroundImage: `url(${thumbnail})`}}>
            <div className={scss.content}>
                <h2 className={scss.title}>{title}</h2>
                {hover && (<p className={scss.description}>{description}</p>)}
                <p className={scss.date}>{date}</p>
                <p className={scss.timeToRead}>{timeToRead} min to read</p>
            </div>
        </button>
    )
}

export default Card;