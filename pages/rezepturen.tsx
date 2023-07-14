import BSNav from "../components/BSNav";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import { Card } from "react-bootstrap";
import Section from "../components/Section";

export default function rezepturen() {
  const src = "/../public/images/classic-pharmacy.jpg";
  const alt = "bild";
  const text = "Alles für ihre Gesundheit";
  return (
    <>
      <BSNav />
      <Banner src={src} alt={alt} text={text} />
      <Section>
        Wir stellen Medikamente nach Bedarf verordnete Medikamente für sie her
      </Section>
      <Footer />
    </>
  );
}
