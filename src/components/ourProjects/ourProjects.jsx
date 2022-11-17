import React from 'react';
import s from './ourProjects.module.scss'
import Slider from './slider/Slider';

const OurProjects = () => {

    return (
        <div className={s.box}>
            <span>Приклади наших робіт</span>
            <div className={s.content}>
                <Slider />
            </div>
        </div>
    );
}
export default OurProjects;
