function changeBackground(){
    let red = (document.querySelector("#red").value);
    let green = (document.querySelector("#green").value);
    let blue = (document.querySelector("#blue").value);
    let color = "rgb(" + red + "," + blue + "," + green + ")";
    console.log(red, green, blue, color);
    document.querySelector("body").style.backgroundColor = color;
}

