function rechnen(){
    let number = (document.querySelector(".num").value);
    let diffNumber = number - 27;
    if (diffNumber > 27){
        diffNumber *= 2;
        console.log("multiplizier" + " " + diffNumber);
    } 
}

