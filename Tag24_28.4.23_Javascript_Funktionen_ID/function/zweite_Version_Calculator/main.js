
const resultView = document.querySelector('.result-view');
let value = 0;


const updateHTML = () =>
{
    resultView.innerHTML = `${value}`;
}

const add = (amount) =>
{
    value += amount;
    // amount übernimmt werte aus html function add(10...)
    updateHTML();
}

const reset = () =>
{
    value = 0;

    updateHTML();
}

const multiplyBy = (amount) =>
{
    value *= amount;

    updateHTML();
}