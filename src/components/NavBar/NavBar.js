import { Link } from "react-router-dom";
import "./NavBar.scss";
import React from "react";

const NavBar = () =>
{
    return(
    <div className="bar-wrap">
        <Link to="/" className="tab">Home</Link>
        <Link to="/about" className="tab">About</Link>
        <Link to="/resume" className="tab">Resume</Link>
        <Link to="/contact" className="tab">Contact</Link>
    </div>)
}

export default NavBar;