import BSNav from "../components/BSNav";
import Footer from "../components/Footer";
import { Card } from "react-bootstrap";
import Image from "next/image";
import MyCard from "components/MyCard";

export default function leistungen() {
  const images = [
    "/../public/images/coffee.jpg",
    "/../public/images/coffee.jpg",
  ];
  return (
    <>
      <BSNav />

      <div className="spacer" />

      <MyCard></MyCard>
      {/* <main className="row mx-4">
        <div className="col-lg row">
          <Card className="col-md">
            <Card.Header>Schwerpunkt Haut</Card.Header>
            <Card.Body>
              <ul>
                <li>Hautpflege</li>
                <li>Bepanthol</li>
                <li>Vichy</li>
                <li>La Roche</li>
              </ul>
              <Image src={images[1]} width={200} height={200} alt="kaffee" />
            </Card.Body>
            <Card.Footer></Card.Footer>
          </Card>
        </div>{" "}
        <div className="row col-lg">
          <Card className="col-md">
            <Card.Header>Herstellung von Rezepturen</Card.Header>
            <Card.Body>
              <Image src={images[1]} width={200} height={200} alt="kaffee" />
            </Card.Body>
            <Card.Footer></Card.Footer>
          </Card>
        </div>{" "}
        <div className="row col-lg">
          <Card className="col-md">
            <Card.Header>Zahlungsarten</Card.Header>
            <Card.Body>
              <ul>
                <li>Barzahlung</li>
                <li>EC-Karte</li>
                <li>Kauf auf Rechnung</li>
              </ul>
              <Image src={images[1]} width={200} height={200} alt="kaffee" />
            </Card.Body>
            <Card.Footer></Card.Footer>
          </Card>
        </div>{" "}
        <div className="col-lg row">
          <Card className="col-md">
            <Card.Header>Ratgeber</Card.Header>
            <Card.Body>
              <Image src={images[1]} width={200} height={200} alt="kaffee" />
            </Card.Body>
            <Card.Footer></Card.Footer>
          </Card>
        </div>{" "}
        <div className="col-lg row">
          <Card className="col-md">
            <Card.Header>Sprachen</Card.Header>
            <Card.Body>
              {" "}
              <ul className="col-md">
                <li>Deutsch</li>
                <li>Englisch</li>
              </ul>
              <Image src={images[1]} width={200} height={200} alt="kaffee" />
            </Card.Body>
            <Card.Footer></Card.Footer>
          </Card>
        </div>
      </main>*/}
      {/* <div className="services" />*/}

      <Footer />
    </>
  );
}
