import React from 'react';
import { Link } from 'react-scroll';
import s from './List.module.scss'
import Menu from './Menu/Menu';
import { motion } from 'framer-motion';
const List = () => {
    return (
        <div className={s.box}>
            <div className={s.list}>

                <motion.ul
                    initial={{x:400,opacity:0}}
                    animate={{x:0,opacity:1}}
                    transition={{duration:0.5, delay:0.8}}
                >
                    <li>
                        <Link to='AboutUs' spy={true} offset={-50}
                            smooth={true} duration={500}
                        >Про нас</Link>
                    </li>
                    <li>
                        <Link to='OurProjects' spy={true} offset={-20}
                            smooth={true} duration={500}
                        >Наші роботи</Link>
                    </li>
                    <li>
                        <Link to='ContactMenu' spy={true} offset={-50}
                            smooth={true} duration={500}
                        >Контакти</Link>
                    </li>
                    <li>
                        <Link to='ContactMenu' spy={true} offset={-50}
                            smooth={true} duration={500}
                        >Ціни</Link>
                    </li>
                </motion.ul>
            </div>
            <div className={s.menu}>
                <Menu />
            </div>
        </div>
    );
}
export default List;
