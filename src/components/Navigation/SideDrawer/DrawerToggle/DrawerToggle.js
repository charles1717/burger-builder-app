import React from 'react';
import styleClasses from '../DrawerToggle/DrawerToggle.css';

const drawerToggle = ( props ) => {
    return(
        <div className={styleClasses.DrawerToggle} onClick={props.clicked}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
}

export default drawerToggle;