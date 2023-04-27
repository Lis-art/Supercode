let doubleMe = document.querySelector(".verdoppel_mich");  
 //console.log(doubleMe.value);
 doubleMe.value = "verdoppel mich";
 //console.log(doubleMe.value);
// mit doubleMe.value greifen wir auf das value von dem Objekt doubleMe zu - 
//mit.xy greifen wir auf die verschiedenen "attribute" eines Objektes zu
// vereinfachte ansicht in console.log({doubleMe});
function getInputValue() {
    const output = document.querySelector(".output");

    let zahl = Number(document.querySelector(".num").value);
    //console.log(zahl);

    output.innerHTML += zahl * 2; 
    //inner HTML zeigent den INHALT des p Tags an  bzw .output
} 
