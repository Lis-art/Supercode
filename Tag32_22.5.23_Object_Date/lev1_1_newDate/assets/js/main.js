/* In dieser Übung werden wir Date() lernen.
Stelle die folgenden Daten im HTML-Dokument mit Hilfe des Befehls new Date() dar.

Speichere die Werte in einer Variable (date1, date2, …)
Nutze innerHTML um das Ergebnis darzustellen.
Teste dann die Werte:
new Date("September 2, 2019 09:00:00")
new Date(0)
new Date(31556908800)
new Date(86400000)
 */


let output = document.querySelector("#output")

let date1 = new Date("September 2, 2019 09:00:00");
let date2 = new Date(0);
let date3 = new Date(31556908800);
let date4 = new Date(31556908800);

console.log(date1);
console.log(date2);
console.log(date3);
console.log(date4);

output.innerHTML = date1 + "<br>";
output.innerHTML += date2 + "<br>";
output.innerHTML += date3 + "<br>";
output.innerHTML += date4 + "<br>";