import Banner from "../components/Banner";
import BSNav from "../components/BSNav";
import Card from "react-bootstrap"
import Footer from "../components/Footer";

export default function erezepte() {
  const src = "/../public/images/E-rezept-Handy-min.jpg";
  const alt = "Bildbeschreibung";
  return (
    <>
      <BSNav />

      <Banner source={src} alt={alt} text="Wir sind E-Rezept Ready" />
      <Footer />
    </>
  );
}
