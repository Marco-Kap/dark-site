# Readme

Siehe wie man die Seite einsetzt

## TODO LISTE

-Startseite fertigstellen

-banner text für mobil anpasssen

-Overlay für die Bilder bearbeiten:
-text prop auf allen Seiten einstellen
-Text zentrieren
-größe verändern?
-Farbe ändern

-Die Navbar im Darkmode gut aussehen lassen

-Rezepturen Seite bearbeiten

-404 Seite bearbeiten

-kontaktseite bearbeiten öffnungszeiten hinzufügen

-notdienstseite bearbeiten

-passende Bilder für Demo einsetzen

-einige Links für Demo ausblenden zum Beispiel E-Rezept

-Die Berufhaftpflichtversicherung ins impressum schreiben

-An Wordpress API anbinden

## Wie man diese Seite einsetzt

Diese Seite basiert auf Next.js. Schau bei Problemen in die Dokumentation.
Für das Styling wurde teilweise das css Framework Bootstrap 5.3 verwendet.

### notwendige Befehle

wenn das repository noch nicht lokal vorliegt muss es erst importiert werden.
Alternativ kannst du einen Online Editor nutzen. Codesandbox und Stackblitz sind empfelenswert.

```sh
git clone [repository url]
cd dark-site
npm install --save
```

Um den Entwicklungsserver zu starten geh mit der cmd in das Verzeichnis /dark-site und gib den folgenden Befehl ein

```sh
npm run dev
```

Bei Sicherheitsbedenken gib ein:

```sh
npm audit
```

Das wird dir eventuell eine Liste veralteter Abhängigkeiten oder anfälliger Packete anzeigen. Zusammen mit Reperaturmöglichkeiten.

Wenn du den Quellcode geändert hast und die Änderungen veröffentlichen willst. Nutze

```sh
npm run build
```

Das wird einen Ordner mit css ,js und html Dateien für den Server aus dem Typescriptcode erstellen.
