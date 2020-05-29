import React from 'react';
import StyleClasses from './Button.css';

const button = ( props ) => (
    <button 
        disabled={props.disabled}
        className={[StyleClasses.Button, StyleClasses[props.btnType]].join(' ')}
        onClick={props.clicked}>
        {props.children}
    </button>
);

export default button;