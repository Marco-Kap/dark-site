import { Card } from "react-bootstrap";
import Banner from "../components/Banner";
import BSNav from "../components/BSNav";
import Footer from "../components/Footer";

export default function erezepte() {
  const src = "/../public/images/E-rezept-Handy-min-cut.jpg";
  const alt = "Banner E-Rezepte App";
  return (
    <>
      <BSNav />
      <Banner source={src} alt={alt} text="" fieldDisabled />
      <Card className="m-4 textcenter mt-2 pt-2">
        <p>
          Sie können bereits jetzt bei uns ein E-Rezept mit ihrer elektronischen
          Gesundheitskarte oder der App der Gematik einlösen.
        </p>
        <p>Bringen sie einfach ihre Gesundheitskarte, den mit der Gematik App generierten QR-Code oder einen Ausdruck zu uns vor Ort.</p>
        <p>Ab dem 01.01.2024 ist das E-Rezept verpflichtend, als bei uns registrierter Kunde haben sie allerdings eine weitere Möglichkeit.
        Sie ihren Arzt einfach anweisen uns in ihrem Namen ein Rezept zu übermitteln. Wir bearbeiten Diese und bereiten ihre Bestellung für sie vor.</p>
      </Card>
      <Footer />
    </>
  );
}
