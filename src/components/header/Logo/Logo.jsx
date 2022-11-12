import React from 'react';
import s from './Logo.module.scss'

const Logo = () => {
    return (
        <div className={s.box}>
            <span className={s.logo}>OmnisBud</span>
            <span className={s.title}>Будуємо, ремонтуємо, створюємо</span>
        </div>
    );
}
export default Logo;
