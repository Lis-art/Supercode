let btn = document.querySelector("Berechne!");
console.log(btn.innerHTML);
btn.innerHTML = "Berechne!";

function getInputValue(){
    const output = document.querySelector(".output");

    let bYear1 = Number (document.querySelector(".bday1").value);
    let bYear2 = Number (document.querySelector(".bday2").value);
    console.log(bYear1, bYear2);

// if else um keinen minus wert zu ehalten

    if (bYear1 > bYear2){
        output.innerHTML += bYear1 - bYear2;
    } else {
        output.innerHTML += bYear2 - bYear1;
    }
}