import React from 'react';
import Styles from './ButtonOutline.module.css';

export function ButtonOutline (props) {
    return (
        <button className={Styles.botonOutline} {...props}></button>
    );
}