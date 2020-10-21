import React from 'react';
import './Header.css';

const Header = props => {
    return (
        <div className="Header">
            <div className="profile-pic"></div>
            <h1>Charles MacMillan</h1>
            <p>Full-Stack Web Developer <br/>
            Dillon, Colorado</p>
            <div>
                <a href="mailto:charlesmacmillanpro@gmail.com">Email</a> &nbsp;&nbsp;|&nbsp;&nbsp;
                <a targer="_blank" href="https://github.com/charlesmacmillan">gitHub</a>&nbsp;&nbsp;|&nbsp;&nbsp;
                <a targer="_blank" href="https://www.linkedin.com/in/charles-macmillan/">LinkedIn</a>
                </div>
        </div>
    )
}

export default Header;