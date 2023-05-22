/* Schreibe eine Funktion, die das aktuelle Datum anzeigt.
Erwartete Ergebnisse: tt-mm-jjjj oder tt/mm/jjjj. (Tag, Monat, Jahr)
Nutze Befehle:
getDate(), getMonth(), getFullYear()
getElementById() oder querySelector()
Lass Dir das Ergebnis im HTML-Dokument anzeigen.
 */

const btn = document.querySelector("#btn");
let output = document.querySelector("#output");

btn.addEventListener("click", (e) => {
    e.preventDefault();
    let inputDate = new Date();
    let date = inputDate.getDate();
    let month = inputDate.getMonth();
    let year = inputDate.getFullYear();

    output.innerHTML = date + "/" + month + "/" + year;
})