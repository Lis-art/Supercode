// # ==== Arrays ====

let gericht1 = "Pfannkuchen";
let gericht2 = "Döner";
let gericht3 = "Pizza";

let magdasLieblingsGerichte = ["Pfannkuchen", "Döner", "Pizza", true, 2023];
console.log(magdasLieblingsGerichte);

// * index
//So können wir auf einzelne elemente zu greifen. In den [] kommt die zahl rein auf welches element man sich beziehen möchte
// index fängt bei 0 an!!
console.log(magdasLieblingsGerichte[0]); // Pfannkuchen
console.log(magdasLieblingsGerichte[1]); // Döner
console.log(magdasLieblingsGerichte[4]); // 2023

// * indexOf()
//Sucht in einem Arry nach den suchwort und gibt dir den index zurück
console.log(magdasLieblingsGerichte.indexOf("Pizza")); //2
console.log(magdasLieblingsGerichte.indexOf("Pizzzzzzza")); // -1 = element nicht gefunden

// * Werte überschreiben in Array
//Statisch
magdasLieblingsGerichte[1] = "Salat";
console.log(magdasLieblingsGerichte);

//Dynamisch
console.log(magdasLieblingsGerichte.indexOf("Pizza")); //2
magdasLieblingsGerichte[magdasLieblingsGerichte.indexOf("Pizza")] = "Pasta";
console.log(magdasLieblingsGerichte);

// * .length
//gibt uns die Länge von einem Array als Number zurück
console.log(magdasLieblingsGerichte.length);

let superTrainer = ["Magda", "Ahmed", "Christian", "Julia", "Marzio"];
console.log(superTrainer);

// * pop()
// Die pop() Methode entfernt das letzte Element in einem Array und gibt den Wert, des gelöschten Elementes zurück.
console.log("%c --------pop-------", "color: red");
let popSuperTrainer = superTrainer.pop();
console.log(popSuperTrainer); // "Marzio"
console.log(superTrainer);

// * push()
//Die push() Methode fügt an der letzten stelle ein Element hinzu und gib die neue länge zurück (lenght)
console.log("%c --------push-------", "color: red");
let pushSuperTrainer = superTrainer.push("Ingo");
console.log(pushSuperTrainer); // 5
console.log(superTrainer);

// * shift()
//Die shift() Methode entfernt das erste Element in einem Array und gibt den Wert des Elementes zurück
console.log("%c --------shift-------", "color: red");
let shiftSuperTrainer = superTrainer.shift();
console.log(shiftSuperTrainer);
// Muss nicht in einer zwischen Var. gespeichert werden.
console.log(superTrainer.shift());
console.log(superTrainer);

// * unshift()
console.log("%c --------unshift-------", "color: red");
// die unshift Methode fügt ein neues Element am Anfang hinzu und gibt die neue länge von unserm Array zurück

let unshiftSuperTrainer = superTrainer.unshift("Timo");
console.log(unshiftSuperTrainer); // 4
console.log(superTrainer);