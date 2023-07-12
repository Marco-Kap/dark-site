import BSNav from "../components/BSNav";
import Banner from "../components/Banner";
import { Card, Container } from "react-bootstrap";
import Image from "next/image";
import Section from "../components/Section";
import Footer from "../components/Footer";

export default function verlosung() {
  const src = "/../public/images/dice.jpg";
  const alt = "image description";
  const images = [
    [
      "/../public/images/dice.jpg",
      "I'm baby mlkshk pug put a bird on it retro. Man braid viral cardigan, mumblecore migas vexillologist ugh. Ethical leggings tofu mustache four dollar toast keffiyeh pitchfork activated charcoal palo santo humblebrag. Chillwave umami deep v franzen iceland, normcore ",
    ],
    [
      "/../public/images/dice.jpg",
      "coloring book sus chambray. Cronut adaptogen normcore ramps everyday carry single-origin coffee fit hammock sriracha kinfolk glossier coloring book mlkshk microdosing.",
    ],
    [
      "/../public/images/dice.jpg",
      "eggings whatever prism echo park, trust fund small batch before they sold out vexillologist sus hot chicken. Yuccie meggings stumptown scenester hella, enamel pin kickstarter hammock big mood pug ramps snackwave. Swag cliche chartreuse bespoke la croix intelligentsia fit next level lumbersexual fingerstache ramps.",
    ],
  ];
  const section1 =
    " Preise! Bei Ihrer Treue ist es uns ein wichtiges Anliegen, Ihnen etwas zurückzugeben. Deshalb möchten wir Sie zu unserer aufregenden Verlosung einladen. Es gibt großartige Preise zu gewinnen, die Ihnen den Alltag erleichtern und Ihre Gesundheit fördern können. Hier ist, wie Sie an der Verlosung teilnehmen können: Kommen sie einfach bei uns vorbei und stimmen sie den Teilnahmebedingungen zu. Es ist nicht notwendig bei uns etwas gekauft zu haben um teilnehmen zu können. Wir möchten darauf hinweisen, dass die Teilnahmebedingungen auf unserer Webseite ausführlich erläutert sind. Bitte lesen Sie diese sorgfältig durch, um sicherzustellen, dass Sie alle Voraussetzungen erfüllen. Die Gewinner werden per Zufallsprinzip ausgewählt und von uns persönlich benachrichtigt. Die Preise umfassen dieses Mal hochwertige Handtücher und Bademäntel, sowie viele weitere Überraschungen. Die Frühlingsverlosung endet am [Datum]. Verpassen Sie also nicht die Chance, an diesem spannenden Event teilzunehmen und tolle Preise zu gewinnen! Wir wünschen Ihnen viel Glück und bedanken uns für Ihre Treue zu unserer Apotheke. Bei Fragen stehen wir Ihnen gerne zur Verfügung. Besuchen Sie uns auf unserer Webseite und entdecken Sie auch unsere weiteren Angebote und Services.";
  return (
    <>
      <BSNav />
      <Banner
        source={src}
        alt={alt}
        text="Gewinnen sie bei unserer Verlosung"
      />
      <Container>
        <Section children={section1} />
        {images.map((image) => (
          <div style={{ justifyContent: "center", display: "flex" }}>
            <Image
              src={image[0]}
              alt={"Verlosungsdummy1"}
              width={200}
              height={300}
              style={{ width: "100%", height: "100%" }}
            />
            <Card>{image[1]}</Card>
          </div>
        ))}
      </Container>
      <Footer />
    </>
  );
}
