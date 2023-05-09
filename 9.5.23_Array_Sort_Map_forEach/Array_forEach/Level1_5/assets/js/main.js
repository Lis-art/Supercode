/* Verwende die Variable checkNumber und map(). Wenn sich die Zahl durch 3 teilen lässt, dann sollen zu ihr 100 addiert werden.

Verwende den Code aus dem Kommentarbereich.
Verwende ein if  Statement, um zu überprüfen, ob die Zahl durch 3 teilbar ist.
Wenn ja, addiere 100 zu dieser Zahl hinzu.
Gib das Resultat in der Konsole aus.
 */

let checkNumber = [
    18,
    16,
    80,
    51,
    47,
    38,
    95,
    42,
    68,
    61,
    34,
    51,
    20,
    17,
    56,
    31,
    100,
    6,
    5,
    30,
    74,
    97,
    28,
    99,
    91,
    27,
    73,
    12,
    92,
    6,
    27,
    71,
    26,
    15,
    78
  ];
  
let gemappet = checkNumber.map((num) => {
  if (num % 3 == 0){
    return num + 100;
  } else {
    return num;
  }
});
console.log(gemappet);
// mit return(+ Bedingung) wird gesagt welchen wert die variable gemappet hat
// würde man keinen wert mit return geben wäre die variable leer

// bei else wird gesagt das wenn die zahl nicht durch drei teilbar ist gib einfach die zahl aus