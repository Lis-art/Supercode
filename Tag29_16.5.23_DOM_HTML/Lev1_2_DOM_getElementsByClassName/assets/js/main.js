/* Schreibe eine Funktion, die beim Anklicken der Buttons die Hintergrundfarben aller Elemente ändert.

HTML- und CSS-Code findest du im Kommentarbereich.
Nutze zum Beispiel
getElementsByClassName
for loop
length
Bonus: Wenn man nochmal den Button anklickt, ändert sich die Hintergrundfarbe wieder zurück.
 */


const elementColorChange = document.getElementsByClassName("example");
let isChanged = false;


function myFunction() {
    let color1 = "black";
    let color2 = "white";

    if (isChanged === false){
        isChanged = true;
    } else {
        isChanged = false;
        color1 = "white";
        color2 = "black";
    }
    
    for (let i = 0; i < elementColorChange.length; i++){
        elementColorChange[i].style.backgroundColor = color1;
        elementColorChange[i].style.color = color2;
    }
};