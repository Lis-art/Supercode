
function applyOs () {
    let inputNumber = document.querySelector("#numberInput");
    let inputNumberValue = inputNumber.value; // gibt nummer aus - die nummer soll nachher mit Os ersetzt werden + inner html angezeigt werden



    if (inputNumberValue == 0)
    {
      document.querySelector(".output").innerHTML = 'Fuck You! Enter valid stuff c\'mon.';
      return;
    }
    //wenn User 5 eingibt soll loop fünf mal durchlaufen und für jeden durchlauf ein o in Loop ergänzen

    let array = [];

    const inputIsEven = inputNumberValue % 2 == 0;
    // wenn durch zwei teilbar und gleich null zahl gerade -> modulo
    for (let i = 0; i < inputNumberValue; i++)
    {
      const indexIsEven = i % 2 == 0;
      // wennn eingabe zahl 7 wird hier geschaut für die indexe 0-6 (also 7 werte)
      if (inputIsEven || indexIsEven)
      { //  wenn gerade alle o weil bedingung oben true  (inputiseven = true) 
        // ODER index is even heißt starte bei 0 dann true 
        // nächste index ist eins dann false dann geht er unten rein in else 
        // -> er wechselt dann immer ab zwischen even passt gib o ODER index true gib 0
        array.push("o");
      }
      else
      {
        array.push("0");
      }
    }
  
    let loopString = "L" + array.join("") + "p";
  
    document.querySelector(".output").innerHTML = loopString;
}