import React from 'react';
import s from './Box.module.scss'

const Box = ({ src, title }) => {
    return (
        <div className={s.box}>
            <img src={src} alt="" />
            <div>
                <span>{title}</span>
            </div>
        </div>
    );
}
export default Box;
