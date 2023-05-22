function greaterThen() {
    event.preventDefault();
    
    let inputNum = document.getElementById('input').value;
    //console.log(inputNum);
    const output = document.querySelector(".outputifelse");
    //console.log(outputifelse);

    if (inputNum >= 18){
        output.innerHTML = "Ja, du kannst Shisha rauchen.";
        console.log("Ja, du kannst Shisha rauchen.");
    } else {
        output.innerHTML = "Du darfst noch nicht Shisha rauchen.";
        console.log("Du darfst noch nicht Shisha rauchen.");
    }
}



