/* Schreibe eine Funktion, die beim Start die Zahlen runter zählt.
Schau Dir die Ergebnisvorschau an.

Der HTML und CSS Code befindet sich im Kommentar.
Nutzen kannst Du:
setInterval()
clearInterval()
getElementsByClassName()/getElementById()
if, else if

 */



let counter = document.querySelector("#count");
const btn = document.querySelector("#btn");

//let counterRunter = counter.innerHTML; 
//console.log(counterRunter);

function noText() {
    //console.log("Hi");
    let counterRunter = Number(counter.innerHTML); 
    counterRunter--; 
    counter.innerHTML = counterRunter; 

    if (counterRunter === 0) {
        clearInterval(interval);
        const message = document.getElementsByClassName("message")[0];
        message.style.display = "none";
    }
}
const interval = setInterval(noText, 1000);