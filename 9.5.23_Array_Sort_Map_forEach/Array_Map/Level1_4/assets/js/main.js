/* Schreibe eine Funktion, mit Hilfe von map(), die jede Temperatur in einem Array von Fahrenheit in Celsius umwandelt.
Verwende die mathematische Formel zum Berechnen.
Verwende das Array im Kommentarbereich.
Überprüfe das Ergebnis in der Konsole.
 */

/* Assets:

map()
return
toFixed() || Math.round()
celsius = (℉ - 32) / 1.8
 */

let fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];

let toCelcius = fahrenheit.map((celcius) => {
    return ((celcius - 32) / 1.8).toFixed();
});
console.log(toCelcius);



