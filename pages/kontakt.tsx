import BSNav from "../components/BSNav";
import { Card } from "react-bootstrap";
import Footer from "../components/Footer";
import Section from "../components/Section";

export default function kontakt() {
  const src = "/../public/images/team.jpg";
  const alt = "image description";

  return (
    <>
      <BSNav />

      <Card className="mt-2">
        <Card.Header>Das sind wir</Card.Header>
        <Section>
          Affogato everyday carry gastropub portland snackwave pinterest
          chartreuse +1 biodiesel farm-to-table crucifix yuccie food truck.
          Williamsburg cupping vegan scenester jean shorts heirloom bushwick
          jawn migas post-ironic coloring book quinoa synth vinyl. Scenester
          cornhole irony selvage, forage gluten-free pabst pickled meggings
          live-edge shaman authentic venmo. Gastropub photo booth small batch
          chartreuse activated charcoal squid literally sustainable sus. Marfa
          schlitz crucifix wayfarers neutra raclette seitan hoodie adaptogen
          copper mug fam. Vape gentrify austin vice, man braid poutine bodega
          boys squid pinterest poke grailed before they sold out kogi. Gatekeep
          paleo authentic aesthetic.
        </Section>
      </Card>
      <Footer />
    </>
  );
}
