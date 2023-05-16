/* Schreibe eine Funktion, die beim Anklicken der Buttons jeweils den Inhalt der Elemente anzeigt. Schau dir das Ergebnis in der Ergebnisvorschau an.
Den HTML- und CSS-Code findest du im Kommentarbereich.
Nutze:
firstElementChild
lastElementChild
nextElementSibling
previousElementSibling
innerHTML
querySelectorAll
querySelector
addEventListener
 */

const buttonArray = document.querySelectorAll("button");
const ul = document.body.firstElementChild;
const ouput = document.querySelector("output");

buttonArray.forEach((button, index) => {
    button.addEventListener("click", (e) => {
    e.preventDefault();

        console.log(index);

    if(index === 0){
        const liFirstEL = ul.firstElementChild.textContent;
        ouput.innerHTML = liFirstEL;
    } else if (index === 1){
        const liLastEl = ul.lastElementChild.textContent;
        ouput.innerHTML = liLastEl;
    } else if (index === 2){
        const nextElSib = ul.firstElementChild.nextElementSibling.textContent;
        ouput.innerHTML = nextElSib;
    } else {
        const previousElSib = ul.lastElementChild.previousElementSibling.textContent;
        ouput.innerHTML = previousElSib;
    }

    })
});