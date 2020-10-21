import React from 'react';
import './PortfolioThing.css';
import { Link } from 'react-router-dom';



const PortfolioThing = props => {
    return (
        <div className="PortfolioThing" id={props.site.id}>
            <div className="info">
                <h2>{props.site.title}</h2>
                <p>{props.site.about} <br/><a target="_blank" href={props.site.url}>Visit Site
                </a></p>
               
            </div>
        </div>
    )
}

export default PortfolioThing;