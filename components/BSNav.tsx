import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "./Logo";
import Phone from "./Phone";
import Clock from "./Clock";
import { isOpen } from "../public/utils/time";
import react from "react";
import useMediaQuery from "../public/utils/useMediaQuery";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

export type NavProps = {
  page?: string;
};

export default function BSNav(props: NavProps) {
  const breakpoint = useMediaQuery(996);
  const corporate = "/../public/images/ahornapo haus.png";

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
          <span style={{ whiteSpace: "nowrap" }}>
            <Clock />
            <a style={{ color: "grey", marginLeft: "0.3em" }} href="/kontakt">
              {isOpen()}
            </a>
          </span>
        </div>
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
                <Nav.Link eventKey={"notdienst"} href="/notdienst">
                  Notdienst
                </Nav.Link>
              </Nav>
              {!breakpoint ? (
                <div className="p-2">
                  <Phone />
                  {"   "}
                  <span>
                    <a
                      style={{ color: "grey", margin: "0.3em" }}
                      href="tel:056314040"
                    >
                      05631 4040
                    </a>
                  </span>
                  {" | "}{" "}
                  <span style={{ whiteSpace: "nowrap" }}>
                    {" "}
                    <Clock />
                    <a
                      style={{ color: "grey", marginLeft: "0.3em" }}
                      href="/kontakt"
                    >
                      {isOpen()}
                    </a>
                  </span>
                </div>
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
