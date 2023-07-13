export default function notFoundPage() {
  return (
    <>
      <div
        style={{
          backgroundColor: "black",
          width: "100%",
          height: "50rem",
          translate: "0vw 0vw",
          alignItems: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <div style={{}}>
          <h3 style={{ textAlign: "center", alignSelf: "center" }}>
            Da ist etwas schief gelaufen
          </h3>{" "}
          <div style={{ textAlign: "center" }}>
            <a href="/">zurück zur Startseite</a>{" "}
          </div>
        </div>
      </div>
    </>
  );
}
