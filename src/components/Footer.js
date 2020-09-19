import React from 'react';
import footer from '../styling/footer.css';


export default function Navbar(){
    return(
        <footer>
            <ul className="footer-container">
                <a href="#"><li className="footer-item">LinkedIn</li></a>
                <a href="#"><li className="footer-item">GitHub</li></a>
                <a href="#"><li className="footer-item">Portal</li></a>
                <a href="#"><li className="footer-item">Insta</li></a>
            </ul>
        </footer>
    )
};