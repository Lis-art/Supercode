/* Schreibe eine Funktion, die einen Klickzähler hochzählt, wenn du auf einen Button klickst.
Der HTML und CSS Code befindet sich im Kommentarbereich.
Assets:
getElementById()
Anzahl = 0;   // Es ist wichtig, hier zu initiieren!
Anzahl += 1;
innerHTML
 */

let anzahl = 0; 
// muss global definiert werden weil wenn die Var in der Funktion stehen würde, würde sie wieder gelöscht

function plusOne(){
    anzahl++;
    console.log(anzahl);
    document.querySelector("#clickMe").innerHTML = "Click me: " + anzahl;
}

document.getElementById("clickMe").addEventListener("click", (e) => {
    e.preventDefault();
    plusOne();
});