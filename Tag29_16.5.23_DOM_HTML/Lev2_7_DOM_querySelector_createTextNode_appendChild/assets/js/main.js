/* Schreibe eine Funktion, die beim Anklicken des Buttons ein Element mit aufsteigenden Nummern erstellt.
Den HTML- und CSS-Code findest du im Kommentarbereich.
Nutze:
querySelector()
addEventListener()
let counter = 0;
createElement()
textContent()
appendChild()
classList
 */

let counter = 0;
const box = document.querySelector(".umwickeln");
const button = document.querySelector("button");

button.addEventListener("click", (e) => {
    e.preventDefault();

    
    const divElement = document.createElement("div");
    divElement.textContent = counter;
    box.appendChild(divElement);
    divElement.classList.add("rechteck");
    if (counter % 10 === 0){
        divElement.classList.add("weiss");
    }
    counter++;
});