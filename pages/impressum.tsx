import BSNav from "../components/BSNav";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import Footer from "../components/Footer";

export default function impressum() {
  return (
    <>
      <BSNav />
      <Card style={{ margin: "2em", marginTop: "8em", padding: "1em" }}>
        <div className="row">
          <div className="col">
            <h2>Impressum</h2>
            <div className="row">
              <b>
                <p>
                  Ahorn-Apotheke, Carl Stede, Inhaberin Sabine Greven
                  <br />
                  Bahnstraße 7<br />
                  34497 Korbach
                </p>
              </b>
              <div className="col">
                <h4>Inhaberin</h4>
                <h6>Sabine Greven e.k.</h6>
                <h4>Kontakt</h4>
                <p>
                  <a href="mailto:email@ahoapo?subject=Kundenfeedback">
                    Email-adresse: email@ahornapo.de
                  </a>
                </p>
                <p>
                  <a href="tel: 05631/ 4040"> Telefonnummer: 05631/ 4040</a>
                </p>
                <p>Fax: 05631/ 4040 44</p>
                <br />
                <h4>Berufsbezeichnung</h4>
                <p>Apothekerin mit Studium in Deutschland</p>
                <h4>Eintragung im Handelsregister</h4>
                <p>Amtsgericht Korbach unter 1HRA 440</p>
                <h4>Bildmaterial</h4>
                <p>https://pexels.com</p>
              </div>
              <div className="col">
                <h4>Zuständige Apothekerkammer:</h4>
                <p>Landeskammer Hessen</p>
                <h4>Berufshaftpflichtversicherung:</h4>
                <br />
                <p>
                  R+V Allgemeine Versicherungen AG
                  <br />
                  Raiffeisenplatz 1
                  <br />
                  65189 Wiesbaden
                </p>
                <p>USt.-Id.-Nr. gemäß § 18 Abs. 2 MStV: DE113129508</p>
                <h4>Zuständige Aufsichtsbehörde:</h4>
                <a href="https://hlfgp.hessen.de">
                  <p>
                    Hessisches Landesamt für Gesundheit und Pflege Postfach 2913
                    65019 Wießbaden
                  </p>
                </a>
                <h4>Stelle für Streitbeilegung:</h4>
                <p>
                  <a href="www.universalschlichtungsstelle.de">
                    Universalschlichtungsstelle Zentrale für Streitbeilegung
                    Straßburgerstraße 8 77694 Kehl
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>
      <Footer />
    </>
  );
}
