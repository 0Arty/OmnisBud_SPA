import React from 'react';
import s from './List.module.scss'
import Menu from './Menu/Menu';

const List = () => {
    return (
        <div className={s.box}>
            <div className={s.list}>
                <ul>
                    <li>Про нас</li>
                    <li>Наші роботи</li>
                    <li>Контакти</li>
                    <li>Ціни</li>
                </ul>
            </div>
            <div className={s.menu}>
                <Menu />
            </div>
        </div>
    );
}
export default List;
