/* In dieser Übung lernen wir SET Date Methods.
Zeige die Daten wie auf dem Screenshot auf und nutze die Set Date Methode.
In der letzten Zeile wurden 30 Tage auf das damals aktuelle Datum addiert.
Denkt dran, dass euer Ergebnis sich aufgrund des Datums von dem Screenshot unterscheiden wird.
Nutzt Google, falls ihr nicht weiterkommt. :) 
 */

let date = new Date();
//console.log(date);
// Mon May 22 2023 11:00:49 GMT+0200 (Mitteleuropäische Sommerzeit)

//Wed Oct 23 2022

date.setDate(23);
date.setMonth(9);
date.setFullYear(2022);
//let newDate1 = new Date (2022, 9, 23, 3);
console.log(date);

//Wed Feb 24 2123
date.setDate(24);
date.setMonth(1);
date.setFullYear(2123);
//let newDate2 = new Date (2123, 1, 24, 3);
console.log(date);

//Wed Mar 24 2123
date.setDate(24);
date.setMonth(2);
date.setFullYear(2123);
//let newDate3 = new Date (2123, 2, 24, 3);
console.log(date);

// Wed Mar 03 2123
date.setDate(03);
date.setMonth(2);
date.setFullYear(2123);
//let newDate4 = new Date (2123, 2, 03, 3);
console.log(date);

// Fri Nov 22 2019
date.setDate(22);
date.setMonth(10);
date.setFullYear(2019);
//let newDate5 = new Date (2019, 1, 22, 5);
console.log(date);