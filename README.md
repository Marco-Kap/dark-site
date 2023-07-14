# Readme
Die TODO Liste soll zuerst angezeigt werden, für eine kurze Dokumentation bitte runterscrollen zu "wie man die Seite einsetzt"

## TODO LISTE

-Startseite fertigstellen, Inhalte dafür suchen

-Verlosungsseite fertig stellen

-Die Navbar im Darkmode gut aussehen lassen

-Banner braucht mehr Deckkraft oder Hintergrund der Bilder muss kontrastreich sein

-Rezepturen Seite bearbeiten

-kalender bearbeiten

-Ein Carousell auf der Verlosungsseite einrichten

-passende Bilder für Demo erstellen und  einsetzen

-Seite für e-rezepte fertig stellen

-einige Links für Demo ausblenden zum Beispiel E-Rezept

-Die Berufhaftpflichtversicherung ins impressum schreiben

-Accessibility checken, aria labels vergeben und so weiter

-alle Texte noch mal durchlesen und auf typos überprüfen

-SEO verbesseurngen durchführen

-An Wordpress API anbinden


## Wie man diese Seite einsetzt

Diese Seite basiert auf Next.js. Schau bei Problemen in die Dokumentation.

Weitere Abhägkeiten sind Boostrap und React Calendar
Boostrap 5.3 ist ein css Framework und wurde hier zum teil für das styling eingesetzt. Der Großteil des Stylings beruht allerdings auf inline Sass und dem custom stylesheet
React Calendar wird im Notdienst Screen eingesetzt. Der React Calendar hat out-of-the-box eine Menge Funktion, die nicht einfach selbst zu schreiben sind.
Beide Abhägkeiten könnte man durch eigenen Code ersetzten.

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
