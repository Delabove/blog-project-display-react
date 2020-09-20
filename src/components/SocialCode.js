import React from 'react';
import { Link } from "react-router-dom";
import Style from '../styling/layout.css';
import Layout from './Layout';

export default function SocialCode(){
    return(
        <Link to="/social-code">

        <div className="layout" xs={12} md={6}>
                <ul className="layout-list">
                    <li className="description">Description
                        <div> <strong><em>This is even more different!!!</em> </strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos velit illo necessitatibus accusamus rerum aperiam quaerat, animi perferendis iure maxime esse a similique nam aliquid tenetur dignissimos consequatur repudiandae consectetur facere laudantium. </div>
                    </li>
                    <li className="design">
                    <h1>Design</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam consequatur quam explicabo culpa nam minima. Temporibus praesentium, reprehenderit, cupiditate odit, autem minima eius vel dicta ab a veritatis. Modi, reprehenderit!</p>
                    <h3>This is an image</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi iste voluptatum excepturi, id consequuntur consequatur nemo quia dignissimos iusto doloribus laborum rem, aperiam molestiae quisquam illo sunt commodi fugit sequi?</p>
                    </li>
                    <li className="technologies">Technologies
                    <p>This is a list of technologies to make it look like there is a list of technologies in div.</p>
                    </li>
                    <li className="learns">
                    <div> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor at maiores, quibusdam quia facilis vitae culpa distinctio officia consequuntur, expedita deleniti facere ex veniam, voluptatibus voluptatum non? Rerum delectus perspiciatis, illum temporibus atque laudantium odio aspernatur reiciendis ad libero sequi fuga voluptatibus neque odit? Assumenda eveniet tempore modi esse nemo, id at impedit quos libero, animi quam nulla minus! Dolores dolorem dolorum corporis natus veritatis! Nobis sunt, dolorum ipsa odit possimus eum itaque ex. Corporis ipsa sed fuga nihil! Perspiciatis corrupti a illum nostrum pariatur, harum ratione odio totam doloribus necessitatibus, aliquid culpa laudantium aut nemo sapiente vero aperiam officiis!</div>
                    </li>
                </ul>
            </div>

        </Link>
    )
};