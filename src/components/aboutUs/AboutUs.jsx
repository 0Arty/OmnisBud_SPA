import React from 'react';

import s from './AboutUs.module.scss'
import Box from './box/Box';
// images
import time from './../../images/aboutUs/time.svg'
import money from './../../images/aboutUs/money.svg'
import builder from './../../images/aboutUs/builder.svg'
import consultation from './../../images/aboutUs/consultation.svg'
import contract from './../../images/aboutUs/contract.svg'
import exp from '../../images/aboutUs/exp.svg'



const AboutUs = () => {



    return (
        <div className={s.box}>
            <div className={s.content}>
                <Box src={time} title={'Виконуємо роботу максимально швидко'} />
                <Box src={money} title={'У нас приємні ціни'} />
                <Box src={builder} title={'Кваліфіковані робітники'} />
                <Box src={consultation} title={'Проводимо консультації з замовниками'} />
                <Box src={contract} title={'Рахуємо вартість ремонту / будівництва'} />
                <Box src={exp} title={'Маємо великий досвід'} />
            </div>
        </div>
    );
}
export default AboutUs