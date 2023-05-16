/* In dieser Übung werden wir DOM Elements kennenlernen.
Schreibe eine Funktion, die beim Anklicken des “Change me” Buttons den Home Button ändert.
Der Code befindet sich im Kommentar.
 */



const button = document.querySelector("#navChange");
const changeHome = document.querySelector("#navHome");

function reverse(s){
    return s.split("").reverse().join("");
}

button.addEventListener("click", (e) => {

    let textHome = changeHome.textContent;
    textHome = reverse(textHome);

    changeHome.style.backgroundColor = "pink";
    changeHome.style.padding = "20px";
    changeHome.style.margin = "10px";
    changeHome.style.fontFamily = "Arial";
    changeHome.innerHTML = textHome;
});
