/* 
Wir haben in unserem HTML ein Inputfeld, in dem der User eine Zahl eingeben soll.
Schreibe eine Funktion, mit der du am Ende in deinem HTML das Wort “Loop” ausgibst.
Die Anzahl der Buchstaben “o” variiert durch die Eingabe des Users.
 
Hinweise:

Du wirst mit einem Array arbeiten müssen.
Nutze einen Loop und eine Array-Methode, um an einer bestimmten Stelle das neue Element hinzuzufügen.
Wandle das Array am Ende in einen String um.
*/


function applyOs () {
    let inputNumber = document.querySelector("#numberInput");
    let inputNumberValue = inputNumber.value; // gibt nummer aus - die nummer soll nachher mit Os ersetzt werden + inner html angezeigt werden
  
    //wenn User 5 eingibt soll loop fünf mal durchlaufen und für jeden durchlauf ein o in Loop ergänzen

    let array = [];
  
    for (let i = 1; i <= inputNumberValue; i++) {
      array.push("o");
    }
  
    let loopString = "L" + array.join("") + "p";
  
    document.querySelector(".output").innerHTML = loopString;
}