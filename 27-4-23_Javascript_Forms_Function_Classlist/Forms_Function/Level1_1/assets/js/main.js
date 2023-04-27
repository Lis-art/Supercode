let doubleMe = document.querySelector("verdoppel mich");  
console.log(doubleMe.innerHTML);   
doubleMe.innerHTML = "Verdoppel mich";

function getInputValue() {
    const output = document.querySelector(".output");

    let zahl = Number (document.querySelector(".num").value);
    console.log(zahl);

    output.innerHTML += zahl * 2;
} 
