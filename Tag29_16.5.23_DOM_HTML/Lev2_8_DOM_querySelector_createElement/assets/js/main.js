/* 
Schreibe eine Funktion, die beim Anklicken des Buttons ein neues Listenelement erstellt.
Den HTML- und CSS-Code findest du im Kommentarbereich.
Nutze:
querySelector()
addEventListener()
createElement()
createTextNode()
appendChild()

Bonus: Beim Betätigen der ENTER-Taste wird ebenfalls ein Listenelement erstellt.
Suche nach keycode.
 */

const userInput = document.querySelector("#userinput");
const btn = document.querySelector("#enter");
const listenDing = document.querySelector("ul");
btn.addEventListener("click", (e) => {
    e.preventDefault();

    const liElement = document.createElement("li");

    const textNode = document.createTextNode(userInput.value);
    liElement.appendChild(textNode);
    listenDing.appendChild(liElement);
});