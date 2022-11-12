import React from 'react';
import s from './Header.module.scss'
import List from './List/List';
import Logo from './Logo/Logo';

const Header = () => {
    return (
        <div className={s.box}
            style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "images/header_background_image.png"})` }}
        >
            <div className={s.container}>
                <div className={s.wrapper}>
                    <Logo />
                    <List />
                </div>
                <div className={s.content}>
                    <span>Професійний ремонт</span>
                    <span>в різних напрямках</span>
                </div>
            </div>

        </div>
    );
}
export default Header;  