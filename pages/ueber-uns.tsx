import BSNav from "../components/BSNav";
import Img from "../components/Img";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";

export default function ueberuns() {
  const src = "/../public/images/team.jpg";
  const alt = "image description";

  return (
    <>
      <BSNav />
      <Img source={src} alt={alt} />
      <Card>
        Biodiesel solarpunk scenester snackwave pug stumptown thundercats cronut
        narwhal try-hard. Vexillologist +1 jean shorts truffaut, shabby chic
        organic affogato meh chillwave portland polaroid tonx neutra sartorial
        hoodie. Tote bag blackbird spyplane woke, yuccie pabst leggings hammock
        edison bulb 8-bit thundercats. Celiac church-key tote bag, meggings
        retro fit synth etsy 3 wolf moon gluten-free iceland selvage kale chips
        shabby chic fingerstache. Adaptogen sriracha freegan yr keytar fashion
        axe.
      </Card>
    </>
  );
}
