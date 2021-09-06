import { HeaderMenuProps } from "./Menu.types";
import scss from './Menu.module.scss';
import React from 'react';

const HeaderMenu: React.FC<HeaderMenuProps> = (props: HeaderMenuProps): any => {
    const { className = ""  } = props;

    return (
        <div className={scss.menu}>
            <ul className={scss.list}>
                <li className={scss.item}>About</li>
                <li className={scss.item}>Contact</li>
            </ul>
        </div>
    )
}

export default HeaderMenu;