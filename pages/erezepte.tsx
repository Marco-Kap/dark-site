import { Container } from "react-bootstrap";
import Banner from "../components/Banner";
import BSNav from "../components/BSNav";
import Footer from "../components/Footer";

export default function erezepte() {
  const src = "/../public/images/E-rezept-Handy-min.jpg";
  const alt = "Banner E-Rezepte App";
  return (
    <Container>
      <BSNav />
      <Banner source={src} alt={alt} text="Wir sind E-Rezept Ready" />
      <Footer />
    </Container>
  );
}
