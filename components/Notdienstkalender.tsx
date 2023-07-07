import React, { useState } from "react";
import Calendar from "react-calendar";
//----------------Emergency Service----------------------------------

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
function ESCalendar() {
  // const [value, onChange] = useState(new Date());
  const value = new Date();

  return (
    <div>
      <Calendar value={value} />
    </div>
  );
}
export default ESCalendar;
