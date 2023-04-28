
/* let newBtnText = document.querySelector(".Ueberprüfung");
newBtnText.innerHTML = "Überprüfung";
console.log(newBtnText);
 */


function adult(){
    let inputNum = (document.querySelector(".num").value);
    //console.log(inputNum);
    const output = document.querySelector(".outputifelse");
    //console.log(outputifelse);


    if (inputNum >= 18){
        output.innerHTML = "Volljährig";
        //console.log("Volljährig");
    } else {
        output.innerHTML = "Minderjährig";
        //console.log("Minderjährig");
    }
}
