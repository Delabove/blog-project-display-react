import React from 'react';
import navbar from '../styling/navbar.css';
import header from '../media/header.png';

export default function Navbar(){
    return(
        <nav>
            <ul className="link-container">
                <li><img width="50%" src={header} alt=""/></li>
            </ul>
        </nav>
    )
};