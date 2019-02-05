import React from 'react';

import covenLogo from '../../assets/images/coven-logo.png';
import './Logo.css';
// Here is how we add images to the JS file

const logo = (props) => (
    <div className="Logo">
        <img src={covenLogo} alt="Coven"/>
    </div>
);

export default logo;