import React from 'react';
import { NavLink } from 'react-router-dom';

import covenLogo from '../../assets/images/coven-logo.png';
import './Logo.css';
// Here is how we add images to the JS file

const logo = (props) => (
    <NavLink
        to={props.link}>
        <div className="Logo">
            <img src={covenLogo} alt="Coven"/>
        </div>
    </NavLink>
);

export default logo;