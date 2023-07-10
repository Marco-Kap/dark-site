import BSNav from "../components/BSNav";
import Img from "../components/Banner";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "public/css/style.css";
import { Card, Container } from "react-bootstrap";
import Section from "../components/Section";
import Footer from "../components/Footer";

export default function Home() {
  const src = "/../public/images/team.jpg";
  const alt = "image description";
  const section1 =
    " Snackwave semiotics edison bulb glossier salvia lo-fi, food truck.";
  const section2 =
    "Biodiesel solarpunk scenester snackwave pug stumptown thundercats cronut narwhal try-hard. Vexillologist +1 jean shorts truffaut, shabby";

  return (
    <>
      <BSNav />
      <Img source={src} alt={alt} text="Willkommen bei ihrer Ahorn-Apotheke" />
      <Container>
        <Section children={section1} />
        <Section children={section2} />
      </Container>
      <Footer />
    </>
  );
}
