import BSNav from "../components/BSNav";
import Footer from "../components/Footer";
import { Card, Container, CardGroup } from "react-bootstrap";
import Image from "next/image";
import Banner from "../components/Banner";

export default function leistungen() {
  const src = "/../public/images/famaly.jpg";
  const images = [
    "/images/fruits.jpg",
    "/images/lieferant.jpg",
    "/images/classic-pharmacy.jpg",
    "/images/black-dice.jpg",
    "/images/coffee.jpg",
  ];

  return (
    <>
      <BSNav />
      <Banner
        text=""
        alt="banner"
        source={src}
        text="Alles für ihre Gesundheit"
      />
      <div className="spacer" aria-disabled="true" />
      <Container>
        <CardGroup>
          <Card>
            <Card.Header>Sprachen</Card.Header>
            <Card.Img variant="top" src={images[0]} />
            <Card.Body>
              <Card.Text>
                <ul>
                  <li>Deutsch</li>
                  <li>Englisch</li>
                  <li>Russisch</li>
                </ul>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            {" "}
            <Card.Header>Zahlungsarten</Card.Header>
            <Card.Img variant="top" src={images[1]} />
            <Card.Body>
              <Card.Text>
                <ul>
                  <li>Barzahlung</li>
                  <li>EC-Karte</li>
                  <li>Rechnungskauf</li>
                </ul>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">
                Beachten sie die Hinweise unserer Mitarbeiterinnen vor Ort
              </small>
            </Card.Footer>
          </Card>
          <Card>
            {" "}
            <Card.Header>Schwerpunkt Haut</Card.Header>
            <Card.Img variant="top" src={images[2]} />
            <Card.Body>
              <Card.Text>
                <ul>
                  <li>Vichy</li>
                  <li>Roche</li>
                  <li>LÓreal</li>
                </ul>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            {" "}
            <Card.Header>Schwerpunkt Haut</Card.Header>
            <Card.Img variant="top" src={images[2]} />
            <Card.Body>
              <Card.Text>
                <ul>
                  <li>Vichy</li>
                  <li>Roche</li>
                  <li>LÓreal</li>
                </ul>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            {" "}
            <Card.Header>Eigenherstellung</Card.Header>
            <Card.Img variant="top" src={images[2]} />
            <Card.Body>
              <Card.Text>
                <ul>
                  <li>Vichy</li>
                  <li>Roche</li>
                  <li>LÓreal</li>
                </ul>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardGroup>
      </Container>
      <Footer />
    </>
  );
}
