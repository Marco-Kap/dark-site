import BSNav from "../components/BSNav";
import { Carousel } from "react-bootstrap";
import Section from "../components/Section";
import Footer from "../components/Footer";
import Image from "next/image";
import Banner from "../components/Banner";
import useMediaQuery from "../public/utils/useMediaQuery";
import Card from "../components/Card";

export default function Home() {
  const breakpoint = useMediaQuery(996);
  const src = "/../public/images/motherchild.jpg";
  const alt = "image description";
  const section1 =
    " Ihre Gesundheit liegt uns am Herzen, und wir freuen uns, Sie bei uns begrüßen zu dürfen. Als vertrauenswürdige Apotheke stehen wir Ihnen mit unserer langjährigen Erfahrung, Fachkompetenz und einem breiten Sortiment an Medikamenten und Gesundheitsprodukten zur Seite.";
  const section2 =
    "Bei uns finden Sie nicht nur eine große Auswahl an rezeptpflichtigen und rezeptfreien Arzneimitteln, sondern auch ein breites Spektrum an hochwertigen Gesundheitsprodukten, Nahrungsergänzungsmitteln, Naturheilmitteln und Kosmetikartikeln. Wir legen großen Wert auf Qualität und arbeiten nur mit renommierten Herstellern zusammen, um Ihnen Produkte anzubieten, denen Sie vertrauen können.";
  const images = [
    "/../public/images/Laborantin.jpg",
    "/../public/images/classic-beratung-standard.jpg",
    "/../public/images/lieferfahrer.jpg",
  ];
  return (
    <>
      <BSNav />
      <Banner
        source={src}
        alt={alt}
        text="Willkommen bei ihrer Ahorn-Apotheke"
      />

      <Section children={section1} />
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
              height={600}
              style={{ width: "100%", height: "auto" }}
            />
            <Carousel.Caption className="cc">
              Wir stellen Medizin nur für ihren Bedarf her
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
              height={600}
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
              height={600}
              style={{ width: "100%", height: "auto" }}
            />
            <Carousel.Caption className="cc">
              Lieferung bis nach Hause
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      ) : (
        <Card>
          <div className="row col mt-2">
            <div className="col">
              <Image
                src={images[0]}
                alt={"Laborantin"}
                width={600}
                height={400}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <div className="col-4">
              i am baby yoyo ba oil rreadnaouht you won´t know them
            </div>
          </div>

          <div className="row col mt-2">
            <div className="col">
              i am baby yoyo ba oil rreadnaouht you won´t know them
            </div>

            <div className="col-4">
              <Image
                src={images[1]}
                alt={"Laborantin"}
                width={600}
                height={400}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>

          <div className="col row mt-2">
            <div className="col-4">
              <Image
                src={images[2]}
                alt={"Laborantin"}
                width={600}
                height={400}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <div className="col-4">
              i am baby yoyo ba oil rreadnaouht you won´t know them
            </div>
          </div>
        </Card>
      )}
      <Section children={section2} />

      <Footer />
    </>
  );
}
