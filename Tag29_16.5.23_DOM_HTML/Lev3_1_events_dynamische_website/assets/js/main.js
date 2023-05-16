/* Schreibe wieder eine kleine App, die die Hintergrundfarbe ändert.
Schreibe 3 Funktionen:
Ändere die Hintergrundfarbe, wenn auf einen Button 
geklickt wird.
Ändere die Hintergrundfarbe, wenn die Regler verschoben werden in den jeweiligen Farbwert.
konvertiere Dezimal zu Hex.
Assets:
let count = 0; // global variable
HTML CSS Code befindet sich im Kommentar
 */


let count = 0;
const bodyHTML = document.querySelector("body");
let changeText = document.querySelector("#demo");

function changeBackground (color){
    count++;
    bodyHTML.style.backgroundColor = color;
    
    changeText.innerHTML = "Wir haben die Farbe " + count + " geändert und hat die Farbe " + color; 
};



function changeHandle(){
    const rangeBtn = document.querySelectorAll("input");
    let dasGroßeGanze = "#";
    
    for (let i = 0; i < rangeBtn.length; i++){
        let numRangeBtn = rangeBtn[i].value; 
        let myHex = Number(numRangeBtn).toString(16);
        dasGroßeGanze += myHex;
    }
    console.log(dasGroßeGanze);
    
    //bodyHTML.style.backgroundColor = dasGroßeGanze;
    //changeText.innerHTML = dasGroßeGanze;
    //count++;
    changeBackground(dasGroßeGanze);
    //das hier ist dasselbe wie die drei zeilen dadrüber
};




