import { motion } from 'framer-motion';
import React from 'react';
import s from './Logo.module.scss'

const Logo = () => {
    return (
        
        
        <motion.div className={s.box}
            initial={{x:-400,opacity:0}}
            animate={{x:0,opacity:1}}
            transition={{duration:0.5, deley:0.3}}
        >
            <span className={s.logo}>OmnisBud</span>
            <span className={s.title}>Будуємо, ремонтуємо, створюємо</span>
        </motion.div>
    );
}
export default Logo;
