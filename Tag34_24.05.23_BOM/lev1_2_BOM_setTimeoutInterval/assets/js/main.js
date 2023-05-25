/* Schreibe eine Funktion, die beim Drücken des Buttons von 100% bis 0% runter zählt (siehe Ergebnisvorschau).
HTML und CSS befindet sich im Kommentar.
Nutzen kannst Du:
onclick
setInterval
clearInterval
if, else if
querySelector
 */


let zeitCounter = document.querySelector(".zeit");
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {   
    let counterRunter = 100; 
    const consolenAusgabeZahlen = () => {
        counterRunter--; 
        zeitCounter.innerHTML = counterRunter + "%"; 
        if (counterRunter === 0) {
            clearInterval(interval);
        }
    };
    const interval = setInterval(consolenAusgabeZahlen, 100); 
});