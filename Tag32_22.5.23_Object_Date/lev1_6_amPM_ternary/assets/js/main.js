/* 
Schreibe eine Funktion, um AM und PM zu erhalten.
Wenn die Uhrzeit kleiner als 12 Uhr ist, wird AM angezeigt.
Wenn die Uhrzeit größer als 12 Uhr ist, wird PM angezeigt.
Die Funktion enthält:
Ein Parameter
Ternary Operator oder if
getHours()
Überprüfe deine Funktion in der Konsole.
Teste sie mit folgenden Argumenten:
 */


let date1 = new Date(1999, 10, 5, 15) //PM
let date2 = new Date()
let date3 = new Date(2019, 12, 3, 12) //PM
let date4 = new Date(2000, 1, 1, 11) //AM

function amPM(dateInput) {
    let hours = dateInput.getHours();

    if (hours < 11.59){
        return "AM";
    } else {
        return "PM";
    } 

}
console.log(amPM(date1));
console.log(amPM(date2));
console.log(amPM(date3));
console.log(amPM(date4));


//Ternary Operator
/* const amPm = date => {
    let amPm = date.getHours() < 12 ? "AM" : "PM";
    return amPm;
}; */