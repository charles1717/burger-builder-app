import React from 'react';
import StyleClasses from './BuildControl.css';

const buildControl = ( props ) => (
    <div className={StyleClasses.BuildControl}>
        <div className={StyleClasses.Label}>{props.label}</div>
        <button className={StyleClasses.Less} onClick={props.removeButtonClicked} disabled={props.disabled}>Remove</button>
        <button className={StyleClasses.More} onClick={props.addButtonClicked}>Add</button>
    </div>
);

export default buildControl;