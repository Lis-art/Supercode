/* 
Schreibe eine Funktion, die nach X Sekunden einen Text anzeigt.
Nutzen kannst Du:
setTimeout
 */

/* 

console.log("Start warten für drei Sekunden");

const consolenAusgabe = () => {
    console.log("Erledigt, du hast drei Sekunden Lebenszeit verschwendet");    
};
setTimeout(consolenAusgabe, 3000);

 
 */




/* Schreibe eine Funktion, die das Ergebnis der Vorschau ausgibt.
Nutzen kannst Du:
setInterval
clearInterval
if, else
 */


let counter = 10;

const consolenAusgabeZahlen = () => {
    console.log(counter--);
    if (counter === 0) {
        console.log("Endlich Feierabend");
        clearInterval(interval);
    }
};

const interval = setInterval(consolenAusgabeZahlen, 1000);