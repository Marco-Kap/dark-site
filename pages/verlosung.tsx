import BSNav from "../components/BSNav";
import Img from "../components/Img";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";

export default function verlosung() {
  const src = "/../public/images/team.jpg";
  const alt = "image description";

  return (
    <>
      <BSNav />
      <Img source={src} alt={alt} />
      <Card>
        Poutine normcore pour-over portland, church-key palo santo vinyl
        vibecession etsy gorpcore lo-fi cornhole quinoa poke. Squid succulents
        vice fashion axe. Authentic iPhone XOXO cupping polaroid mukbang subway
        tile air plant snackwave flannel. Tousled man bun everyday carry godard
        lumbersexual. Edison bulb man braid shaman DIY viral waistcoat.
      </Card>
    </>
  );
}
