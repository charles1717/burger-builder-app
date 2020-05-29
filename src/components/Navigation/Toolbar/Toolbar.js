import React from 'react';
import StyleClasses from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = ( props ) => (
    <header className={StyleClasses.Toolbar}>
        <DrawerToggle clicked={props.drawerToggleClicked}/>
        <div className={StyleClasses.Logo}>
            <Logo/>
        </div>
        <nav className={StyleClasses.DesktopOnly}>
            <NavigationItems/>
        </nav>
    </header>
);

export default toolbar;