import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "./Logo";

export default function BSNav() {
  return (
    <Container>
      <Navbar
        collapseOnSelect
        expanded
        expand="lg"
        className="bg-body-tertiary">
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
                <NavDropdown.Item eventKey={"leistungen"} href="#action/3.1">
                  Leistungen
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2"></NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Notdienst
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Rezepturen
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav variant="pills" className="bg-info-subtle rounded">
              <Nav.Link eventKey={"kalender"} href="/kalender">
                Rezept einlösen
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
}
