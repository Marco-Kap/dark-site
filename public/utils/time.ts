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
const startDate = new Date("2023-05-01T08:00:00");
const day = d.getDay();
const hour = d.getHours();
const minute = d.getMinutes();
//@ts-expect-error
const index = (Math.ceil((d - startDate) / (1000 * 60 * 60 * 24)) % 8) - 1;

//-- Logic to calculate Holidays -------------------------------------------------

// get eater date with gauss algorythm
function calculateEaster(year) {
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31);
  const day = ((h + l - 7 * m + 114) % 31) + 1;
  return new Date(year, month - 1, day);
}

export function isGermanHoliday(date) {
  //static holidays in hessen, not many
  const germanHolidays = {
    "01-01": "New Year's Day",
    "05-01": "Labour Day",
    "10-03": "Day of German Unity",
    "12-25": "Christmas Day",
    "12-26": "Second Christmas Day",
  };

  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const easterSunday = calculateEaster(year);
  // Dynamic holidays
  // easter Friday
  const easterFriday = new Date(easterSunday);
  easterFriday.setDate(easterSunday.getDate - 2);
  //pentecost is 49 days after eastern
  const pentecost = new Date(easterSunday);
  pentecost.setDate(easterSunday.getDate() + 49);
  //Ascension of Christ is 39 days after eastern
  const ascension = new Date(easterSunday);
  ascension.setDate(d.getDate() + 39);
  const easterMonth = easterSunday.getMonth();
  const easterDay = easterSunday.getDate();

  if (month === easterMonth && day === easterDay) {
    return "Easter Sunday";
  }
  if (month === easterMonth && day === easterDay + 1) {
    return "Easter Monday";
  }
  const formattedDate = `${String(month + 1).padStart(2, "0")}-${String(
    day
  ).padStart(2, "0")}`;

  return germanHolidays[formattedDate] || false;
}

function getNextWeekday(date, dayOfWeek) {
  const resultDate = new Date(date);
  resultDate.setDate(date.getDate() + ((dayOfWeek + 7 - date.getDay()) % 7));
  return resultDate;
}
const nextDay = new Date(d);
nextDay.setDate(d.getDate() + 1);

const nextMonday = getNextWeekday(d, 1);
const isHoliday = isGermanHoliday(d);
const isTomorrowHoliday = isGermanHoliday(nextDay);
const isMondayHoliday = isGermanHoliday(nextMonday);

//-------------------------------------------------
export function getEmergency() {
  pharmacies[7] ? index === -1 || undefined : pharmacies[index];
}

export function isOpen() {
  let closingTime;
  if (
    isHoliday !== true &&
    index !== 0 &&
    day !== 6 &&
    (hour <= 8 || (hour >= 18 && minute >= 30) || day === 0)
  ) {
    closingTime = "öffnet um Morgen 8:00";
  } else if (
    index !== 0 &&
    day === 6 &&
    (hour <= 8 || (hour >= 13 && minute >= 30))
  ) {
    closingTime = "öffnet Montag um 8:00";
  } else if (
    index !== 0 &&
    day !== 6 &&
    day !== 0 &&
    (hour >= 8 || (hour <= 18 && minute <= 30))
  ) {
    closingTime = "geöffnet bis 18:30";
  } else if (
    isHoliday !== true &&
    index !== 0 &&
    day === 6 &&
    (hour <= 8 || (hour <= 13 && minute <= 30))
  ) {
    closingTime = "geöffnet bis 13:30";
  } else if (index === 0) {
    closingTime = "aktuell geöffnet!";
  } else {
    closingTime = "";
  }
  return closingTime;
}
