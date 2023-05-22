/* In dieser Übung lernen wir die Date Methods
Zeige die Daten wie auf dem Screenshot an.
Verwende den Code aus dem Kommentarbereich, um den Wochentag und Monat anzuzeigen.
Nutze Google, wenn du nicht weiterkommst
Hinweis: du siehst hier das aktuelle Datum des Screenshots! Dein Ergebnis orientiert sich an dem aktuellen Datum.


Erstelle ein schönes CSS-Design für Deine elektronische Uhr und füge ein festes Datum ein. Dieses Design werden wir später verwenden um eine funktionierende Uhr zu bauen!
Beispiel:


*/
let output = document.querySelector("#output")

let monate = [
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
  
  let wochenTag = [
    "Sonntag",
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag"
  ];


let myDate = new Date();
console.log(myDate);

let year = myDate.getFullYear();
console.log(year);

let monthAsNum = myDate.getMonth();
console.log(monthAsNum);

let day = myDate.getDay();
console.log(day);

let hours = myDate.getHours();
console.log(hours);

let minutes = myDate.getMinutes();
console.log(minutes);

let weekday = (wochenTag[myDate.getDay()]);
console.log(weekday);

let month = (monate[myDate.getMonth()]);
console.log(month);


output.innerHTML = (weekday + " " + hours + ":" + minutes + ":" + myDate.getSeconds() + " " + "PM");