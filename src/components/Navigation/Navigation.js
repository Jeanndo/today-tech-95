import React from "react";
import "./Navigation.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Navigation = () => {
  return (
    <React.Fragment>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="navbgcolor"
        bg="dark"
        variant="dark"
        fixed="top"
      >
        <Container>
          <Navbar.Brand href="/" className="landing__logo">
            <h3>TODAY TECH 95</h3>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto nav__items">
              <Nav.Link href="#skills" className="nav__link">
                SKILLS
              </Nav.Link>
              <Nav.Link href="#services" className="nav__link">
                SERVICES
              </Nav.Link>
              <Nav.Link href="#work" className="nav__link">
                MY WORK
              </Nav.Link>
              <Nav.Link href="#contact" className="nav__link">
                CONTACT
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </React.Fragment>
  );
};
export default Navigation;
