import React from 'react';
import StyleClasses from './Backdrop.css';

const backdrop = ( props ) => (
    props.show ? 
        <div className={StyleClasses.Backdrop} onClick={props.clicked}></div> : 
    null
);

export default backdrop;