import Nav from "react-bootstrap/Nav";
import { Container, Card } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";

const Footer: React.FC = () => {
  return (
    <footer>
      <Card className="footer">
        <Card.Header>
          <Navbar className="justify-content-center footer  position-relative bottom-0 sticky-bottom translate-x-50 flex">
            <Container as="footer" className="row justify-content-">
              <Nav variant="tabs" className="justify-content-center">
                <Nav.Link
                  className="col-4-sm justify-self-center"
                  href={"/datenschutz"}
                >
                  Datenschutz
                </Nav.Link>

                <Nav.Link
                  className="col-4-sm justify-self-center"
                  href={"/impressum"}
                >
                  Impressum
                </Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </Card.Header>
      </Card>
    </footer>
  );
};

export default Footer;
