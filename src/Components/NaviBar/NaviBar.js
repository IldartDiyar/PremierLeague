import { Navbar, Container, Nav, NavItem } from "react-bootstrap";
import { Link, NavLink } from 'react-router-dom'
import "./navi.css";
import { GiTigerHead } from "react-icons/gi";
export default function NaviBar() {
  return (
    <div>
      <Navbar bg="header" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to='/' >
            <GiTigerHead className="mr-"/> Premier Legue
          </Navbar.Brand>
          <Nav>
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/news" exact>
                News
              </Nav.Link>
              <Nav.Link as={NavLink} to="/table">
                Table
              </Nav.Link>
              <Nav.Link as={NavLink} to="/review">
                Review
              </Nav.Link>
            </Nav>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
