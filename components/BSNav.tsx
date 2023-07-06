import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useEffect, useState } from "react";
import Logo from "./Logo";

export default function BSNav() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">
          <Logo />
          Ahorn-Apotheke
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/verlosung">Verlosung</Nav.Link>
            <Nav.Link href="/stellenangebote">Stellenangebote</Nav.Link>
            <NavDropdown title="Leistungen" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Leistungen</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Notdienst</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Rezepturen</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/verlosung">Verlosung</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
