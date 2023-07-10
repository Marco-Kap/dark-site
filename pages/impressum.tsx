import BSNav from "../components/BSNav";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/Footer";

export default function impressum() {
  return (
    <>
      <BSNav />
      <Card style={{ margin: "2em", padding: "1em" }}>
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
                <h4>Zust&auml;ndige Apothekerkammer:</h4>
                <p>Landeskammer Hessen</p>
                <h4>Berufshaftpflichtversicherung:</h4>
                <br />
                <p>
                  some ensurance Company
                  <br />
                  some some street
                  <br />
                  34355 somewhere
                </p>
                <p>USt.-Id.-Nr. gem&aumlß § 18 Abs. 2 MStV: DE113129508</p>
                <h4>Zust&aumlndige Aufsichtsbeh&oumlrde:</h4>
                <a href="https://hlfgp.hessen.de">
                  <p>
                    Hessisches Landesamt f&uumlr Gesundheit und Pflege Postfach
                    2913 65019 Wießbaden
                  </p>
                </a>
                <h4>Stelle f&uumlr Streitbeilegung:</h4>
                <p>
                  <a href="www.universalschlichtungsstelle.de">
                    Universalschlichtungsstelle Zentrale f&uumlr Streitbeilegung
                    Stra&#223burgerstra&#223e 8 77694 Kehl
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
