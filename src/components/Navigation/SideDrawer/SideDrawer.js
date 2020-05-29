import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import StyleClasses from './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/hoc';

const sideDrawer = ( props ) => {
    let attachedClasses = [StyleClasses.SideDrawer, StyleClasses.Close];
    if ( props.open ) {
        attachedClasses = [StyleClasses.SideDrawer, StyleClasses.Open];
    }
    
    return(
        <Aux>
            <Backdrop
                show={props.open}
                clicked={props.closed}
            />
            <div className={attachedClasses.join(' ')}>
                <div className={StyleClasses.Logo}>
                    <Logo/>
                </div>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </Aux>
    );
}

export default sideDrawer;