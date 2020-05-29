import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
import StyleClasses from './Logo.css';

const logo = ( props ) => (
    <div className={StyleClasses.Logo}>
        <img src={burgerLogo} alt="MyBurger" />
    </div>
);

export default logo;