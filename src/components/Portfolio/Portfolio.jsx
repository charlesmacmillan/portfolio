import React from 'react';
import './Portfolio.css';
import PortfolioThing from '../PortfolioThing/PortfolioThing';


const portfolio = [
{
id: "myeats",
title: "My Eats",
url: "http://my-eats.herokuapp.com/",
screenshot: "https://i.imgur.com/wsnJZMk.png",
about: "My Eats is an app for those who cook on a whim, simply sign in and start adding what's in your kitchen to your 'ingredients', and look choose from a list of recipes that use the ingredients you already have!",
technologies: ["React", "Node.js", "Express", "JavaScript", "JWT Auth.", "Mongoose", "CSS", "Photoshop"]
},
{
id:"memeworld",
title: "Meme World",
url: "https://memeworld-project3.herokuapp.com/",
screenshot: "https://i.imgur.com/KPb4ViY.png",
about: "Meme World is a simple meme generator that offers its users a handful of fun customizable options when creating memes fresh new memes.",
technologies: ["Python", "Django", "AWS image uploads", "PostgreSQL", "CSS", "Photoshop"]
},
{
id: "fit",
title: "8 FIT exercise tracker",
url: "https://fit-eightfit.herokuapp.com/",
screenshot: "https://i.imgur.com/g9gdNDN.png",
about: "This exercise tracker makes it easy for its users to save and find their own exercise routines, as well as look at others routines.",
technologies: ["Node.js", "Express", "Mongooose", "Google OAuth", "CSS", "Photoshop"]
},
{
id: "bonez",
title: "BONEZ Slot-Machine",
url: "https://charlesmacmillan.github.io/GAME-Bonez-Slot-Machine/",
screenshot: "https://i.imgur.com/OF2xZEl.png",
about: "BONEZ is a puppy-themed slot machine I created while learning how to create interractive web applications with vanilla JavaScript. I love dogs, and thought this was really fun.",
technologies: ["HTML", "JavaScript", "CSS", "Photoshop"]
},
]

const Portfolio = props => {
    return (
        <div className="Portfolio">
            {portfolio.map(site => 
                <PortfolioThing 
                    site={site}
                />   
            )}
        </div>
    )
}

export default Portfolio;