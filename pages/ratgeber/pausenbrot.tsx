import BSNav from "../../components/BSNav"
import Banner from "../../components/Banner"
import Footer from "../../components/Footer"
import {Image, Container} from "react-bootstrap"

export default function pausenbrot() {
    const src = "/images/fruits.jpg"
    return(
<>
        <BSNav/>
      <Container>  <Banner source={src} alt="bild" fieldDisabled />
<main className="gtext textcenter">


       
           <p> Von <a href="https://www.mylife.de/autoren/">Miriam Steinbach</a>
, Redakteurin der myLife
und 
<a href="https://www.mylife.de/autoren/"> Martina Feichter</a>, Medizinredakteurin der myLife und Biologin
8. Dezember 2022<br/>
<p>Ein gesundes Pausenbrot ist wichtig, damit Ihr Kind voller Energie durch den Schultag kommt. Von knackigem Gemüse bis hin zu einem Vollkornbrot mit Käse ist alles erlaubt, was wichtige Nährstoffe für die Heranwachsenden liefert. Lesen Sie hier verschiedene Ideen für ein gesundes Pausenbrot und auf was Sie verzichten sollten.
</p>


        </p></main></Container><Footer/></>
    )
}