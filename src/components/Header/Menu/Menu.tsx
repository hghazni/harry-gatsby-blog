import scss from './Menu.module.scss';
import React from 'react';
import { Link } from 'gatsby';
import About from '../../About';

const HeaderMenu = () => {

    return (
        <div className={scss.menu}>
            <ul className={scss.list}>
                <li className={scss.item}><Link to={"/About"} className={scss.link}>About</Link></li>
                <li className={scss.item}><Link to={"/Contact"} className={scss.link}>Contact</Link></li>
                <li className={scss.item}><Link to={"/Blog"} className={scss.link}>Blog</Link></li>
            </ul>
        </div>
    )
}

export default HeaderMenu;