/* In dieser Übung werden wir den Eventhandler change kennenlernen.
Der Eventhandler change wird bei einer erfolgten Änderung ausgelöst. Diese Wertänderung wird im Normalfall in einem Formularelement stattfinden.
Schreibe eine Funktion, die die Zeichenkette im Paragraph ändert, nachdem du ein Element aus der Liste ausgewählt hast.
Nutze:
addEventListener("change",)
 */



document.querySelector("#my-select").addEventListener("change", (e) => {
    e.preventDefault();
  
    let selection = e.target.value;
    document.querySelector("#changedText").innerHTML = "Sie haben ausgewählt " + selection;
});