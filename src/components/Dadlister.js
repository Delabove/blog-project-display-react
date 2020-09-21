import React from 'react';
import { Link } from "react-router-dom";
import Style from '../styling/layout.css';
import Layout from './Layout';
import Image from '../media/dadlister.png';
import desc from '../media/description.png';
import design from '../media/design.png';
import technologies from '../media/technologies.png';
import learns from '../media/learns.png';


export default function Dadlister(){
    return(
        <Link to="/dadlister">

        <div className="layout" xs={12} md={6}>
        <ul className="layout-list">
                    <li className="description">
                    <p><img width="100%" className="img" src={desc} alt="social" /></p>
                        <div className="project-body"> My teammates and I were given the task of taking a previously coded Craigslist inspired project, create a theme and bring it to life! In four days, we created DadLister, an application where volunteers can sign up to offer help with hard to do tasks such as do it yourself projects and changing flat tires.</div>
                    </li>
                    <li className="design">
                    <p><img width="110%" className="smaller-title" src={design} alt="social" /></p>
                    <p className="project-body"> We split the tasks up according to our strengths and I tackled all things frontend!</p>
                    <p><img width="100%" className="image" src={Image} alt="social" /></p>
                    <p className="project-body">I had a blast with Dadlister. This project was the first time I felt I could truly showcase my capabilities on the frontend. I created the application's graphics using Canva and styled each jsp using individual stylesheets. I toyed with using CSS animations which allowed me to dig a little deeper into the "why's" behind CSS syntax and properties.</p>
                    </li>
                    <li className="technologies">
                    <p><img width="100%" className="img" src={technologies} alt="social" /></p>
                    <p className="project-body">Java, MySQL, HTML, JavaScript and CSS</p>
                    </li>
                    <li className="learns">
                    <p><img width="100%" className="smaller-title" src={learns} alt="social" /></p>
                    <div className="project-body"> My biggest learns from Dadlister, was how to use Java to dynamically generate html pages and interact with a MySQL database. During this project, we worked with a larger team which brought a new dynamic to committing changes to Github.</div>
                    </li>
                </ul>
            </div>

        </Link>
    )
};