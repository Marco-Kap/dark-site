import BSNav from "../components/BSNav";
import { Card, Form, Container } from "react-bootstrap";
import Footer from "../components/Footer";
import { useState } from "react";
import Calendar from "react-calendar";
import Banner from "../components/Banner";
import { on } from "events";

export default function notdienst() {
  const [value, onChange] = useState(new Date());

  const alt = "Bildbeschreibung";
  const src = "/../public/images/dna.jpg";
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

  function getNextEm() {
    let nIndex;
    let cDate = value.toLocaleDateString("de");
    if (cDate === d.toLocaleDateString("de")) {
      nIndex = index;
    } else {
      //@ts-expect-error
      nIndex = Math.ceil((value - startDate) / (1000 * 60 * 60 * 24)) % 8;
    }

    return (
      "Notdienstapotheke am " +
      cDate +
      " " +
      (nIndex !== -1 ? pharmacies[nIndex] : pharmacies[7])
    );
  }
  function getNextAhornEm() {
    let next1 = d.toLocaleDateString("iso");
    let next2 = d.toLocaleDateString("US");
    let em1 = "01.01.1970";
    let em2 = "19.01.2038";

    console.log(value + "zeit!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    return (
      <>
        <p>{em1}</p>
        <p>{em2}</p>
      </>
    );
  }
  //--------------------emergency search------------------------------

  return (
    <>
      <BSNav /> <div className="emdivider"></div>
      <div className="wrapper">
        <main>
          <Card style={{ margin: "2em", textAlign: "center" }}>
            <Card.Header>
              {" "}
              <h2> Aktuelle Notdienstapotheke</h2>
            </Card.Header>
            <Card.Body>
              <div className="mb-4">
                <h3>
                  <a
                    style={{ color: "grey" }}
                    href="https://www.aponet.de/apotheke/notdienstsuche/34497/%20/5"
                  >
                    {getEmergency()}
                  </a>
                </h3>
              </div>
              <div>
                <p>
                  Klicken sie auf ein Datum um die jeweilige Notdienstapotheke
                  anzeigen zu lassen{" "}
                </p>
                <div>{getNextEm()}</div>

                <div
                  style={{
                    justifyContent: "center",
                    display: "flex",
                    marginTop: "1em",
                    marginBottom: "1em",
                  }}
                >
                  <Calendar onChange={onChange} value={value} locale="de" />
                </div>
              </div>
              <h4>Unsere nächsten Notdienste:</h4>
              {getNextAhornEm()}
            </Card.Body>
            <Card.Footer>
              {" "}
              Wir sind bemüht ihnen rund um Uhr die bestmögliche
              Gesundheitsversorgung zu bieten. Sollten sie nicht in der Nähe
              wohnen oder eine Reise planen können sie ihre Postleitzahl
              eingeben und eine momentan geöffnete Apotheke finden.
            </Card.Footer>
          </Card>
        </main>
        {/* <Form >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Postleitzahl</Form.Label>
        <Form.Control type="submit" placeholder="Postleitzahl" />
        <Form.Text className="text-muted">
          Ein Service von aponet
        </Form.Text>
      </Form.Group>
      </Form>
------------aponet form------------------------
      <form onSubmit={handleSubmit} value={value}>
        <label>
          <p>Name:</p>
          <input ref={inputRef} type="text" />
        </label>
      </form>*/}
        <Footer />
      </div>
    </>
  );
}
{
  /*<!-- aponet.de: Notdienstapotheke finden Start -->
<div style="position:relative;font:14px Verdana,Helvetica,sans-serif;color:#333333;width:298px;height:165px;background-color:#fff;padding:0;border:1px solid #bfbfbf;border-radius: 5px;">
  <div style="position:absolute;top:60px;left:8px;width:280px;">
    <div style="display:block;position:absolute;top:-40px;left:0;font-size:11px;line-height:18px;width:auto;background-color:#e2001a;padding:6px 11px;margin:0;border-radius:100px;color:#FFF">
      Notdienstapotheke finden
    </div>
    <form name="search" action="https://www.aponet.de/apotheke/notdienstsuche?tx_aponetpharmacy_search%5Baction%5D=search&tx_aponetpharmacy_search%5Bcontroller%5D=Search&cHash=d60644fbe4920abed16b25ce29f3b7c8" method="post" target="_blank" style="padding:0;border:0;margin:0;">
      <fieldset style="display: block;height:38px;background:#fff;padding:0;border:1px solid #e2001a;margin:0;border-radius: 5px;overflow: hidden;">
        <input name="tx_aponetpharmacy_search[search][plzort]" id="zipcityEmergency" class="text" value="" placeholder="PLZ oder Ort" type="text" style="position:absolute;top:11px;left:10px;font-size:14px;color:#333333;width:180px;background-color:none;padding:0;border:0;margin:0;" />
        <button type="submit" value="" title="Notdienstsuche starten" alt="Notdienstsuche starten" style="display: inline-block;position:absolute;right:-2px;height:98%;padding:0 10px;background-color:#e2001a;color:#FFF;border-radius: 5px;border:1px solid #e2001a;font-size:14px;cursor:pointer;" />Suchen</button>
      </fieldset>
    </form>
  </div>
  <p style="position:relative;top:106px;left:8px;font-size:11px;width:282px;padding:0;margin:0;">
    <span style="display:inline-block;position:absolute;top:8px;left:0;">Ein Service von:</span>
    <a href="https://www.aponet.de" title="Zur Startseite von aponet.de - dem offiziellen Gesundheitsportal der deutschen ApothekerInnen" style="position:absolute;top:0;right:2px;text-decoration:none;" target="_blank">
      <img src="https://www.aponet.de/fileadmin/public/widgets/logo_search_widget.svg" alt="aponet.de - dem offiziellen Gesundheitsportal der deutschen Apothekerinnen und Apotheker" />
    </a>
  </p>
</div>
<!-- aponet.de: Notdienstapotheke finden Ende --> */
}
