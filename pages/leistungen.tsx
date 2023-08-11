import BSNav from "../components/BSNav";
import Footer from "../components/Footer";
import { Card } from "react-bootstrap";
import Image from "next/image";

export default function leistungen() {
  const images = [
    "/images/coffee.jpg",
    "/../public/images/coffee.jpg",
    "/../public/images/coffee.jpg",
  ];
  return (
    <>
      <BSNav />

      <main className="row spacer">
        <Card className="col-md">
          <Card.Header>Beauty Beratung</Card.Header>
          <Card.Body>
            <Image src={images[1]} width={200} height={200} alt="kaffee" />
          </Card.Body>
          <Card.Footer></Card.Footer>
        </Card>{" "}
        <Card className="col-md">
          <Card.Header>Herstellung von Rezepturen</Card.Header>
          <Card.Body>
            <Image src={images[1]} width={200} height={200} alt="kaffee" />
          </Card.Body>
          <Card.Footer></Card.Footer>
        </Card>{" "}
        <Card className="col-md">
          <Card.Header>Ratgeber</Card.Header>
          <Card.Body>
            <Image src={images[1]} width={200} height={200} alt="kaffee" />
          </Card.Body>
          <Card.Footer>Sprachen</Card.Footer>
        </Card>{" "}
        <Card className="col-md">
          <Card.Header></Card.Header>
          <Card.Body>
            <Image src={images[1]} width={200} height={200} alt="kaffee" />
          </Card.Body>
          <Card.Footer>ipsum</Card.Footer>
        </Card>
      </main>
      <Footer />
    </>
  );
}
