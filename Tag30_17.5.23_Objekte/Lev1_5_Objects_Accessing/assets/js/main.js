/* In dieser Übung lernen wir, wie man auf die Objekt-Inhalte zugreift.
Verwende den Code aus dem Kommentar.
Greife auf die Eigenschaften dieses Objekts zu und gib folgende Werte in der Konsole aus:
Geheimnisse
Cola
Hefter
Hinweis:
Accessing Object Properties
 */

let unserLager = {
    schreibtisch: {
      schublade: "Hefter"
    },
    schrank: {
      "Obere Schublade": {
        Ordner1: "Dokumente",
        Ordner2: "Geheimnisse"
      },
      "Untere Schublade": "Cola"
    }
  };

//Gheimnisse
console.log(unserLager.schrank["Obere Schublade"].Ordner2);

//Cola
console.log(unserLager.schrank["Untere Schublade"]);

//Hefter
console.log(unserLager.schreibtisch.schublade);