import React from 'react';
import { Link } from "react-router-dom";
import Style from '../styling/layout.css';
import Layout from './Layout';
import Image from '../media/texasFresh.png';
import desc from '../media/description.png';
import design from '../media/design.png';
import technologies from '../media/technologies.png';
import learns from '../media/learns.png';

export default function TexasFresh(){
    return(
        <Link to="/">
        <div className="layout" xs={12} md={6}>
        <ul className="layout-list">
                    <li className="description">
                    <p><img width="100%" className="img" src={desc} alt="social" /></p>
                        <div className="project-body">Texas Fresh is a blog landing page for a ficticious local farmer. The landing page contains an eyebrow nav, navbar with 5 blog topics, 5 featured posts, an archive section, a newletter signup form, and copyright in the footer.</div>
                    </li>
                    <li className="design">
                    <p><img width="110%" className="smaller-title" src={design} alt="social" /></p>
                    <p className="project-body"> Texas Fresh blog was my first full frontend project outside of school that was assigned to me for an interview assessment!</p>
                    <p><img width="100%" className="image" src={Image} alt="social" /></p>
                    <p className="project-body">I thoroughly enjoyed building this project. Prior to beginning, I had spent a little time learning React. I thought it would be a great project to take a deeper dive into the JavaScript library! I had no idea what I would learn during this project, but, to date, it is my favorite project. I preplanned the project using InVision. You can checkout the wireframe for Texas Fresh <a className="wireframe" href="https://projects.invisionapp.com/freehand/document/aOcwTFuN7">here</a>. I, also, created all graphics using canva pro.</p>
                    </li>
                    <li className="technologies">
                    <p><img width="100%" className="img" src={technologies} alt="social" /></p>
                    <p className="project-body">HTML, React and Material UI</p>
                    </li>
                    <li className="learns">
                    <p><img width="100%" className="smaller-title" src={learns} alt="social" /></p>
                    <div className="project-body"> One of my favorite learns from Texas Fresh was fully experiencing the benefits of breaking down each project into components. This is a common practice with React and I can't see me structuring future personal projects any other way! The biggest "Aha!" occurred when I was creating individual objects and rendering the data into the parent component by mapping through the object data and using props to feed the fields into their respective elements. I learned so much with this project and it has helped me see how far I have come as a new developer!</div>
                    </li>
                </ul>
            </div>
            </Link>

    )
};