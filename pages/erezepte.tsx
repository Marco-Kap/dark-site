import Banner from "../components/Banner";
import BSNav from "../components/BSNav";
import Footer from "../components/Footer";

export default function erezepte() {
  const src = "/../public/images/dna.jpg";
  const alt = "Bildbeschreibung";
  return (
    <>
      <BSNav />
      <Banner src={src} alt={alt} text="Wir sind E-Rezept Ready" />
      <Footer />
    </>
  );
}
