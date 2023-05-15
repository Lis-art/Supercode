/* Schreibe eine Funktion, die beim Anklicken des Buttons die jeweilige 
Farb-Option aus der Liste entfernt.
Den HTML- und CSS-Code findest du im Kommentarbereich.

Nutze:
onClick
selectedIndex
remove()
 */


document.querySelector("#button").addEventListener("click", (e) => {
    e.preventDefault();
  
    let selection = document.querySelector("#farbeAuswahlen").selectedIndex;
    document.querySelector("#farbeAuswahlen").remove(selection);
  });