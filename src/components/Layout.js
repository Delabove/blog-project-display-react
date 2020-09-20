import React from 'react';
import { Link } from "react-router-dom";
import Style from '../styling/layout.css';

export default function Layout(props){
    return(
        // <Link to="/layout">
            <div className="layout" xs={12} md={6}>
                <ul className="layout-list">
                    <li className="description">
                    <h2>Description </h2>
                        <div>{props.description}</div>
                    </li>
                    <li className="design">
                    <h1>Design</h1>
                    <p>{props.design}</p>
                    <p>{props.img}</p>
                    <p>{props.design2}</p>
                    </li>
                    <li className="technologies">
                    <h2>Technologies</h2>
                    <p>{props.tech}</p>
                    </li>
                    <li className="learns">
                    <h2>Learns</h2>
                    <div> {props.learns}</div>
                    </li>
                </ul>
            </div>
        // </Link>
    )
};