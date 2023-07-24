import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Phone from "./Phone";
import Clock from "./Clock";
import { isOpen } from "../public/utils/time";
import Image from "next/image";
import Location from "./Location";
import useMediaQuery from "../public/utils/useMediaQuery";

export default function BSNav() {
  const breakpoint = useMediaQuery(996);
  const src = "/../public/images/ahornapo haus.png";
  return (
    <>
      <Container className="row">
        <div className="col">
          <Image src={src} alt="logo" width={80} height={70} />
        </div>

        <div className="p-2 row col">
          <div className="col">
            <Location />
          </div>
          <div className="col">
            <Phone />
          </div>
          <div className="col">
            <Clock />
          </div>
        </div>
      </Container>
      <Container className="justify-items-start sticky-top bg-light rounded">
        <Navbar collapseOnSelect expand="lg" className="">
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav ">
              <Nav variant="tabs" defaultActiveKey="/" className="me-auto px-2">
                <Nav.Link eventKey={"verlosung"} href="/verlosung">
                  Startseite
                </Nav.Link>
                <Nav.Link eventKey={"verlosung"} href="/verlosung">
                  Verlosung
                </Nav.Link>
                <Nav.Link eventKey={"stellenangebote"} href="/stellenangebote">
                  Stellenangebote
                </Nav.Link>
                <Nav.Link eventKey={"kontakt"} href="/kontakt">
                  Kontakt
                </Nav.Link>
                <Nav.Link eventKey={"notdienst"} href="/notdienst">
                  Notdienst
                </Nav.Link>
              </Nav>

              <Nav variant="pills" className="bg-info-subtle px-2 rounded">
                <Nav.Link eventKey={"erezepte"} href="/erezepte">
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
