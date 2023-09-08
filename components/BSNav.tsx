import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "./Logo";
import { isOpen } from "../public/utils/time";
import useMediaQuery from "../public/utils/useMediaQuery";
import Image from "next/image";
import { useEffect, useState } from "react";
import { NavItem } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import Link from "next/link"

export type NavProps = {
  page?: string;
};

export default function BSNav(props: NavProps) {
  const breakpoint = useMediaQuery(1081);
  const corporate = "/../public/images/ahornapo haus_zugeschnitten-min.png";
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
             
      <Container className="justify-items-start sticky-top bg-light bg rounded">
        <Navbar collapseOnSelect expand="lg" className="">
          <Container>
            <Navbar.Brand href="/">
              <div>
                {" "}
                {/* <Image
                  style={{ marginRight: "12em" }}
                  src={corporate}
                  width={48}
                  height={38}
                  alt="Ahornapotheke Logo"
                /> */}
<Logo/>
                {scrollValue <= 1 && props.page !== "index" ? (
                  <div className="corporateID coll1 ">
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
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-xl`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-xl`}
              aria-labelledby={`offcanvasNavbarLabel-expand-xl`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
              <div
                  className="offcanvas-header"

                ><Link href="/">
                  <Image
                    style={{marginRight: "2em"}}
                    src={corporate}
                    alt=""
                    width={140}
                    height={100}
                  ></Image></Link>
                  <div
                    style={{
lineHeight:"24px",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <span style={{}} className="nowrap">
                    <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            className="bi"
            fill="currentColor"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
          </svg>
                      {isOpen()}
                    </span>
                    <span className="nowrap">
                    <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              className="bi bi-geo-alt-fill"
              viewBox="0 0 16 16"
              fill="currentColor"
            >
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
            </svg>
                      Bahnhof Straße 7, 34497 Korbach
                    </span>
                    <span className="nowrap">
                     
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          className="bi bi-telephone-fill"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                          />
                        </svg>
                        <a href="tel:056314040">
                        05631 4040</a>
                      </span>
                      <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
</svg><a href="mailto:email@ahornapo.de">email@ahornapo.de</a></span>
                  </div>
                </div>

              </Offcanvas.Header>

              <Offcanvas.Body>

                <Nav
                  variant="tabs"
                  defaultActiveKey="/"
                  className="me-auto px-2"
                >
                  <Nav.Link className="coll1" eventKey={"verlosung"} href="/verlosung">
                    Verlosung
                  </Nav.Link>
                  <Nav.Link
                    eventKey={"stellenangebote"}
                    href="/stellenangebote"
                  >
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
                  <Nav.Link
                    eventKey={"notdienst"}
                    href="/notdienst"
                  >
                    Notdienst
                  </Nav.Link>
                </Nav>
                {!breakpoint ? (
                  <Nav className="responsive" suppressHydrationWarning>
                    <Nav.Link href="tel:056314040">
                      <span className="nowrap">
                        {" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="grey"
                          className="bi bi-telephone-fill"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                          />
                        </svg>
                        {"  "}
                        05631 4040
                      </span>
                    </Nav.Link>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="grey"
                      className="mt-3"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                    </svg>
                    {/*------------------------Start Overlay-------------------------*/}
                    <NavDropdown title={isOpen()} id="collasible-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">
                        <div className="d-grid gap-2 mb-4">
                          <a
                            href="/notdienst"
                            className="btn btn-danger d-flex justify-content-center align-items-center"
                          >
                            {" "}
                            <img
                              src="/images/ahornapo haus.png"
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
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                ) : (
                  <></>
                )}{" "}
                <Nav variant="pills" className="bg-info-subtle px-2 rounded">
                  <Nav.Link
                    style={{ whiteSpace: "nowrap" }}
                    eventKey={"erezepte"}
                    href="/erezepte"
                  >
                    Rezept einlösen
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </Container>

      {/*does  this have a purpose ?*/}
      {/* <Container className="position-relative top-0 ">
        <div className=" stretch position-absolute end-0 expand bg-light"></div>
      </Container>*/}
    </>
  );
}
