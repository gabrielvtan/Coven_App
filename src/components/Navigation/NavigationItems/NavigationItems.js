import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import './NavigationItems.css';


//Here we are creating multiple urls for each of pages

const navigationItems = () => (
    <ul className="NavigationItems">
        <NavigationItem link="/deal-list">Deal List</NavigationItem>
        <NavigationItem link="/submit-deal">Submit Deal</NavigationItem>
        <NavigationItem link="/contributions">Contributions</NavigationItem>
        <NavigationItem link="/profile">Profile</NavigationItem>
    </ul>
);

export default navigationItems;