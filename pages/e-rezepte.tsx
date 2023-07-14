import Banner from "../../components/Banner"
import Footer from "../components/Footer"
import BSNav from "../components/BSNav"
import Section from "../components/Section"

export default function e-rezepte() {
const alt = "Bildbeschreibung"
const src = "/../public/images/dice.jpg";
const text = "Wir sind E-Rezept Ready"

return (
<BSNav />
<Banner src={src} alt={alt} text={text}/>
<Section>Sie können ihre E-Rezepte bei uns einscannen lassen</Section>    <Footer/>)
}