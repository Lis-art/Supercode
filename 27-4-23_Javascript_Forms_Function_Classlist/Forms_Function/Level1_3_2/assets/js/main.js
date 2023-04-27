let counterValue = 0;

function oneUp() {
    counterValue += +1;
    //console.log(counterValue);

    const headline = document.querySelector(".counter-display");
    headline.innerHTML = counterValue;
}


function tenUp() {
    counterValue += +10;
    //console.log(counterValue);

    const headline = document.querySelector(".counter-display");
    headline.innerHTML = counterValue;
}

function hunUp() {
    counterValue += +100;
    //console.log(counterValue);

    const headline = document.querySelector(".counter-display");
    headline.innerHTML = counterValue;
}

function reset() {
    counterValue += 0;
    //console.log(counterValue);

    const headline = document.querySelector(".counter-display");
    headline.innerHTML = counterValue;
}

function oneDown() {
    counterValue += - 1;
    //console.log(counterValue);

    const headline = document.querySelector(".counter-display");
    headline.innerHTML = counterValue;
}

function tenDown() {
    counterValue += - 10;
    //console.log(counterValue);

    const headline = document.querySelector(".counter-display");
    headline.innerHTML = counterValue;
}

function hunDown() {
    counterValue += - 100;
    //console.log(counterValue);

    const headline = document.querySelector(".counter-display");
    headline.innerHTML = counterValue;
}

function double() {
    counterValue += counterValue * 2;
    //console.log(counterValue);

    const headline = document.querySelector(".counter-display");
    headline.innerHTML = counterValue;
}

