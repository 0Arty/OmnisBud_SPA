import React from 'react';
import s from './Box.module.scss'
import { motion } from 'framer-motion';
import { forwardRef } from 'react';


const Box = forwardRef(({ src, title }, ref) => {
    return (
        <div className={s.box}
            ref={ref}
        >
            <img src={src} alt="" />
            <div>
                <span>{title}</span>
            </div>
        </div>
    );
}
)
export default Box;

export const MBox = motion(Box)