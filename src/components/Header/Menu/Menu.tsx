import { HeaderMenuProps } from "./Menu.types";
import scss from './Menu.module.scss';
import React from 'react';

const HeaderMenu: React.FC<HeaderMenuProps> = (props: HeaderMenuProps): any => {
    const { className = ""  } = props;

    return (
        <div className={scss.menu}>
            <ul className={scss.list}>
                <li className={scss.item}><a className={scss.link} href="#About">About</a></li>
                <li className={scss.item}><a className={scss.link} href="#Contact">Contact</a></li>
                <li className={scss.item}><a className={scss.link} href="#Blog">Blog</a></li>
            </ul>
        </div>
    )
}

export default HeaderMenu;