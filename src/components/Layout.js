import React from 'react';
import { Link } from "react-router-dom";
import Style from '../styling/layout.css';

export default function Layout(props){
    return(
        // <Link to="/layout">
            <div className="layout" xs={12} md={6}>
                {props.children}
            </div>
        // </Link>
    )
};