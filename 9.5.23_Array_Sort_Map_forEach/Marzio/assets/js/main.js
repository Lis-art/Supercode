// # Array Wiederholung

let heros = ["Superman", "Spiderman", "Hulk", "Ironman"];

// console.log(heros);

// - Welchen idex hat Spiderman. Wie finde ich das heraus?
// console.log(heros.indexOf("Spiderman")); //1

// - Wie bekomme ich die länge vom Array zurück?
// console.log(heros.length); //4

// - Wie kann ich "Thor" am ende hinzufügen?
heros.push("Thor");
// console.log(heros);

// - Wie kann ich ein Element am Anfang hinzufügen?
heros.unshift("America");
// console.log(heros);

// - Wie kann ich zwei Elemente am anfang hinzufügen?
heros.unshift("Hero1", "Hero2");
// console.log(heros);

// - Wie kann ich ein Element am ende entfernen?
heros.pop();
// console.log(heros);

// - Wie kann ich ein Element am anfgang entfernen?
heros.shift();
// console.log(heros);

// # NEUE THEMEN

// # ====== Array Methoden =======

console.log("%c Array Methoden Part 2", "color: red; background-color: gold;");

let carName = ["Audi", "BMW", "Seat", "Skoda", "Mercedes"];
console.log(carName);

// * ==== .splice() ====
console.log("%c splice()", "color: red; background-color: gold;");
// mit splice können wir gezielt Elemente überschreiben / löschen

// 1 Erster Parameter: Wo soll hinzugefügt werden? /  oder gelöscht?
// 2 Zweiter Parameter: Wie viele Elementet sollen gelöscht / überschrieben werden?
// 3 Dritter Parameter: Neue Elemente
// 4 Vierter Parameter: Neue Elemente
// 5 ...

// Fügt VW und Fiat ab index 2 ein
carName.splice(2, 0, "VW", "Fiat");
console.log(carName);

// BMW löschen
carName.splice(1, 1);
console.log(carName);

// Seat löschen
carName.splice(3, 1);
console.log(carName);

// Audi zu Audolino verwandeln
carName.splice(0, 1, "Audolino");
console.log(carName);

// * ==== slice() ====
// Mit slice() können wir einen Teil eines Array ausschneiden und geben ein neues Array zurück
console.log("%c slice()", "color: red; background-color: gold;");

// 1 Erste Parameter: Start
// 2 Zweiter Parameter: Ende (optional) (nicht inkludiert)

let newCars = carName.slice(0, 3);
console.log(newCars); // ['Audolino', 'VW', 'Fiat']

// - Wichtig: slice verändert das ursprungsarray nicht
console.log(carName);

// * ==== sort() ====
// mit sort() können wir sortieren
// Wichtig: sort wandelt erstmal alles in einem String und schaut dann nach den utf16 Code was höher/niedriger ist. Daher sortiert er immer nur die erst zahl/zeichen. egal ob es 222 oder 22 ist zb.

// NUMBER SORT.
console.log("%c sort()", "color: red; background-color: gold;");
let number1 = [3, 4, 6, 1, 20, 9];
console.log(number1);
number1.sort();
console.log(number1);

// STRING SORT.
let string = ["B", "D", "A", "C"];
console.log(string);
string.sort();
console.log(string);

// BIG NUMBER SORT
number2 = [10, 2, 100, 34, 111, 20];
console.log(number2);
number2.sort();
console.log(number2);

// * sort() mit funktion und callback funktion

let numberSort = [12, 9, 33, 2, 33, 123, 292, 900, 34, 13, 4];

// - Langschreibweise
const vergleichFunktion = (a, b) => {
  //   1. < (kleiner) ---> a kommt zuerst
  //   2. = (gleich)  ---> nichts verändert sich
  //   3. > (größer)  ---> b kommt zuerst
  return a - b;
};

numberSort.sort(vergleichFunktion);
console.log(numberSort);

// - Kurzschreibweise
// So von klein auf Groß
number2.sort((a, b) => a - b);
console.log(number2);

// So von groß auf klein
number2.sort((a, b) => b - a);
console.log(number2);

// * ===== .reverse() =====
// mit reverse() können wir ein array umkehren
console.log("%c reverse()", "color: red; background-color: gold;");

const reversNum = [0, 1, 2, 4, 3];
console.log(reversNum);

reversNum.reverse();
console.log(reversNum);

// # ===== forEach() ======
// forEach() ist eine schleife die durch jedes element des arrays geht und diese dann ausgibt

console.log("%c forEach()", "color: red; background-color: blue;");

let games = ["Call of Duty", "GTA", "WOW", "GTA San Andreas"];

// console.log(games[0]);
// console.log(games[1]);
// console.log(games[2]);
// console.log(games[3]);

// eine forEach() benötigt immer einen Parameter. (Kann frei gewählt werden (meist elm für element))
games.forEach((Döner) => {
  console.log(Döner);
});

let images = [
  "https://picsum.photos/200",
  "https://picsum.photos/201",
  "https://picsum.photos/202",
  "https://picsum.photos/203",
  "https://picsum.photos/204",
  "https://picsum.photos/205",
  "https://picsum.photos/206",
  "https://picsum.photos/207",
];

// holt mir die bilder
const bilderoutput = document.querySelector("#bilder");

images.forEach((elt, index) => {
  console.log({ elt });
  console.log({ index });

  bilderoutput.innerHTML += `<img src="${elt}" alt="randomImg${index}" />`;
});

// # ===== map() ======
// .map() geht durch jedes element des Arrays durch und gibt ein NEUES array zurück
// map verändert das ursprungsarray NICHT!

console.log("%c map()", "color: red; background-color: blue;");

let number3 = [10, 5, 2, 4];
console.log(number3);

let number4 = number3.map((Pfannkuchen) => {
  return Pfannkuchen * 2;
});

console.log(number4);

// # ===== forEach() vs. map() =====
// - forEach() -> Gibt und KEIN(!!!) neues Array zurück
// - map() -> Gibt uns ein neues Array zurück -> Wenn ich mit dem Werten später weiterarbeiten muss ist map() the way to go.

const studentNames = ["Nina", "Tom", "Simon"];

// - Macht beides das selbe erstmal
// studentNames.forEach((doner) => console.log(doner.toUpperCase()));
// studentNames.map((doner) => console.log(doner.toUpperCase()));

// forEach()
console.log(studentNames.forEach((firstName) => firstName.toUpperCase())); //undefined -> Weil forEach kein Array return

// map()
console.log(studentNames.map((firstName) => firstName.toUpperCase())); // ['NINA', 'TOM', 'SIMON'] -> weil map ein neues Array return

// - Werte in einer neuen Variable Speichern
// forEach
// geht nicht weil forEach uns kein neues Array zurück gibt
const forEachLowNames = studentNames.forEach((knödel) => knödel.toLowerCase());
console.log(forEachLowNames);

// map
// Geht weil map uns ein neues Array zurück gibt
const mapLowNames = studentNames.map((knödel) => knödel.toLowerCase());
console.log(mapLowNames);

// Das ursprungs Array bleibt unverändert
console.log(studentNames);