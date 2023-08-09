import BSNav from "../components/BSNav";
import MyCard from "../components/MyCard";
import Footer from "../components/Footer";
import { Grid } from "react-bootstrap";

export default function leistungen() {
  const images = ["/../public/images/coffee.jpg"];
  return (
    <>
      <BSNav />
      <div className="row">
      <MyCard
      className="col"
        content="hallo"
        src={images[0]}
        title="Persönliche Beratung"
        alt="bild"
        id={0}
      ></MyCard>
      <MyCard className="col"
        content="hallo"
        src={images[0]}
        title="Hautpflege und Beautyprodukte"
        alt="bild"
        id={0}
      ></MyCard>{" "}
      <MyCard className="col"
        content="hallo"
        src={images[0]}
        title="Herstellung von Rezepturen"
        alt="bild"
        id={0}
      >
        </div>
      </MyCard>
      <Footer />
      {/**Cards for Services
        Beautity Products/Skin Care () */}
    </>
  );
}
