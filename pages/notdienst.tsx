import BSNav from "../components/BSNav";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import Footer from "../components/Footer";

const date = new Date();
export default function notdienst() {
  // Pharmacies
  const pharmacies = [
    "Wir haben Notdienst", //Notdienst: Ahornapotheke
    "Notdienst: Apotheke Am Berndorfer Tor",
    "Notdienst: Bären-Apotheke",
    "Notdienst: Eisenberg-Apotheke",
    "Notdienst: Adler Apotheke Sachsenhausen",
    //'Kilian Apotheke', is closed
    "Notdienst: Hirsch-Apotheke",
    "Notdienst: Stern-Apotheke",
    "Notdienst: Edersee-Apotheke Vöhl",
  ];

  const d = new Date();
  //set a static start Date
  const startDate = new Date("2023-05-01"); // Calculate the number of days elapsed since the start of the year
  const day = d.getDay();
  const yearStart = new Date(d.getFullYear(), 0, 1);
  const dateOfYear = d.getDay().toString() + "-" + d.getMonth().toString(); //today as string in Format d-m to use in isHoliday
  const hour = d.getHours();
  const minute = d.getMinutes();
  //@ts-expect-error
  const index = (Math.ceil((d - startDate) / (1000 * 60 * 60 * 24)) % 8) - 1;

  function getEmergency() {
    return index !== -1 ? pharmacies[index] : pharmacies[7];
  }

  return (
    <>
      <BSNav />
      <Card>
        <Card.Header>{getEmergency()}</Card.Header>
        <Card.Body>kalender hier</Card.Body>
      </Card>
      <Footer />
    </>
  );
}
