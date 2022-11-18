import React from 'react';
import s from './ourProjects.module.scss'
import Slider from './slider/Slider';
import { motion } from 'framer-motion';

const OurProjects = () => {

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
    const contentAnimation2 = {
        hidden: {
            x: 500,
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

    return (
        <motion.div className={s.box} id='OurProjects' initial='hidden' whileInView='visible'>
            <motion.span variants={contentAnimation} custom={3}>
                Приклади наших робіт
            </motion.span>
            <motion.div className={s.content} variants={contentAnimation2} custom={4}>
                <Slider />
            </motion.div>
        </motion.div>
    );
}
export default OurProjects;
