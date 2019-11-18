import React from 'react';
import logo from './logo.png';
import './header.styles.css';


export default function Header() {
    return (
       <header className="intro">
         <img src={logo} className="App-logo" alt="logo" />
         <div classNames="top-btns">
         <button className="register">Register</button>
         <button className="signup">Sign In</button>
         </div>
      </header>
    );
}

