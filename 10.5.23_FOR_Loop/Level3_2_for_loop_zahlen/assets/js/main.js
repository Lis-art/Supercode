/* Aufgabenstellung

Du hast ein Array aus Zahlen und möchtest herausfinden, durch welche Zahlen sie (außer durch eins und sich selbst) teilbar sind.

Schreibe das Ergebnis in dein HTML.

Das array ist im Kommentarbereich! */


// modulo operator nutzen 
// 5 loop 5x durchlaufen mit /1 /2 /3 /4 /5
// modulo sol bei jedem durchgang schauen ob rest == 0
// wenn ja: Zahl array + "lässt sich durch" Ergebnis Modulo + "teilen" + "das ergebnis ist" + ???
// array in array?
// soll nicht durch eins und nicht durch sich selbst teilen
/* 
let numArr = [5, 22, 15, 100, 55];

for (let i = 1; i <= numArr.length; i++){


    for (let j = 1; j <= numArr.values; j++){
        if (numArr[j] % 2 == 0) {
            console.log(numArr[j] + 'lässt sich durch 2 teilen!');
        } else if (numArr[j] % XY == 0) {
            console.log(numArr[j] + 'lässt sich durch XY teilen!');
        } else {

        } mit
    }
}

 */





let testNumbers = [5, 22, 15, 100, 55];





for (let i = 0; i < testNumbers.length; i++)
{
    const fiNumber = testNumbers[i];

    testIfItHasDividableNumbers(fiNumber);
}





// wenn numberToTest durch eine andere (die nicht 1 oder sich selbst ist) teilbar ist
// dass gibts stress
function testIfItHasDividableNumbers(numberToTest)
{
    for (let i = 2; i <= numberToTest - 1; i++)
    { // damit grenzen wir ein das for loop ab zwei starten soll und bis einen weniger als testzahl testen soll
        const potentialDivisor = i;
        // damit nehmen wir die werte oben raus aus dem (2-4 und packen das in var)
        
        const dividable = isDividable(numberToTest, potentialDivisor);
        // neue variable mit der funktion wo wir unten testen ob modulo rechnung 0 rest (true) hat oder nicht (false)
        // number to test = quasi zahl vom array
        // potential divisor = zahlen von oben 2-4 
        if (dividable)
        {
            console.log(numberToTest, dividable, potentialDivisor, numberToTest / potentialDivisor);
            // string verkettung mit den werten inner html zuordnen
        }
            
        
    }
}



// returns true wenn teilbar ohne rest
function isDividable(numberToTest, divisor)
{
    if (numberToTest % divisor == 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}





