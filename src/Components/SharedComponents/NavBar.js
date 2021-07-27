import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./nav.css";
import logo from "../../assets/img/logo.png";

const NavBar = () => {
  return (
    <div>
      <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" id="nav">
        <Container>
          <Navbar.Brand className="nav_header" href="#home">
            <img
              alt=""
              src={logo}
              width="50"
              height="50"
              className="d-inline-block align-top"
            />{" "}
            <span className="middle-text"> MSR Construction</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Nav.Link className="nav_text" href="#gallery">
                Gallery
              </Nav.Link>
              <Nav.Link className="nav_text" href="#memes">
                Call us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
