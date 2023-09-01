import BSNav from "../components/BSNav";
import Footer from "../components/Footer";
import { Card, Container, CardGroup, Col, Row, } from "react-bootstrap";
import Image from "next/image";
import Banner from "../components/Banner";

export default function leistungen() {
  const src = "/../public/images/famaly.jpg";
  const images = [
    "/images/billing-300x200.jpeg",
    "/images/language-300x200.jpeg",
    "/images/mortar.jpg",
    "/images/skincare-640x420.jpg",
    "/images/coffee.jpg",
  ];

  return (
    <>
      <BSNav />
      <Banner
        alt="banner"
        source={src}
        text="Alles für ihre Gesundheit"
      />
      <Container className="mt-4">
        {" "}
        <Row xs={1} md={2} className="g-4">
          <Col>
            <Card>
              {" "}
              <Card.Header className="bg-light">Sprachen</Card.Header>
              <Card.Img className="p-2 rounded" variant="top" src={images[1]} />
              <Card.Body>
                <Card.Text>
                <ul>
                  <li>Deutsch</li>
                  <li>Englisch</li>
                  <li>Russisch</li>
                </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              {" "}
              <Card.Header className="bg-light">Zahlungsarten</Card.Header>
              <Card.Img className="p-2 rounded" variant="top" src={images[0]} />
              <Card.Body>
                <Card.Text>
                <ul>
                  <li>Barzahlung</li>
                  <li>EC-Karte</li>
                  <li>Rechnungskauf</li>
                </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>{" "}
          <Col>
            <Card>
              {" "}
              <Card.Header className="bg-light">Schwerpunkt Haut</Card.Header>
              <Card.Img className="p-2 rounded" variant="top" src={images[3]} />
              <Card.Body>
                <Card.Text>
                <ul>
                  <li>Vichy</li>
                  <li>Roche</li>
                  <li>L`Oreal</li>
                </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>{" "}
          <Col>
            <Card>
              {" "}
              <Card.Header className="bg-light">Eigenherstellung</Card.Header>
              <Card.Img className="p-2 rounded" variant="top" src={images[2]} />
              <Card.Body>
                <Card.Text>
<ul><li></li><li></li></ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      {/* <Container>
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
      </Container> */}
      <Footer />
    </>
  );
}
