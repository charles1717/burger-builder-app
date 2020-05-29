import React from 'react';
import StyleClasses from './Modal.css';
import Aux from '../../../hoc/hoc';
import Backdrop from '../Backdrop/Backdrop';

const modal = ( props ) => (
    <Aux>
        <Backdrop show={props.show} clicked={props.modalClosed}/>
        <div 
            className={StyleClasses.Modal}
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1': '0' 
            }}>
            {props.children}
        </div>
    </Aux>
);

export default modal;