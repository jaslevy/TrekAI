import React from 'react';
import logo from '../images/TREK AI LOGO.svg'
import '../styles/landing.css'

const LandingNavbar = () => {
  return (
    <nav className="navbar">
      <a href="/" target="_top">
      <img src={logo} alt="TREKAI LOGO" className="navbar-logo"/>
      </a>
      <div className={'navbar-links'}>
        <a href="/signin" className="navbar-link">Log In</a>
        <a href="/login" className="navbar-link">Sign Up</a>
        <a href="mailto:jglevy@princeton.edu" target="_top" className="navbar-link">Contact</a>
      </div>
    </nav>
  );
}

export default LandingNavbar;
