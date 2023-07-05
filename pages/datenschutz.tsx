import BSNav from "../components/BSNav";
import Img from "../components/Img";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";

export default function datenschutz() {
  const src = "/../public/images/team.jpg";
  const alt = "image description";

  return (
    <>
      <BSNav />
      <Img source={src} alt={alt} />
      <Card>
        Photo booth distillery cronut slow-carb offal prism. 3 wolf moon paleo
        kickstarter tumblr literally brunch gochujang bruh butcher banh mi
        helvetica disrupt microdosing same. Viral portland knausgaard, craft
        beer pitchfork stumptown fixie butcher marfa banjo cloud bread. Master
        cleanse sustainable pour-over, heirloom chia venmo meggings blue bottle
        portland keytar meh marfa man braid pop-up keffiyeh. Echo park affogato
        tousled roof party narwhal YOLO. Dummy text? More like dummy thicc text,
        amirite?
      </Card>
    </>
  );
}
