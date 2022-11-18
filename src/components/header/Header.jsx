import React from 'react';
import s from './Header.module.scss'
import List from './List/List';
import Logo from './Logo/Logo';
import { motion } from 'framer-motion';

const Header = () => {
    const bgUrl = `url(${process.env.PUBLIC_URL + "images/header_background_image.png"})`

    const animation = {
        hidden: {
            opacity: 0,
            y: 1000,
            transition: {
                duration: 2,
                delay: 0.6
            }
        },
        visible: {
            y: 0,
            opacity: 1
        }
    }

    return (
        <div className={s.box} style={{ backgroundImage: bgUrl }}>
            <div className={s.container}>
                <div className={s.wrapper}>
                    <Logo />
                    <List />
                </div>
                <motion.div className={s.content} initial='hidden' animate='visible'
                    variants={animation} transition={{ duration: 0.6, delay: 0.4 }}>
                    <span>Професійний ремонт</span>
                    <span>в різних напрямках</span>
                </motion.div>
            </div>

        </div>
    );
}
export default Header;  