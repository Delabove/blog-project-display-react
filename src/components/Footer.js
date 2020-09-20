import React from 'react';
import footer from '../styling/footer.css';
import insta from '../media/Insta.png';
import linkedin from '../media/linkedin.png';
import portal from '../media/alumniPortal.png';
import github from '../media/github.png';


export default function Navbar(){
    return(
        <footer>
            <ul className="footer-container">
                <div class="social"><a  href="https://www.linkedin.com/in/delayne-labove/"><li className="footer-item"><img src={linkedin} width="100%" alt="social" /></li></a></div>
                <div class="social" ><a href="https://github.com/Delabove"><li className="footer-item"> <img src={github} width="100%" alt="social" /></li></a></div>
                <div class="social" ><a href="https://alumniPortal.com/Delabove"><li className="footer-item"> <img src={portal} width="100%" alt="social" /></li></a></div>
                <div  class="social" ><a href="https://www.instagram.com/color2code/"><li className="footer-item"> <img src={insta} width="100%" alt="social" /></li></a></div>
            </ul>
        </footer>
    )
};