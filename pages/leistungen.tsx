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

      <Card>
        <Card.Header>lorem</Card.Header>
        <Card.Body>
          <Image src={images[1]} width={200} height={200} alt="kaffee" />
        </Card.Body>
        <Card.Footer>ipsum</Card.Footer>
      </Card>

      <Footer />
    </>
  );
}
