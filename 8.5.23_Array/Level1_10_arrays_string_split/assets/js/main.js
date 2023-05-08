/* Nun kommen wir zu einer string Methode, die ein array zurückgibt. Deswegen wird split() immer erst bei arrays behandelt und nicht vorher. Mit split() können wir aus einem string ein array erstellen lassen. Dabei können wir in den ()-Klammern von split() festhalten,  wie unser string gestückelt werden soll. 

Finde mit der Ergebnisvorschau heraus, wo der string gesplitet worden ist. Wichtig ist ,dass du dir die einzelnen Vorgänge in extra Variablen zwischenspeicherst, weil sonst nicht mit der Rückgabe von split() weiterarbeiten kannst.

array.split(“ ”)
*/


const text = "It's okay, Bender. I like cooking too. Oh, you're a dollar naughtier than most. My fellow Earthicans, as I have explained in my book 'Earth in the Balance', and the much more popular 'Harry Potter and the Balance of Earth', we need to defend our planet against pollution. Also dark wizards."


/* Die Methode gibt ein Array von Strings zurück.

Die Erklärung enthält die folgenden Worte: „In Java zerlegt die split-Methode eine Zeichenkette in Teilstrings“. Die Methode sammelt diese Teilstrings in einem Array, das zum Rückgabewert wird.

Die Methode hat einen String-Eingabeparameter namens regex. */



// 1. nach jedem Satzende
let splitText1 = text.split(".");
console.log(splitText1);


// 2. nach jedem Wort
let splitText2 = text.split(" ");
console.log(splitText2);


/* 
Die Klasse String hat eine weitere split-Methode mit folgender Signatur:

String[] split(String regex, int limit)

Diese Methode hat den zusätzlichen Parameter limit: Er bestimmt, wie oft das regex-Muster auf die ursprüngliche Zeichenkette angewendet wird. Siehe die Erklärungen unten:
limit > 0
Das Muster wird limit-1 Mal angewendet. Außerdem wird die Länge des zurückgegebenen Arrays den Wert des limit-Parameters nicht überschreiten. Das letzte Element des Arrays ist der Teil der Zeichenkette, der auf die letzte Stelle folgt, an der das Trennzeichen gefunden wurde.  */




// 3. nach jedem Buchstaben



let text2 = "It's okay, Bender. I like cooking too. Oh, you're a dollar naughtier than most. My fellow Earthicans, as I have explained in my book 'Earth in the Balance', and the much more popular 'Harry Potter and the Balance of Earth', we need to defend our planet against pollution. Also dark wizards."

let splitTextB = text2.split("");
console.log(splitTextB);

// andere Variante 
let splitText = new Array(text2.length);
for (let i = 0; i < text2.length; i++) {
  splitText[i] = String.fromCharCode(text2.charCodeAt(i));
}
console.log(splitText); 