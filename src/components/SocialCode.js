import React from 'react';
import { Link } from "react-router-dom";
import Style from '../styling/layout.css';
import Layout from './Layout';
import Image from '../media/socialCode.png';
import desc from '../media/description.png';
import design from '../media/design.png';
import technologies from '../media/technologies.png';
import learns from '../media/learns.png';

export default function SocialCode(){
    return(
        <Link to="/social-code">
        <div className="layout" xs={12} md={6}>
                <ul className="layout-list">
                    <li className="description">
                    <p><img width="100%" className="img" src={desc} alt="social" /></p>
                        <div className="project-body"> Social Code is a full stack social media application where developers of all experience levels can network, share ideas, and mentor each other. My front end responsibilities for Social Code included wireframing and storyboarding with InVision, basic graphic design, styling with CSS, responsiveness with Bootstrap, and calling on events with JQuery. Using the CRUD paradigm, I designed a follow system on the backend using MVC. I manipulated the database with Java and Spring Boot, while displaying the results using Thymeleaf.</div>
                    </li>
                    <li className="design">
                    <p><img width="100%" className="smaller-title" src={design} alt="social" /></p>
                    <p className="project-body">Upon conceptualization, I initially created the wireframe and storyboard in InVision. You can take a look at the initial design process <a className="wireframe" href={'https://projects.invisionapp.com/freehand/document/N56IaiokC'} color="blue">here</a>.</p>
                    <p><img width="100%" className="image" src={Image} alt="social" /></p>
                    <p className="project-body">Considering I attended a full stack bootcamp, it was important to me to implement frontend and backend features in my final project. I was drawn to frontend long before I started school. During my time in school, I was adamant on my pursuit with frontend development. While building Social Code, however, I realized backend development had its creative points as well. I found myself enjoying the process of playing on both ends. Because each area requires a different set of thinking skills, however, I noticed the importance of compartmentalizing my days in either front or back. Very seldom did I find it an easy task to go between the two in one day.</p>
                    </li>
                    <li className="technologies">
                    <p><img width="100%" className="img" src={technologies} alt="social" /></p>
                    <p className="project-body">Java, Spring Boot, MySQL, Thymeleaf, CSS, and Bootstrap</p>
                    </li>
                    <li className="learns">
                    <p><img width="100%" className="smaller-title" src={learns} alt="social" /></p>
                    <div className="project-body"> Building Social Code was an amazing experience. It was the first time I worked on a project with a team where we turned an idea into a tangible, full stack application. My biggest learns from a development standpoint was the importance of clean code, being mindful of naming conventions, and my interest in design patterns, such as MVC, was born. These concepts inspired me to dig deeper into Data Structures and Algorithms post graduation. </div>
                    </li>
                </ul>
            </div>
        </Link>
    )
};