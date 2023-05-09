/* In dieser Übung werden wir forEach() lernen.

Schreibe eine Funktion myDrinks(), die jedes Element eines Arrays in deiner Konsole ausgibt und mit document.write() in deine index.html schreibt.

Verwende die Liste aus dem Kommentar.
Sortiere getraenke vorher alphabetisch. */

let getraenke = [
    "Coca-Cola",
    "Apfelsaft",
    "Pepsi",
    "Traubensaft",
    "Sprite",
    "Orangensaft",
    "Red Bull Energy Drink",
    "Fanta"
 ]

 getraenke = getraenke.sort();
 console.log(getraenke);


getraenke.forEach ((elt) => {
    console.log({elt});
    document.write(elt + "<br>")
});