import BSNav from "../components/BSNav";
import Banner from "../components/Banner";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";

export default function kontakt() {
  const src = "/../public/images/team.jpg";
  const alt = "image description";

  return (
    <>
      <BSNav />
      <Banner source={src} alt={alt} />
      <Card className="mx-4">
        Affogato everyday carry gastropub portland snackwave pinterest
        chartreuse +1 biodiesel farm-to-table crucifix yuccie food truck.
        Williamsburg cupping vegan scenester jean shorts heirloom bushwick jawn
        migas post-ironic coloring book quinoa synth vinyl. Scenester cornhole
        irony selvage, forage gluten-free pabst pickled meggings live-edge
        shaman authentic venmo. Gastropub photo booth small batch chartreuse
        activated charcoal squid literally sustainable sus. Marfa schlitz
        crucifix wayfarers neutra raclette seitan hoodie adaptogen copper mug
        fam. Vape gentrify austin vice, man braid poutine bodega boys squid
        pinterest poke grailed before they sold out kogi. Gatekeep paleo
        authentic aesthetic.
      </Card>
    </>
  );
}
