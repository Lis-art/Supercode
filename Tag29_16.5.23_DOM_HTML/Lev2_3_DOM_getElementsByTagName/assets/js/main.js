/* In dieser Übung werden wir die getElementsByTagName-Methode lernen.
Schreibe eine Funktion, die beim Anklicken des “Change me”-Buttons die Button- und Hintergrundfarbe der einzelnen Elemente ändert.
Hinweise:
Nutze die Methode getElementsByTagName
Farben: #f6c89f, #ffe7d1, #4b8e8d, #396362, #666, #333
Denk an den index[]
 */


const button = document.querySelector("#navChange");
const liElements = document.getElementsByTagName("a");
console.log(liElements);


button.addEventListener("click", (e) => {
    const colorArray = ["#f6c89f", "#ffe7d1", "#4b8e8d", "#396362"];
    
    for (let i = 0; i < liElements.length; i++){
        liElements[i].style.color = "#666";
        liElements[i].style.backgroundColor = colorArray[i];
    }
});