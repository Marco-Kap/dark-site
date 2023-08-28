import BSNav from "../components/BSNav";
import Footer from "../components/Footer";
import { Card } from "react-bootstrap";
import Image from "next/image";
import Banner from "../components/Banner";

export default function leistungen() {
  const src = "/../public/images/famaly.jpg";
  const images = [
    "/../public/images/coffee.jpg",
    "/../public/images/coffee.jpg",
  ];
  return (
    <>
      <BSNav />
      <Banner text="Alles rund um ihre Gesundheit" source={src} alt="banner" />
      <div className="spacer" />

      <Footer />
    </>
  );
}
