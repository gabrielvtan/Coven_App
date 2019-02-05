import React from 'react';

import './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

// this will be a functional component because we wont have to deal with state here
// clicked is a props within DrawerToggle, we will eventually pass the toolbar to the layout 
// and the method for clicked={props.drawerToggleClick}  will be there
const toolbar = (props) => (
    <header className="Toolbar">
        <div className="Logo">
            <Logo/>
        </div>
        <nav className="DesktopOnly">
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;