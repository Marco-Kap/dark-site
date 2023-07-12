import React from "react";
import { Accordion, Container, Card, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Banner from "../components/Banner";
import BSNav from "../components/BSNav";
import Footer from "../components/Footer";

export default function stellenangebote() {
  const src = "/../public/images/team.jpg";
  const alt = "image";

  return (
    <>
      <BSNav />
      <Banner
        source={src}
        alt={alt}
        text="Wir suchen Verstärkung für unser Team"
      />
      <Container>
        <Card className={"mt-2"}>
          <Card.Header> Wen wir suchen</Card.Header>
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
                    Als Apotheker im Praktikum unterstützt du unsere Apotheker
                    bei der Bereitstellung von Arzneimitteln und bei der
                    Beratung von Patienten. Du sammelst Erfahrungen im Umgang
                    mit Medikamenten und lernst die
                    Apothekenbetriebsvorschriften kennen.
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
                    Als Raumpfleger bist du bei uns für die Reinigung von Räumen
                    zuständig. Du reinigst Böden, Oberflächen und sanitäre
                    Anlagen, entsorgst Abfälle und sorgst für eine hygienische
                    Umgebung.
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
                    Als Steuerfachangestellter unterstützt unseren Steuerberater
                    und Steuerfachwirte bei der Beratung von Unternehmen und
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
                className={"my-4"}
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
              <Card className="text-center">
                <Card.Header>Bewerbungen mit Lichtbild bitte an:</Card.Header>
                <Card.Body>
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
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Card.Body>
        <Card>
          <Card.Header>Was wir bieten</Card.Header>
          <Card.Body>
            {" "}
            <ul style={{ listStyle: "disc" }} className="rounded">
              <li>
                <p>
                  Ein angenehmes Arbeitsumfeld: In unserer Apotheke legen wir
                  großen Wert auf ein freundliches und kollegiales Miteinander.
                  Wir pflegen eine offene Kommunikation und unterstützen uns
                  gegenseitig bei der Arbeit.
                </p>
              </li>
              <li>
                <p>
                  Abwechslungsreiche Aufgaben: Als Apotheke bieten wir ein
                  breites Spektrum an Tätigkeiten, von der Beratung der Kunden
                  über die Herstellung von Arzneimitteln bis hin zur Verwaltung
                  der Apotheke. Bei uns wird es nie langweilig!
                </p>
              </li>
              <li>
                <p>
                  Fort- und Weiterbildungsmöglichkeiten: Wir unterstützen unsere
                  Mitarbeiterinnen und Mitarbeiter bei ihrer persönlichen und
                  beruflichen Entwicklung. Wir bieten regelmäßige Schulungen und
                  Fortbildungen an, damit jeder sein Wissen und seine
                  Fähigkeiten erweitern kann.
                </p>
              </li>
              <li>
                <p>
                  Eine faire Bezahlung: Wir legen Wert darauf, dass unsere
                  Mitarbeiterinnen und Mitarbeiter fair entlohnt werden. Wir
                  bieten eine angemessene Vergütung, die sich an den
                  Anforderungen der Stelle und der individuellen Qualifikation
                  orientiert.
                </p>
              </li>
              <li>
                <p>
                  Flexible Arbeitszeiten: Wir wissen, dass unsere
                  Mitarbeiterinnen und Mitarbeiter oft auch private
                  Verpflichtungen haben. Deshalb bieten wir flexible
                  Arbeitszeiten und versuchen, auf individuelle Wünsche
                  einzugehen.
                </p>
              </li>
              <li>
                <p>
                  Ein sicherer Arbeitsplatz: Als etablierte Apotheke sind wir
                  seit vielen Jahren erfolgreich am Markt tätig. Wir bieten
                  unseren Mitarbeiterinnen und Mitarbeitern einen sicheren
                  Arbeitsplatz und langfristige Perspektiven.
                </p>
              </li>
            </ul>
          </Card.Body>
        </Card>
      </Container>
      <Footer />
    </>
  );
}
