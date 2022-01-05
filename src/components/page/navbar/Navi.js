import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav, NavItem } from "react-bootstrap";
import "./navbar.css";
export default function Navi() {
  return (
    <div>
      <Navbar bg="header" variant="dark">
        <Container>
          <Link to="/">
            <Navbar.Brand>Premier Legue</Navbar.Brand>
          </Link>
          <Nav>
            <NavItem>
              <Link className="nav-link" to="/table">
                Table
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/news">
                News
              </Link>
            </NavItem>
            <NavItem>
             
              <Link className="nav-link" to="/review">
                Review
              </Link>
            </NavItem>
          </Nav>
        </Container>
      </Navbar>
    </div>
    // <header className={classes.header}>
    //           <Link to="/">  className={classes.logo}> Premier League </></Link>
    //   <nav>
    //     <ul>
    //       <li>
    //         <Link to="/table">Table</Link>
    //       </li>
    //       <li>
    //         <Link to="/text">News</Link>
    //       </li>
    //       <li>
    //         <Link to="/Review">Review</Link>
    //       </li>
    //     </ul>
    //   </nav>
    // </header>
  );
}
