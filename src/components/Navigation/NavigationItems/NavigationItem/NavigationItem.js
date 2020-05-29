import React from 'react';
import { NavLink } from 'react-router-dom';

import StyleClasses from './NavigationItem.css';

const navigationItem = ( props ) => (
    <li className={StyleClasses.NavigationItem}>
        <NavLink 
            to={props.link}
            exact={props.exact}
            activeClassName={StyleClasses.active}
        >
            {props.children}
        </NavLink>
    </li>
);

export default navigationItem;