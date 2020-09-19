import React from 'react';
import navbar from '../styling/navbar.css';

export default function Navbar(){
    return(
        <nav>
            <ul className="link-container">
                <a href="#"><li className="nav-item">Description</li></a>
                <a href="#"><li className="nav-item">Design</li></a>
                <a href="#"><li className="nav-item">Technologies</li></a>
                <a href="#"><li className="nav-item">Learns</li></a>
            </ul>
        </nav>
    )
};