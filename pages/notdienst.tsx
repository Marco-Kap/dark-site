import BSNav from "../components/BSNav";
import { Card, Container, Form, Button } from "react-bootstrap";
import Image from "next/image";
import Footer from "../components/Footer";

const date = new Date();
export default function notdienst() {
  // Pharmacies
  const pharmacies = [
    "Ahorn-Apotheke", //Ahornapotheke
    "Apotheke Am Berndorfer Tor",
    "Bären-Apotheke",
    "Eisenberg-Apotheke",
    "Adler Apotheke Sachsenhausen",
    //'Kilian Apotheke', is closed
    "Hirsch-Apotheke",
    "Stern-Apotheke",
    "Edersee-Apotheke Vöhl",
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
        <Card.Header>
          {" "}
          Hier finden sie die momentan geöffnete Apotheke in Korbach und den
          geplanten Notdienst.
        </Card.Header>
        <Card.Body>Aktuelle Notdienst Apotheke: {getEmergency()}</Card.Body>
        <Card.Footer>
          {" "}
          Wir sind bemüht ihnen rund um Uhr die bestmögliche
          Gesundheitsversorgung zu bieten. Sollten sie nicht in der Nähe wohnen
          oder eine Reise planen können sie ihre Postleitzahl eingeben und eine
          momentan geöffnete Apotheke finden.
        </Card.Footer>
      </Card>
     <Footer />
    </>
  );
}
