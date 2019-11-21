import React from 'react';
import logo from './logo.png';
import './header.styles.css';
import { Link } from 'react-router-dom';


export default function Header() {
    return (
       <header className="intro">
         <img src={logo} className="App-logo" alt="logo" />
         <div className="top-btns">
         <Link to='/register'><button className="register">Register</button></Link>
         <Link to='/signin'><button className="signup">Sign In</button></Link>
         </div>
      </header>
    );
}

