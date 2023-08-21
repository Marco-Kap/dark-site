import BSNav from "../components/BSNav";
import { Carousel, Card, Container } from "react-bootstrap";
import Section from "../components/Section";
import Footer from "../components/Footer";
import Image from "next/image";
import useMediaQuery from "../public/utils/useMediaQuery";
import { useState } from "react";
import ScrollButton from "../components/ScrollButton";

export default function Home() {
  const breakpoint = useMediaQuery(996);
  const src = "/../public/images/ahornapo haus_zugeschnitten-min.png";
  const alt = "image description";
  const section1 =
    " Ihre Gesundheit liegt uns am Herzen, und wir freuen uns, Sie bei uns begrüßen zu dürfen. Als vertrauenswürdige Apotheke stehen wir Ihnen mit unserer langjährigen Erfahrung, Fachkompetenz und einem breiten Sortiment an Medikamenten und Gesundheitsprodukten zur Seite.";
  const section2 =
    "Bei uns finden Sie nicht nur eine große Auswahl an rezeptpflichtigen und rezeptfreien Arzneimitteln, sondern auch ein breites Spektrum an hochwertigen Gesundheitsprodukten, Nahrungsergänzungsmitteln, Naturheilmitteln und Kosmetikartikeln. Wir legen großen Wert auf Qualität und arbeiten nur mit renommierten Herstellern zusammen, um Ihnen Produkte anzubieten, denen Sie vertrauen können.";
  const images = [
    "/../public/images/Laborantin.jpg",
    "/../public/images/classic-beratung-standard.jpg",
    "/../public/images/lieferant.jpg",
  ];
  const handleOnClick = () => {
    window.scroll(0, 850);
  };
  return (
    <>
      <BSNav page="index" />
      {!breakpoint ? (
        <>
          {" "}
          <Container style={{ justifyContent: "center", display: "flex" }}>
            {" "}
            <Image
              src={src}
              width={420}
              height={300}
              alt="logo"
              style={{
                zIndex: "1",
                width: "90%",
                height: "auto",
                paddingBottom: "4em",
              }}
            />
          </Container>{" "}
          <ScrollButton onClick={handleOnClick} />
        </>
      ) : (
        <></>
      )}
      <Card>
        <Card.Header style={{ textAlign: "center" }}>
          <h2>Willkommen bei ihrer Ahorn-Apotheke</h2>
        </Card.Header>
      </Card>
      <Section children={section2} />

      {breakpoint ? (
        <Carousel style={{ margin: "2em" }} slide={false} fade>
          <Carousel.Item
            style={{
              justifyContent: "center",
              display: "flex",
            }}
          >
            <Image
              src={images[0]}
              alt={"Laborantin"}
              width={400}
              height={320}
              style={{ width: "100%", height: "auto" }}
            />
            <Carousel.Caption className="cc">
              Wir stellen Medizin nur für ihren individuellen Bedarf her
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item
            style={{
              justifyContent: "center",
              display: "flex",
            }}
          >
            <Image
              src={images[1]}
              alt={"Beratung"}
              width={400}
              height={320}
              style={{ width: "100%", height: "auto" }}
            />
            <Carousel.Caption className="cc">
              Hier werden sie ganz persönlich beraten
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item
            style={{
              justifyContent: "center",
              display: "flex",
            }}
          >
            <Image
              src={images[2]}
              alt={"Lieferung"}
              width={400}
              height={320}
              style={{ width: "100%", height: "auto" }}
            />

            <Carousel.Caption className="cc">
              Wir liefen bis nach Hause
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      ) : (
        <Section>
          <div className="row col mt-2">
            <div className="col">
              <Image
                src={images[1]}
                alt={"Beratung"}
                width={600}
                height={400}
                style={{ width: "100%", height: "auto", borderRadius: "2%" }}
              />
            </div>
            <div className="col px-4">
              <p>
                {" "}
                Unsere erfahrenen Apotheker und Apothekerinnen stehen Ihnen mit
                ihrem Fachwissen zur Seite und beraten Sie individuell zu Ihren
                Medikamenten und Gesundheitsprodukten.{" "}
              </p>
              <p>
                Unsere Apotheker und Apothekerinnen geben Ihnen Empfehlungen zu
                einer ausgewogenen Ernährung und informieren Sie über sinnvolle
                Nahrungsergänzungsmittel, die Ihre Gesundheit unterstützen
                können.
              </p>
              <p>
                Ob Kopfschmerzen, Erkältung oder Magenprobleme - wir bieten
                Ihnen eine breite Palette von rezeptfreien Medikamenten und
                Gesundheitsprodukten, die speziell auf Ihre Bedürfnisse
                abgestimmt sind.
              </p>{" "}
            </div>
          </div>

          <div className="row col mt-4">
            <div className="col px-2">
              <p>
                {" "}
                Bei uns ist Ihre Gesundheit unsere oberste Priorität, und wir
                möchten Ihnen den bestmöglichen Service bieten. Deshalb freuen
                wir uns, Ihnen unsere kostenlose Medikamentenlieferung
                anzubieten, um Ihre Bedürfnisse und Anforderungen noch besser zu
                erfüllen.
              </p>
              <p>
                Ihre Gesundheit ist uns wichtig, und wir möchten Ihnen mit
                unserem Lieferservice den Alltag erleichtern. Nutzen Sie unseren
                kostenlosen Lieferservice für Ihre Medikamente und
                Gesundheitsprodukte. Wir freuen uns darauf, Ihnen diesen
                besonderen Service bieten zu können und sind für Sie da, um Ihre
                Gesundheit und Ihr Wohlbefinden zu unterstützen.
              </p>{" "}
            </div>

            <div className="col">
              <Image
                src={images[2]}
                alt={"Lieferung"}
                width={600}
                height={400}
                style={{ width: "100%", height: "auto", borderRadius: "1%" }}
              />
            </div>
          </div>

          <div className="col row mt-4">
            <div className="col">
              <Image
                src={images[0]}
                alt={"Laborantin"}
                width={600}
                height={400}
                style={{ width: "100%", height: "auto", borderRadius: "2%" }}
              />
            </div>
            <div className="col-8">
              <p>
                {" "}
                Die individuelle Herstellung von Medikamenten ermöglicht es uns,
                auf spezielle Bedürfnisse einzugehen, wie z. B. die Anpassung
                der Dosierung oder die Vermeidung von Unverträglichkeiten. Dies
                bietet Ihnen eine maßgeschneiderte Behandlung, die Ihren
                individuellen Gesundheitszustand berücksichtigt. Unsere
                erfahrenen Apotheker und Apothekerinnen nutzen ihr umfangreiches
                pharmazeutisches Wissen, um individuell angepasste Medikamente
                herzustellen. Dabei arbeiten wir eng mit Ihrem Arzt zusammen, um
                sicherzustellen, dass die hergestellten Medikamente genau auf
                Ihre Bedürfnisse abgestimmt sind.
              </p>
            </div>
          </div>
        </Section>
      )}
      {/* <Section children={section2} />*/}

      <Footer />
    </>
  );
}
