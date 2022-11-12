import React, { useState, useRef } from 'react';
import s from './Menu.module.scss'
import s2 from './hamburger.module.scss'
import { motion, AnimatePresence } from 'framer-motion';
import classNames from 'classnames';

const Menu = () => {

    const [isOpen, setIsOpen] = useState(false)
    const btn = useRef()
    const stick1 = useRef()
    const stick2 = useRef()
    const stick3 = useRef()

    const openFunc = () => {

        setIsOpen(!isOpen)
    }
    const variableForAnimation = {
        init: {
            x: 1000,
            opacity: 0
        },
        animate: {
            x: 0,
            opacity: 1
        },
        exit: {
            x: 1000,
            opacity: 0,
        }
    }
    return (


        <div className={s.box}>
            <div className={s2.menu_wrapper}
                onClick={() => { openFunc() }}
            >
                <div ref={btn}
                    className={classNames(s2.hamburger_menu, { [s2.animate]: isOpen })}>
                </div>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div className={s.list}
                        variants={variableForAnimation}
                        initial={'init'}
                        animate={'animate'}
                        exit={'exit'}
                        transition={{ duration: 0.5 }}


                    >
                        <ul>
                            <li>Про нас</li>
                            <li>Наші роботи</li>
                            <li>Контакти</li>
                            <li>Ціни</li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>


    );
}
export default Menu;