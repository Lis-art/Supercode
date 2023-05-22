//  # ======== Date Objects ========
// mit new Date() erstellen wir eine neues Date Object
// Start am 1.1.1970

// * Wenn wir keine Parameter mitgeben, bekommen wir die aktuelle Zeit + Datum.
let date1 = new Date();
console.log(date1);
console.log(typeof date1);
// Geht nicht weil kein String
// console.log(date1.toUpperCase());

// * Wenn wir Parameter mitgeben, wird ein Objekt mit den durchgereichen Zeiten erstellt
// Monat Index startet bei 0 = Jan.
let date2 = new Date(1993, 3, 30, 12, 11, 44);
console.log(date2);
console.log(typeof date2);

// * Wenn wir date1 - date2 rechnen, bekommen wir die Millisekuinden, die zwischen den beiden Zeiten liegt
let date3 = date1 - date2;
console.log(date3);

// * Die .toString() Methode wandelt Date Object in einen String
let date4 = date1.toString();
console.log(date4);
console.log(typeof date4);
// Jetzt kann ich auch die String Methoden benutzen, weil string
console.log(date4.toUpperCase());

// * toUTCString() - gibt ein Datum in UTC Zeit zurück
//  UTC: The Universal Coordinated ist der Standard bei Weltuhren
let date5 = date1.toUTCString();
console.log(date5);

// * toLocacalDateString() - gibt eine Datum in einer lokalisierten darstellung zurück
let date6 = new Date().toLocaleDateString();
console.log(date6);

// !==== GET ====

// * Wir bekommen die Millisekunden seit dem 1.1.1970 0:00 Uhr zurück
date7 = date1.getTime();
console.log(date7);

// * getFullYear() - gibt uns nur das Jahr zurück
let date8 = date1.getFullYear();
console.log(typeof date8); // Number
console.log(date8);

// * getMonth() - gibt uns den Monat zurück
// Wir bekommen den Index (!!!!) des Monats zurück - Start ist bei 0 !
let date9 = date1.getMonth();
console.log(date9);

// * getDate() - gibt uns zurück welden Tag wie aktuell haben
let date10 = date1.getDate();
console.log(date10);

// * getHours() - gibt uns die Stunde zurück
let date14 = date1.getHours();
console.log(date14);

// * getMinuts() - gibt uns die aktuellen Minuten zurück
let date11 = date1.getMinutes();
console.log(date11);

// * getSeconds() - gibt uns die aktuellen Sekunden aus
let date12 = date1.getSeconds();
console.log(date12);

// * getMilliseconds() - gibt uns die Mills. aus.
let date13 = date1.getMilliseconds();
console.log(date13);

// * getDay() - gibt uns den Tag zurück
// Wir bekommen den index des Tages zurück, müssen aber daran denken, dass die Woche am Sonntag startet
let date15 = date1.getDay();
console.log(date15);

// ! === SET ===

// * setMonth() - können wir das Tagesdatum bestimmen
// Max zahl ist 31.
console.log("Ausgangdatum", date2);
date2.setMonth(4);
console.log(date2);

// * setFullYear()
date2.setFullYear(2001);
console.log(date2);

// * Namen von Wochentag rausbekommen
// - "narrow": Gibt uns den Wochentag als einzenlnen Buchstaben zurück
// - "short" : Gibt uns den Wochentag in kurz aus
// - "long": Gibt uns den ganzen Wochentag zurück
let dateObj = new Date();
let weekday = dateObj.toLocaleString("default", { weekday: "long" });
console.log(weekday);