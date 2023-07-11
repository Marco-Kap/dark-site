import BSNav from "../components/BSNav";
import Img from "../components/Banner";
import { Card, Container } from "react-bootstrap";
import Section from "../components/Section";
import Footer from "../components/Footer";

export default function Home() {
  const src = "/../public/images/team.jpg";
  const alt = "image description";
  const section1 =
    " Ihre Gesundheit liegt uns am Herzen, und wir freuen uns, Sie bei uns begrüßen zu dürfen. Als vertrauenswürdige Apotheke stehen wir Ihnen mit unserer langjährigen Erfahrung, Fachkompetenz und einem breiten Sortiment an Medikamenten und Gesundheitsprodukten zur Seite.";
  const section2 =
    "Bei uns finden Sie nicht nur eine große Auswahl an rezeptpflichtigen und rezeptfreien Arzneimitteln, sondern auch ein breites Spektrum an hochwertigen Gesundheitsprodukten, Nahrungsergänzungsmitteln, Naturheilmitteln und Kosmetikartikeln. Wir legen großen Wert auf Qualität und arbeiten nur mit renommierten Herstellern zusammen, um Ihnen Produkte anzubieten, denen Sie vertrauen können.";

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
