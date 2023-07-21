import Banner from "../components/Banner";
import BSNav from "../components/BSNav";
import {Card} from "react-bootstrap"
import Footer from "../components/Footer";
import Section from "../components/Section"

export default function erezepte() {
  const src = "/../public/images/dna.jpg";
  const alt = "Bildbeschreibung";
  return (
    <>
      <BSNav />
      
      <Banner source={src} alt={alt} text="Wir sind E-Rezept Ready" />
      <Section  >
        <Card.Header>Sie können bei uns vor Ort bereits ihre E-Rezepte einlösen.</Card.Header><Card.Body>Sie können einen Ausdruck des QR Codes von ihrem Arzt mitbringen, ihn mit der E-Rezept App der Gematik vorzeigen oder mit der elektronischen Gesundheitskarte ihre Rezeptdaten eingeben.</Card.Body></Section>
        <div style={{width: "20em", height: "auto"}}><a href='https://play.google.com/store/apps/details?id=de.gematik.ti.erp.app&hl=de&gl=US&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img alt='Jetzt bei Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/de_badge_web_generic.png'/></a></div>
      <Footer />
    </>
  );
}
