import BSNav from "../components/BSNav";
import Banner from "../components/Banner";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container } from "react-bootstrap";
import Image from "next/image";

export default function verlosung() {
  const src = "/../public/images/dice.jpg";
  const alt = "image description";

  return (
    <Container>
      <BSNav />
      <Banner source={src} alt={alt} />

      <Card className={"m-2"}>
        Nehmen Sie an unserer exklusiven Verlosung teil und gewinnen Sie tolle
        Preise! Bei Ihrer Treue ist es uns ein wichtiges Anliegen, Ihnen etwas
        zurückzugeben. Deshalb möchten wir Sie zu unserer aufregenden Verlosung
        einladen. Es gibt großartige Preise zu gewinnen, die Ihnen den Alltag
        erleichtern und Ihre Gesundheit fördern können. Hier ist, wie Sie an der
        Verlosung teilnehmen können: Kommen sie einfach bei uns vorbei und
        stimmen sie den Teilnahmebedingungen zu. Es ist nicht notwendig bei uns
        etwas gekauft zu haben um teilnehmen zu können. Wir möchten darauf
        hinweisen, dass die Teilnahmebedingungen auf unserer Webseite
        ausführlich erläutert sind. Bitte lesen Sie diese sorgfältig durch, um
        sicherzustellen, dass Sie alle Voraussetzungen erfüllen. Die Gewinner
        werden per Zufallsprinzip ausgewählt und von uns persönlich
        benachrichtigt. Die Preise umfassen dieses Mal hochwertige Handtücher
        und Bademäntel, sowie viele weitere Überraschungen. Die
        Frühlingsverlosung endet am [Datum]. Verpassen Sie also nicht die
        Chance, an diesem spannenden Event teilzunehmen und tolle Preise zu
        gewinnen! Wir wünschen Ihnen viel Glück und bedanken uns für Ihre Treue
        zu unserer Apotheke. Bei Fragen stehen wir Ihnen gerne zur Verfügung.
        Besuchen Sie uns auf unserer Webseite und entdecken Sie auch unsere
        weiteren Angebote und Services.
      </Card>
    </Container>
  );
}
