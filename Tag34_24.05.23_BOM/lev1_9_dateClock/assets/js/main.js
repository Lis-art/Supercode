/* Zeige eine Uhr, die mit einem Timing-Event erstellt wurde.
Schreibe eine Funktion startTime(), die die aktuelle Uhrzeit anzeigt.
Definiere die Variablen im Funktionskörper:
heute mit dem aktuellen Datum.
std mit Stunden.
min mit Minuten.
sec mit Sekunden.
Nutze dazu den Code aus dem Kommentar.
Zeige das Ergebnis im HTML-Dokument mit Hilfe von getElementById()
 */



function startTime(){
    let heute = new Date();
    
    //document.getElementById("txt").innerHTML = heute.toLocaleTimeString();
    
    let std = heute.getHours();
    let min = heute.getMinutes();
    let sek = heute.getSeconds(); 
    document.getElementById("txt").innerHTML = std + ":" + min + ":" + sek;
}
setInterval(startTime, 1000);