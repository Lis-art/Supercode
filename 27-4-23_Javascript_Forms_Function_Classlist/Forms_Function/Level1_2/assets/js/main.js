let rechne = document.querySelector("berechne");
console.log(rechne.innerHTML);
rechne.innerHTML = "Berechne";

function getInputValue(){
    const output = document.querySelector(".output");
    
    let age = Number (document.querySelector(".bday").value);
    console.log(age);

    output.innerHTML += 2023 - age;
}