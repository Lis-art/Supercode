/* Schreibe eine Funktion, die den Monatsnamen anhand eines bestimmten Datums ermittelt.
Verwende den Code aus dem Kommentar.
Nutze getMonth() um die Aufgabe zu lösen.
Überprüfe deine Funktion mit folgenden Argumenten für deine Parameter in der Konsole:
console.log(monatsName("2001,3,4")); //März
console.log(monatsName("2019,12,24")); //Dezember
console.log(monatsName("1410,07,15")); //Juli
 */

let list = [
  "Januar",
  "Februar",
  "März",
  "April",
  "Mai",
  "Juni",
  "Juli",
  "August",
  "September",
  "Oktober",
  "November",
  "Dezember"
];


const monatsName = (jahr, monat, tag) => {
  let ergebnis = list[monat - 1];
  return ergebnis;
};
console.log(monatsName(2001, 3, 4));//März
console.log(monatsName(2019, 12, 24));//Dezember
console.log(monatsName(1410, 07, 15));//Juli


/* //Andere Lösung:
function monatsName(dateInput) {
  let dateGesplittet = dateInput.split(",");
  let year = parseInt(dateGesplittet[0]);
  let month = parseInt(dateGesplittet[1]) - 1;
  let day = parseInt(dateGesplittet[2]);
  // parseInt macht String zur Ganzzahl
  let list = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
  ];

  let monthName = list[month];
  //Monatsname wird über Index des Array zugeordnet
  return monthName;
}
console.log(monatsName("2001,3,4")); 
console.log(monatsName("2019,12,24")); 
console.log(monatsName("1410,07,15")); */