import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "./Logo";
import Phone from "./Phone";
import Clock from "./Clock";
import { isOpen } from "../public/utils/time";
import useMediaQuery from "../public/utils/useMediaQuery";
import Image from "next/image";
import { useEffect, useState } from "react";
import { NavItem } from "react-bootstrap";
import Emergencyico from "./Emergencyico";

export type NavProps = {
  page?: string;
};

export default function BSNav(props: NavProps) {
  const breakpoint = useMediaQuery(996);
  const corporate = "/../public/images/ahornapo haus.png";
  const images = [
    "/../public/images/coffee.jpg",
    "/public/images/coffee.jpg",
    "/images/coffee.jpg",
    "/coffee.jpg",
  ];
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {
    //@ts-expect-error
    const onScroll = (e) => {
      setScrollValue(e.target.documentElement.scrollTop);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollValue]);

  return (
    <>
      <Container className="infobox bg row">
        <Image
          src={corporate}
          width={220}
          height={220}
          alt="bild"
          className="col"
          style={{ width: "10em", height: "auto", marginTop: "0.5em" }}
        />
        <div className="p-2 col">
          <span>Bahnhof Straße 7, 34497 Korbach</span>
          <span>
            {" "}
            <Phone />
            {"   "}
            <a style={{ color: "grey", margin: "0.3em" }} href="tel:056314040">
              05631 4040
            </a>
          </span>{" "}
          <span
            style={{ whiteSpace: "nowrap", color: "grey", marginLeft: "0.3em" }}
          >
            <Clock />
            {isOpen()}
          </span>
        </div>
        <div className="coll"></div>
      </Container>
      <Container className="justify-items-start sticky-top bg-light bg rounded">
        <Navbar collapseOnSelect expand="lg" className="">
          <Container>
            <Navbar.Brand href="/">
              <div>
                {" "}
                {/*<Image src={"/../corporate"} width={30} height={30} alt="Ahornapotheke Logo"/>*/}
                <Logo />
                {!breakpoint && scrollValue <= 1 && props.page !== "index" ? (
                  <div className="corporateID coll ">
                    <Image
                      src={corporate}
                      width={420}
                      height={320}
                      alt="bild"
                      style={{
                        translate: "0px 20px -20px",
                        width: "10em",
                        height: "auto",
                      }}
                    />
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav ">
              <Nav variant="tabs" defaultActiveKey="/" className="me-auto px-2">
                <Nav.Link eventKey={"verlosung"} href="/verlosung">
                  Verlosung
                </Nav.Link>
                <Nav.Link eventKey={"stellenangebote"} href="/stellenangebote">
                  Stellenangebote
                </Nav.Link>
                <Nav.Link eventKey={"leistungen"} href="/leistungen">
                  Leistungen
                </Nav.Link>
                <Nav.Link eventKey={"kontakt"} href="/kontakt">
                  Kontakt
                </Nav.Link>
                <Nav.Link eventKey={"ratgeber"} href="/ratgeber">
                  Ratgeber
                </Nav.Link>
                <Nav.Link eventKey={"notdienst"} href="/notdienst">
                  Notdienst
                </Nav.Link>
              </Nav>
              {!breakpoint ? (
                <Nav>
                  <Nav.Link href="tel:056314040">
                    <span>
                      {" "}
                      <Phone />
                      {"  "}
                      05631 4040
                    </span>
                  </Nav.Link>

                  <div
                    style={{
                      marginTop: "0.4em",
                      marginRight: "-0.6em",
                      marginLeft: "0.2em",
                    }}
                  >
                    <Clock />
                  </div>
                  <NavDropdown
                    supresshydrationwarning
                    title={isOpen()}
                    id="nav-dropdown"
                  >
                    <NavDropdown.Item eventKey="4.1">
                      <div>
                        <div style={{}}>
                          <div className="d-grid gap-2 mb-4">
                            <a
                              href="/notdienst"
                              className="btn btn-danger d-flex justify-content-center align-items-center"
                            >
                              {" "}
                              <img
                                scr={images[1]}
                                width="20px"
                                height="20px"
                                alt="."
                              />
                              <span> Notdienst-Apotheken anzeigen</span>
                            </a>
                          </div>
                          <h3 className="text-center">Öffnungszeiten</h3>
                          <div className="ohours  flex-wrap">
                            <div className="d-flex">
                              <div>Montag</div>
                              <div className="ms-auto">08:00 - 18:30</div>
                            </div>
                            <div className="d-flex">
                              <div>Dienstag</div>
                              <div className="ms-auto">08:00 - 18:30</div>
                            </div>
                            <div className="d-flex">
                              <div>Mittwoch</div>
                              <div className="ms-auto">08:00 - 18:30</div>
                            </div>
                            <div className="d-flex">
                              <div>Donnerstag</div>
                              <div className="ms-auto">08:00 - 18:30</div>
                            </div>
                            <div className="d-flex">
                              <div>Freitag</div>
                              <div className="ms-auto">08:00 - 18:30</div>
                            </div>
                            <div className="d-flex">
                              <div>Samstag</div>
                              <div className="ms-auto">08:00 - 13:30</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              ) : (
                <></>
              )}{" "}
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
