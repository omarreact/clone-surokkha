import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Logo from "../../assets/logo.png";
import "./navLink.css";
import { Link } from "react-router-dom";

function NavLink() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary p-0 m-0">
      <Container className="section__padding">
        <Navbar.Brand href="#home">
          <Link to={`/`}>
            <img className="logo" src={Logo} alt="logo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav className="align-items-center">
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/registration">Registration</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/card">Card</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/certificate">Certificate</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/verify">Verify Certificate</Link>
            </Nav.Link>

            <Nav.Link href="#lng">
              <Button className="dflt__btn">Language Change</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavLink;
