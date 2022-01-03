import React from "react";
import { Link } from "react-router-dom";
import classes from './navbar.module.css';
export default function Navbar() {
  return (
    <header className={classes.header}>
    
          <Link to="/">  <div className={classes.logo}> Premier League </div></Link>

      <nav>
        <ul>
          <li>
            <Link to="/table">Table</Link>
          </li>
          <li>
            <Link to="/text">News</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
