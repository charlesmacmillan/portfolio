import React from 'react';
import './PortfolioThing.css';
import { Link } from 'react-router-dom';



const PortfolioThing = props => {
    return (
        <div className="PortfolioThing" id={props.site.id}>
            <div className="info">
                <h2>{props.site.title}</h2>
                <p>
                    <a target="_blank" href={props.site.url}>Visit Site</a> <br/>
                    {props.site.about} <br/>
                    <h3>technologies used: </h3>
                    {props.site.technologies.map((tech, i)=> 
                    <span>{tech}{i < props.site.technologies.length - 1 ? "," : "" } </span>
                    )} 
                </p>
               
            </div>
        </div>
    )
}

export default PortfolioThing;