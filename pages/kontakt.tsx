import BSNav from "../components/BSNav";
import { Card } from "react-bootstrap";
import Footer from "../components/Footer";
import Section from "../components/Section";

export default function kontakt() {
  const src = "/../public/images/team.jpg";
  const alt = "image description";

  return (
    <>
      <BSNav />

      <Card className="mt-4 textCenter">
        <Card.Header>Wir freuen uns darauf, von Ihnen zu hören!</Card.Header>
        <Section>
          Kontaktieren sie uns! Bei Fragen, Anliegen oder Feedback stehen wir
          Ihnen jederzeit zur Verfügung. Hier finden Sie verschiedene
          Möglichkeiten, um mit uns in Kontakt zu treten: Besuchen Sie uns vor
          Ort, rufen sie uns an oder schicken sie uns eine E-Mail.
        </Section>{" "}
        <Section>
          <div>
            
            <h4>Öffnungszeiten:</h4>
            Montag bis Freitag: 8:00 - 18:30
            <br /> Samstag: 8:00 -13:30
          </div>
        </Section><div className="gText">
        <span>Bahnstraße 7</span><br/>
        <span>34497 Korbach</span><br/>
        <span style={{ whiteSpace: "nowrap" }}>

          <a style={{ color: "grey", margin: "0.3em" }} href="tel:056314040">
            05631 4040
          </a>
        </span><br/>
        <span>
          <a
            style={{ color: "grey", margin: "0.3em" }}
            href="mailto:email@ahornapo.de"
          >
            email@ahornapo.de
          </a>
        </span></div>
        <Section>
          Ihre Gesundheit liegt uns am Herzen, und wir sind gerne für Sie da.
          Zögern Sie nicht, uns zu kontaktieren!
        </Section>
      </Card>
      <Footer />
    </>
  );
}
