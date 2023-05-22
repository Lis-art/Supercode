/* In dieser Übung werden wir map() lernen.

Nutze das Array getraenke aus dem Kommentarbereich.
Nutze die map()-Methode, um in der neuen Variablen upperDrinks alle Getränke in Großbuchstaben zu speichern.
Wende nun diese map() Funktion an deinem Array getraenke an.
Gib nun upperDrinks in der Konsole aus.

Bonus: Versuche, deine Funktion in ArrowFunction umzuwandeln.
 */

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

// ohne arrow function
let upperDrinks1 = getraenke.map(function(getraenkeGroß) {
    return getraenkeGroß.toUpperCase();
});
console.log(upperDrinks1);
// getraenkeGroß steht jetzt für jedes einzelne Element im Array
// Elemente werden damit durch geloopt
    
// als arrow function - Kurzschreibweise
let upperDrinks = getraenke.map(getraenkeGroß => getraenkeGroß.toUpperCase);
console.log(upperDrinks);