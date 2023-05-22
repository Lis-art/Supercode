

function checkAirQuality(){
    let rangeNum = document.querySelector(".num").value;
    //console.log(rangeNum);

    const output = document.querySelector(".outputifelse");
    const concern = document.querySelector(".levelHealth");
    const effect = document.querySelector(".levelEffect");

    let background = document.querySelector("body");

    if (rangeNum <= 50){
        output.innerHTML = "AQI:" + rangeNum;
        concern.innerHTML = "Level of helath concern:" + "Good";
        effect.innerHTML = "Level of helath effect:" + "Little or no risk";
        background.style.backgroundColor = "green";
        
    } else if (rangeNum >= 50 && rangeNum <= 100) {
        output.innerHTML = "AQI:" + rangeNum;
        concern.innerHTML = "Level of helath concern:" + "Moderate";
        effect.innerHTML = "Level of helath effect:" + "Acceptable quality";
        background.style.backgroundColor = "yellow";
        
    } else if (rangeNum >= 100 && rangeNum <= 150) {
        output.innerHTML = "AQI:" + rangeNum;
        concern.innerHTML = "Level of helath concern:" + "Unhealthy for sensitive groups";
        effect.innerHTML = "Level of helath effect:" + "Generable publics not likely affected";
        background.style.backgroundColor = "orange";
    }

}
