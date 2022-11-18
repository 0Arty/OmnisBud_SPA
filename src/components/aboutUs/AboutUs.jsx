import React from 'react';
import s from './AboutUs.module.scss'
import { MBox } from './box/Box';
// images
import time from './../../images/aboutUs/time.svg'
import money from './../../images/aboutUs/money.svg'
import builder from './../../images/aboutUs/builder.svg'
import consultation from './../../images/aboutUs/consultation.svg'
import contract from './../../images/aboutUs/contract.svg'
import exp from '../../images/aboutUs/exp.svg'
import { motion } from 'framer-motion';

const contentAnimation = {
    hidden: {
        x: -200,
        opacity: 0,
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition: {
            delay: custom * 0.2,
            duration: 0.3
        }
    }),

}

const AboutUs = () => {
    return (

        <motion.div className={s.box} id='AboutUs'
            initial='hidden'
            whileInView='visible'
        >
            <div className={s.content}
            // variants={contentAnimation} 

            >
                <MBox src={time} title={'Виконуємо роботу максимально швидко'}
                    variants={contentAnimation} custom={1}
                />
                <MBox src={money} title={'У нас приємні ціни'}
                    variants={contentAnimation} custom={2}
                />
                <MBox src={builder} title={'Кваліфіковані робітники'}
                    variants={contentAnimation} custom={3}
                />
                <MBox src={consultation} title={'Проводимо консультації з замовниками'}
                    variants={contentAnimation} custom={4}
                />
                <MBox src={contract} title={'Рахуємо вартість ремонту / будівництва'}
                    variants={contentAnimation} custom={5} />
                <MBox src={exp} title={'Маємо великий досвід'}
                    variants={contentAnimation} custom={6}
                />
            </div>
        </motion.div>
    );
}
export default AboutUs