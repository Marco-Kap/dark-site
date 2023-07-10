import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "./Logo";
import Phone from "./Phone";
import Clock from "./Clock";
import { isOpen } from "../public/utils/time";
import style from "public/css/style.css";
import { useEffect, useState, useCallback } from "react";

function renderContact() {
  render(<></>);
}
//console.log(useRef() + !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!jkpßkü);
export default function BSNav() {
  return (
    <>
      <Container className="justify-items-start sticky-top bg-light rounded">
        <Navbar collapseOnSelect expand="lg" className="red">
          <Container>
            <Navbar.Brand href="/">
              <Logo />
              Ahorn-Apotheke
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav variant="tabs" defaultActiveKey="/" className="me-auto">
                <Nav.Link eventKey={"verlosung"} href="/verlosung">
                  Verlosung
                </Nav.Link>
                <Nav.Link eventKey={"stellenangebote"} href="/stellenangebote">
                  Stellenangebote
                </Nav.Link>
                <NavDropdown title="Leistungen" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="/">Lieferdienst</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2"></NavDropdown.Item>
                  <NavDropdown.Item href="/notdienst">
                    Notdienst
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/">Rezepturen</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <div>
                <Phone />
                <span style={{ margin: "0.5vw" }}>05631 4040</span>
                <Clock className="px-6" />
                {isOpen()}{" "}
              </div>
              <Nav variant="pills" className="bg-info-subtle rounded">
                <Nav.Link eventKey={"kalender"} href="/kalender">
                  Rezept einlösen
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
      <Container className="position-relative top-0 ">
        <div className=" stretch position-absolute end-0 expand bg-light"></div>
      </Container>
    </>
  );
}
