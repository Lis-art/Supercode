/* In dieser Übung lernen wir, wie man auf die Objekte zugreift.

Verwende den Code aus dem Kommentarbereich.
Greife auf die Werte dieses Objekts zu:
"Nala"
"Droopy"
und lasse dir einmal alle Hundenamen anzeigen
Nutze eine Methode, mit der man die Hundenamen ändern kann.
 */

let unsereHaustiere = [
    {
      tiertyp: "Katze",
  
      names: [
        "Gipsy",
        "Nala",
        "Dinky"
      ]
    },
    {
      tiertyp: "Hunde",
      names: [
        "Knöpfchen",
        "Pinselchen",
        "Droopy"
      ]
    }
  ];
  console.log(unsereHaustiere[0].names[1]);
  console.log(unsereHaustiere[1].names[2]);
  console.log(unsereHaustiere[0].names, unsereHaustiere[1].names);

  unsereHaustiere[0].names[1] = "Yuki";
  console.log(unsereHaustiere[0].names);