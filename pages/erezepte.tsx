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
      <div className="m-4 textcenter">
        <p>
          Sie können bereits jetzt bei uns ein E-Rezept mit ihrer elektronischen
          Gesundheitskarte oder der App der Gematik einlösen.
        </p>
      </div>
      <Footer />
    </>
  );
}
