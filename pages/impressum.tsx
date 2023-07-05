import BSNav from "../components/BSNav";
import Img from "../components/Img";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";

export default function impressum() {
  const src = "/../public/images/team.jpg";
  const alt = "image description";

  return (
    <>
      <BSNav />
      <Img source={src} alt={alt} />
      <Card></Card>
    </>
  );
}
