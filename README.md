# Readme
Die TODO Liste wird zuerst angezeigt, aber für eine kurze Dokumentation bitte runterscrollen zu "wie man die Seite einsetzt"

## TODO LISTE

-Die Startseite für das Coporate Logo umbauen. auf navbar achten 

-Footer immer am unterem Ende der Seite anzeigen!!!!!!!!

-auf Kontaktseite Openstreet Map überarbeiten damit nicht Weltkarte angezeigt wird

-überflüssige Bilder aus dem images Ordner entfernen

-Alle Bilder verkleinern sowohl die Dateigröße als auch das Format

-momentanen Text der Startseite überarbeiteten

-Leistungen auf einer Seite zusammenfassen

-Rechte für mögliche Ratgeberseite abklären. hilfreiche Artikel aus Deutscher Apotheker Zeitung.

-das aponet widget auf der Notdienst seite implementieren

-e-rezepte Seite überarbeiten

-Die Navbar im Firefox Darkmode gut aussehen lassen

-Rezepturen Seite bearbeiten und verlinken (in Leistungen enthalten)

-kalender bearbeiten / die Position in Desktopansicht ändern und Ahornapo Notdienst hervorheben? 

-alle Bilder verkleinern und tauschen

-ungenutzte bilder und Komponenten löschen, Importe aufräumen

-Accessibility checken, aria labels vergeben und so weiter

-alle sichtbaren Texte noch mal durchlesen und auf typos überprüfen

-SEO verbesserungen durchführen

-An Wordpress API anbinden

-deployment

## Liste der Bilder
erezepte: E-rezept-Handy-min.jpg
notdienst: einfach margin

## Wie man diese Seite einsetzt

Diese Seite basiert auf Next.js. Schau bei Problemen in die Dokumentation.

Nicht notwendige "Abhägkeiten" sind Bootstrap und React Calendar
Boostrap 5.3 ist ein CSS Framework und wurde hier zum teil für das styling eingesetzt. Der Großteil des Stylings beruht allerdings auf inline Sass und dem custom stylesheet
React Calendar wird im Notdienst Screen eingesetzt. Der React Calendar hat out-of-the-box eine Menge Funktion, die selber zu schreiben, zeitaufwendig wäre.
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
