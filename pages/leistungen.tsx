import BSNav from "../components/BSNav";
import Footer from "../components/Footer";
import { Card } from "react-bootstrap";
import Image from "next/image";
import MyCard from "components/MyCard";

export default function leistungen() {
  const images = [
    "/../public/images/coffee.jpg",
    "/../public/images/coffee.jpg",
  ];
  return (
    <>
      <BSNav />

      <div className="spacer" />

      

      <Footer />
    </>
  );
}
