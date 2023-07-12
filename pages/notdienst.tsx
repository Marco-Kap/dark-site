import BSNav from "../components/BSNav";
import { Card, Container } from "react-bootstrap";
import Image from "next/image";
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
  //----------------------calendar----------------------------------

  let wLabels = [
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag",
    "Sonntag",
  ];
  let mLabels = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember",
  ];

  const dates = ["s", "feqf"];
  return (
    <>
      <BSNav />
      <Card style={{ margin: "2em", textAlign: "center" }}>
        <Card.Header>{getEmergency()}</Card.Header>
        <Card.Body>
          <h2>
            Hier finden sie die aktuell geöffnete Apotheke in Korbach und den
            geplanten Notdienst.
          </h2>
          <>
                 
                 
          Wir sind darum bemüht ihnen rund um die die bestmögliche
          Gesundheitsversorgung zu bieten. Sollten sie nicht in der Nähe wohnen
          oder eine Reise planen können sie ihre Postleitzahl eingeben und eine
          momentan geöffnete Apotheke finden.
        </Card.Body>
      </Card>

      <Footer />
    </>
  );
}
