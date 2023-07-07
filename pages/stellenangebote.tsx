import React from "react";
import { Accordion, Container, Card, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import Banner from "../components/Banner";
import BSNav from "../components/BSNav";

export default function stellenangebote() {
  const src = "/../public/images/team.jpg";
  const alt = "image";
  console.log(src + "src");
  console.log(alt + "alt");
  return (
    <>
      <BSNav />
      <Banner source={src} alt={alt} />
      <Container>
        <Card>
          <Card.Header> Wir suchen Verstärkung für unser Team</Card.Header>
        </Card>
        <Card.Body>
          <Row>
            <Col>
              <Accordion style={{ margin: "2em" }} defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Apotheker/in im Praktikum</Accordion.Header>
                  <Accordion.Body>
                    <h6>Vorrausetzungen:</h6>
                    <ul>
                      <li>abgeschlossenes Studium der Pharmazie</li>
                      <li>Abrobation</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Apotheker/in</Accordion.Header>
                  <Accordion.Body>
                    <h6>Vorrausetzungen:</h6>
                    <ul>
                      <li>Bestandenes 2. Staatsexamen</li>
                    </ul>
                    Als Apotheker im Praktikum unterstützt du Apotheker bei der
                    Bereitstellung von Arzneimitteln und bei der Beratung von
                    Patienten. Du sammelst Erfahrungen im Umgang mit
                    Medikamenten und lernst die Apothekenbetriebsvorschriften
                    kennen.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>PTA</Accordion.Header>
                  <Accordion.Body>
                    Als Pharmazeutisch-technischer Assistent (PTA) arbeitest du
                    unter der Aufsicht eines Apothekers und bist für die
                    Herstellung von Arzneimitteln und die Beratung von Patienten
                    zu Gesundheitsprodukten zuständig. Du überprüfst Rezepte,
                    gibst Medikamente aus und bereitest sie zu.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>PTA im Praktikum</Accordion.Header>
                  <Accordion.Body>
                    Als PTA im Praktikum unterstützt du PTAs bei der Herstellung
                    von Arzneimitteln und bei der Beratung von Patienten. Du
                    sammelst Erfahrungen im Umgang mit Medikamenten und lernst
                    die Abläufe in der Apotheke kennen.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>Kaufmänner/Kauffrauen</Accordion.Header>
                  <Accordion.Body>
                    <h6>Vorrausstzungen</h6>
                    <li>Abgeschlossene Kaufmännische Ausbildung</li>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                  <Accordion.Header>Fahrer/in</Accordion.Header>
                  <Accordion.Body>
                    Als Lieferfahrer bist du für die Auslieferung von Waren an
                    Kunden zuständig. Du planst deine Route, belädst dein
                    Fahrzeug und überprüfst die Lieferpapiere.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                  <Accordion.Header>Raumpfleger/in</Accordion.Header>
                  <Accordion.Body>
                    Als Raumpfleger bist du für die Reinigung von Räumen in
                    öffentlichen oder privaten Einrichtungen zuständig. Du
                    reinigst Böden, Oberflächen und sanitäre Anlagen, entsorgst
                    Abfälle und sorgst für eine hygienische Umgebung.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="7">
                  <Accordion.Header>Steuerfachwirt/in</Accordion.Header>
                  <Accordion.Body>
                    Als Steuerfachwirt bist du für die Beratung von Unternehmen
                    und Privatpersonen in steuerlichen Fragen zuständig. Du
                    erstellst Steuererklärungen und Jahresabschlüsse, prüfst
                    Steuerbescheide und berätst Kunden zu steuerlichen
                    Angelegenheiten.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="8">
                  <Accordion.Header>Steuerfachangestellte/r</Accordion.Header>
                  <Accordion.Body>
                    Als Steuerfachangestellter unterstützt du Steuerberater und
                    Steuerfachwirte bei der Beratung von Unternehmen und
                    Privatpersonen in steuerlichen Fragen. Du erstellst
                    Steuererklärungen, prüfst Steuerbescheide und unterstützt
                    bei der Buchhaltung.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
            <Col>
              {" "}
              <Image
                alt={alt}
                // Importing an image will
                // automatically set the width and height
                src="/../public/images/klassik-logo-freigestellt-480x320.png"
                sizes="100vw"
                width={100}
                height={300}
                // Make the image display full width
                style={{
                  paddingTop: "2em",
                  width: "100%",
                  height: "auto",
                }}
              />
              <Card className="text-center">
                Ahorn-Apotheke
                <br />
                Bahnhofstraße 7<br /> 34497 Korbach
                <br />
                Deutschland
                <br />
                Email:
                <a href="mailto:email@ahornapo.de?subject=Bewerbung">
                  email@ahornapo.de
                </a>
              </Card>
            </Col>
          </Row>
        </Card.Body>
        <h3 className="text-center">Was wir bieten</h3>
      </Container>
    </>
  );
}
