import classNames from 'classnames';
import React from 'react';
import s from './Contactinfo.module.scss'

const Contactinfo = () => {
    return (
        <div className={s.box}>
            <span className={s.heading}>Як вийти з нами на зв'язок?</span>
            <span className={classNames(s.title, s.text)}> Залиште заявку і наш менеджер вийде з 
            вами на зв’язок в найближчий час або напишіть листа нам на електронну пошту.</span>
            <span className={classNames(s.subtitle, s.text)}>Наші контакти:</span>
            <ul className={classNames(s.text)}>
                <li>+380931234567</li>
                <li>+380931234567</li>
                <li>example@gmail.com</li>
            </ul>
        </div>
    );
}

export default Contactinfo;