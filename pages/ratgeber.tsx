import BSNav from "components/BSNav";
import Footer from "components/Footer";
import Banner from "components/Banner";
import { Card, Container, Row, Col } from "react-bootstrap";

export default function Ratgeber() {
  const src = "/../public/images/motherchild.jpg";
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
        source={src}
        alt="Wissen was gesund macht"
        text="Wissen was gesund macht"
      />
      <div className="spacer" aria-disabled="true" />
      <Container>
        {" "}
        <Row xs={1} md={2} className="g-4">
          <Col>
            <Card>
              {" "}
              <Card.Title>Card title</Card.Title>
              <Card.Img variant="top" src={images[0]} />
              <Card.Body>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              {" "}
              <Card.Title>Card title</Card.Title>
              <Card.Img variant="top" src={images[1]} />
              <Card.Body>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>{" "}
          <Col>
            <Card>
              {" "}
              <Card.Title>Card title</Card.Title>
              <Card.Img variant="top" src={images[2]} />
              <Card.Body>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>{" "}
          <Col>
            <Card>
              {" "}
              <Card.Title>Card title</Card.Title>
              <Card.Img variant="top" src={images[3]} />
              <Card.Body>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
