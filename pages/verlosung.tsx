import BSNav from "../components/BSNav";
import Banner from "../components/Banner";
import { Card, Container } from "react-bootstrap";
import Image from "next/image";
import Section from "../components/Section";
import Footer from "../components/Footer";

export default function verlosung() {
  const src = "/../public/images/dice.jpg";
  const alt = "image description";
  const image = [
    "/../public/images/Velours-orange(no-bg.png",
    "/../public/images/muetze-schal-decke(freigestellt).png",
  ];

  const text = [
    "Es gibt viele tolle Preise! Bei Ihrer Treue ist es uns ein wichtiges Anliegen, Ihnen etwas zurückzugeben. Deshalb möchten wir Sie zu unserer aufregenden Verlosung einladen. Es gibt großartige Preise zu gewinnen, die Ihnen den Alltag erleichtern und Ihre Gesundheit fördern können. Hier ist, wie Sie an der Verlosung teilnehmen können: Kommen sie einfach bei uns vorbei und stimmen sie den Teilnahmebedingungen zu. Es ist nicht notwendig bei uns etwas gekauft zu haben um teilnehmen zu können. Wir möchten darauf hinweisen, dass die Teilnahmebedingungen auf unserer Webseite ausführlich erläutert sind. Bitte lesen Sie diese sorgfältig durch, um sicherzustellen, dass Sie alle Voraussetzungen erfüllen. Die Gewinner werden per Zufallsprinzip ausgewählt und von uns persönlich benachrichtigt. Die Preise umfassen dieses Mal hochwertige Handtücher und Bademäntel, sowie viele weitere Überraschungen. Die Frühlingsverlosung endet am [Datum]. Verpassen Sie also nicht die Chance, an diesem spannenden Event teilzunehmen und tolle Preise zu gewinnen! ",
    "Wir wünschen Ihnen viel Glück und bedanken uns für Ihre Treue zu unserer Apotheke. Bei Fragen stehen wir Ihnen gerne zur Verfügung. Besuchen Sie uns auf unserer Webseite und entdecken Sie auch unsere weiteren Angebote und Services.",
  ];
  return (
    <>
      <BSNav />
      <Banner
        source={src}
        alt={alt}
        text="Gewinnen sie bei unserer Verlosung"
      />
      <Section>
        {" "}
        "Wir wünschen Ihnen viel Glück und bedanken uns für Ihre Treue zu
        unserer Apotheke. Bei Fragen stehen wir Ihnen gerne zur Verfügung.
        Besuchen Sie uns auf unserer Webseite und entdecken Sie auch unsere
        weiteren Angebote und Services.",
      </Section>
      <Card>
        <div className="row text-center">
          <div className="col-4">
            <Image
              src={image[0]}
              alt={"Handtuch"}
              width={200}
              height={300}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="col-6">place</div>
        </div>
      </Card>
      <Container className="align-items-center justify-content-center m-6">
        <Section children={text[1]} />
        <Image
          src={image[1]}
          alt={"Luxus Decke und Schal"}
          width={200}
          height={300}
          style={{ width: "100%", height: "100%" }}
        />
      </Container>
      <Footer />
    </>
  );
}
