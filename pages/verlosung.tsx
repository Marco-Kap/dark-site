import BSNav from "../components/BSNav";
import Banner from "../components/Banner";
import { Card, Container } from "react-bootstrap";
import Image from "next/image";
import Section from "../components/Section";
import Footer from "../components/Footer";
import Carousel from "react-bootstrap/Carousel";
import useMediaQuery from "../public/utils/useMediaQuery";

export default function verlosung() {
  const breakpoint = useMediaQuery(996);
  const src = "/../public/images/dice.jpg";
  const alt = "image description";
  const image = [
    "/../public/images/Velours-orange(no-bg.png",
    "/../public/images/Bademantel, orange 3-min.png",
    "/../public/images/Bademantel, rot-min.png",
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

      <Container>
        <Section>
          {" "}
          Es gibt viele tolle Preise! Bei Ihrer Treue ist es uns ein wichtiges
          Anliegen, Ihnen etwas zurückzugeben. Deshalb möchten wir Sie zu
          unserer aufregenden Verlosung einladen. Es gibt großartige Preise zu
          gewinnen, die Ihnen den Alltag erleichtern und Ihre Gesundheit fördern
          können. Und so können sie an der Verlosung teilnehmen: Kommen sie
          einfach bei uns vorbei und stimmen sie den Teilnahmebedingungen zu. Es
          ist nicht notwendig bei uns etwas gekauft zu haben um teilnehmen zu
          können. Die Gewinner werden per Zufallsprinzip ausgewählt und von uns
          per Brief oder E-Mail benachrichtigt. Die Preise umfassen dieses Mal
          hochwertige Handtücher und Bademäntel, sowie viele weitere
          Überraschungen. Verpassen Sie also nicht die Chance, an diesem
          spannenden Event teilzunehmen und tolle Preise zu gewinnen!{" "}
        </Section>
        {breakpoint ? (
          <Carousel fade>
            <Carousel.Item
              style={{
                justifyContent: "center",
                display: "flex",
              }}
            >
              <Image
                src={image[0]}
                alt={"Handtuch"}
                width={600}
                height={400}
                style={{ width: "100%", height: "auto" }}
              />
              <Carousel.Caption>
                {/*Hier ist kann man Titel reinschreiben */}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item
              style={{
                justifyContent: "center",
                display: "flex",
              }}
            >
              <Image
                src={image[1]}
                alt={"Bademantel in rot"}
                width={600}
                height={400}
                style={{ width: "10em", height: "auto" }}
              />

              <Carousel.Caption>
                {/*Hier ist kann man Titel reinschreiben */}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item
              style={{
                justifyContent: "center",
                display: "flex",
              }}
            >
              <Image
                src={image[2]}
                alt={"Bademantel in orange"}
                width={600}
                height={400}
                style={{ width: "10em", height: "auto" }}
              />
              <Carousel.Caption>
                {/*Hier ist kann man Titel reinschreiben */}
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        ) : (
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <Image
              src={image[0]}
              alt={"Handtuch"}
              width={600}
              height={400}
              style={{ width: "16em", height: "auto" }}
            />
            <Image
              src={image[2]}
              alt={"Bademantel in orange"}
              width={600}
              height={400}
              style={{ width: "10em", height: "auto" }}
            />
            <Image
              src={image[1]}
              alt={"Bademantel in rot"}
              width={600}
              height={400}
              style={{ width: "10em", height: "auto" }}
            />{" "}
          </div>
        )}{" "}
        <Section>
          Die Preise der Herbstverlosung 2022 können noch abgeholt werden, aber
          aufgrund des hohen Zuspuchs ist nicht mehr die volle Farbauswahl
          verfügbar.
        </Section>
        <Container className="align-items-center justify-content-center m-6">
          <Image
            src={image[3]}
            alt={"Luxus Decke und Schal"}
            width={800}
            height={600}
            style={{ width: "100%", height: "100%" }}
          />
        </Container>
        <Footer />
      </Container>
    </>
  );
}
