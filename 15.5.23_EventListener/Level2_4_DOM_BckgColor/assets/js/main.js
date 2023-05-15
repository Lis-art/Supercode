/* Schreibe eine Funktion, die beim Anklicken des Buttons die ausgewählte Farboption auf den Hintergrund des bodys anwendet.
Verwende den Code aus dem Kommentar.
Verwende Befehle:
addEventListener(“click”)
event.preventDefault();
.value
oder .selectedIndex 

Nutze Google, um zu lernen wie man Leerzeichen in Zeichenketten entfernt.
 */


document.querySelector("#button").addEventListener("click", (e) => {
    e.preventDefault();
  
    let selection = document.querySelector("#farbeAuswahlen").value;
    let index = document.querySelector("#farbeAuswahlen").selectedIndex;
    let selectionOhneLeerzeichen = selection.replace(/\s+/g, '');
    
    document.querySelector("body").style.backgroundColor = selectionOhneLeerzeichen;
    document.getElementById(`${index}`).style.backgroundColor = selectionOhneLeerzeichen;
  });

