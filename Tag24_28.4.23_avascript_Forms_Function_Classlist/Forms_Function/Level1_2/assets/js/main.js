function getInputValue(){
    const output = document.querySelector(".output");
    let age = Number(document.querySelector(".bday").value);
    //console.log(age);
    output.innerHTML += 2023 - age;
}