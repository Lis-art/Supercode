function weather(){
    let inputNum = parseInt(document.querySelector(".num").value);
    //console.log(inputNum);
    const output = document.querySelector(".outputifelse");
    //console.log(outputifelse);


    if (inputNum >= 8 && inputNum < 10){
        output.innerHTML = "super";
        //console.log("super");
    } else if (inputNum >= 6 && inputNum <= 7) {
        output.innerHTML = "gut";
        //console.log("gut");
    } else if (inputNum >= 3 && inputNum <= 5) {
        output.innerHTML = "okay";
        //console.log("okay");
    } else if (inputNum >= 0 && inputNum <= 2); {
        output.innerHTML = "schlecht";
        //console.log("schlecht");
    }
}

