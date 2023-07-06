import BSNav from "../components/BSNav";
import Img from "../components/Banner";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container } from "react-bootstrap";

export default function Home() {
  const src = "/../public/images/team.jpg";
  const alt = "image description";

  return (
    <>
      <BSNav />
      <Img source={src} alt={alt} />
      <Container className="mx-2">
        <Card>
          Biodiesel solarpunk scenester snackwave pug stumptown thundercats
          cronut narwhal try-hard. Vexillologist +1 jean shorts truffaut, shabby
          chic organic affogato meh chillwave portland polaroid tonx neutra
          sartorial hoodie. Tote bag blackbird spyplane woke, yuccie pabst
          leggings hammock edison bulb 8-bit thundercats. Celiac church-key tote
          bag, meggings retro fit synth etsy 3 wolf moon gluten-free iceland
          selvage kale chips shabby chic fingerstache. Adaptogen sriracha
          freegan yr keytar fashion axe.
        </Card>
        <Card>
          Snackwave semiotics edison bulb glossier salvia lo-fi, food truck
          ennui. Vibecession pour-over microdosing iceland artisan gatekeep.
          Roof party master cleanse ennui, hammock bicycle rights authentic
          austin praxis JOMO Brooklyn craft beer post-ironic farm-to-table.
          Solarpunk palo santo tilde celiac asymmetrical vaporware pork belly,
          poke lumbersexual. YOLO four dollar toast before they sold out, VHS
          venmo JOMO dreamcatcher neutra lumbersexual iPhone hammock selfies
          paleo. Locavore vinyl banh mi truffaut readymade marxism, kombucha
          blue bottle copper mug fit sustainable selvage neutral milk hotel big
          mood.
        </Card>
      </Container>
    </>
  );
}
