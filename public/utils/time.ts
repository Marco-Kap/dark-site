//----------------Emergency Service----------------------------------

// Pharmacies
const pharmacies = [
  "Notdienst: Ahornapotheke",
  "Notdienst: Apotheke Am Berndorfer Tor",
  "Notdienst: Bären-Apotheke",
  "Notdienst: Eisenberg-Apotheke",
  "Notdienst: Adler Apotheke Sachsenhausen",
  //'Kilian Apotheke', is closed
  "Notdienst: Hirsch-Apotheke",
  "Notdienst: Stern-Apotheke",
  "Notdienst: Edersee-Apotheke Vöhl",
];

// Get the current date
const d = new Date();
//set a static start Date
const startDate = new Date("2023-05-01");
const day = d.getDay();
const hour = d.getHours();
const minute = d.getMinutes();
//@ts-expect-error
const index = (Math.ceil((d - startDate) / (1000 * 60 * 60 * 24)) % 8) - 1;

// Funktion, die das Datum des Ostersonntags berechnet

function isHoliday() {
  const fixedHolidays = [
    "01-01", // Neujahr
    "05-01", // Tag der Arbeit
    "10-03", // Tag der deutschen Einheit
    "12-25", // 1.Weihnachtfeiertag
    "12-26", // 2.Weihnachtfeiertag
  ];
}

export function getEmergency() {
  pharmacies[7] ? index === -1 || undefined : pharmacies[index];
}

export function isOpen() {
  let closingTime;
  if (index == 1) {
    closingTime = "aktuell geöffnet!";
  }
  if (
    index !== 1 &&
    day !== 6 &&
    (hour <= 8 || (hour >= 18 && minute >= 30) || day === 0)
  ) {
    closingTime = "öffnet um Morgen 8:00";
  } else if (
    index !== 1 &&
    day === 6 &&
    (hour <= 8 || (hour >= 13 && minute >= 30))
  ) {
    closingTime = "öffnet Montag um 8:00";
  } else if (
    index !== 1 &&
    day !== 6 &&
    day !== 0 &&
    (hour >= 8 || (hour <= 18 && minute <= 30))
  ) {
    closingTime = "geöffnet bis 18:30";
  } else if (
    index !== 1 &&
    day === 6 &&
    (hour <= 8 || (hour <= 13 && minute <= 30))
  ) {
    closingTime = "geöffnet bis 13:30";
  } else {
    closingTime = "";
  }
  return closingTime;
}
