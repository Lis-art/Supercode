// # ==== WINDOW OBJECT ====
// Das window Object representiert das geöffnete Fenster im Borwser
// console.log(window);

// * window.alert()
// Es öffnet sich ein Popup in dem der Text "Hallo Leute" steht.
// window.alert("Hallo Leute");

// * window.prompt()
// Es öffnet sich ein Popup wo der User was eintragen kann.
// window.prompt("Was machst du heute?");

// * Um auf die Texteingabe  zuzugreifen müssen wir es in einer variable speichern.
// let returnPrompt = window.prompt("Was machst du heute?");
// console.log(returnPrompt);

// * innerHeight
// Werte sind in px.
// Borwserzeile und Devtools sind nicht einbegriffen
console.log("innerHeight", window.innerHeight);

// * innerWidth
// Werte sind in px.
// Borwserzeile und Devtools sind nicht einbegriffen
console.log("innerWidth", innerWidth);

// ! === Screen ===
// * screen
// Das Screen Object befindet sich im Window Object. Es gibt uns Informationen über den Bildschirm, auf dem sich der Browser befinddet.
// console.log(window.screen);

// *screen.height
// Wir bekommen die höhe zurück (px)
console.log("screen.height", window.screen.height);

// *screen.width
// Wir bekommen die breite zurück (px)
console.log("screen.width", window.screen.width);

// * screen.availHeight
// Wir bekommen die Höhe des Screens ohne Taskleiste zurück, also nur den Nurzbaren bereich
console.log("screen.availHeight", window.screen.availHeight);

// * screen.availWidth
// Wir bekommen die Breite des Screens ohne Taskleiste zurück, also nur den Nurzbaren bereich
console.log("screen.availWidth", window.screen.availWidth);

// * window.open
// Mit window.open können wir auf andere seiten weiterleiten
// Wir können nichtmehr auf den Zurückpfeil klicken
// Das eignet sich, wenn man von alten Seiten weiterleiten möchte
// Default wird die Seite immer in einem Neuen Tab geöffnet.
// window.open("https://www.super-code.de");

// - öffnet im selben Tab
// window.open("https://www.super-code.de", "_self");
// - öffnet im neuen Tab
// window.open("https://www.super-code.de", "_blank");

// * window.onload
// wenn die Steite geladen wurde, wird in der Konsole "Die Seite wurde nun geladen" angezeigt
window.onload = console.log("Die Seite wurde nun geladen");

// * window.scrollTo
// mit der window.scrollTo können wir zu einem bestimmten Punkt der Seite scrollen

document.querySelector("#scroll").addEventListener("click", () => {
  // 1. Wert: px auf x Achse
  // 2. Wert: px auf y Achse
  window.scrollTo(0, 1000);
});

// * window.location
console.log(window.location);

// * So bekommen wir die Domain zurück
console.log(window.location.host);

// * So bekommen wir den Pfad zurück
console.log(window.location.pathname);

// * location.reload()
// Damit können wir die aktuelle Seite neu laden lassen
document.querySelector("#reload").addEventListener("click", () => {
  window.location.reload;
});

// * location.replace()
// Wir können auf eine andere URL weiterleiten
document.querySelector("#redirect").addEventListener("click", () => {
  window.location.replace("https://www.super-code.de");
});

// * window.history
console.log(window.history);
document.querySelector("#back").addEventListener("click", () => {
  history.back();
});

// # ======== JS TIMING EVENTS =========

// * setTimeOut
// Eine Funktion wird erst nach einer Verzögerung ausgeführt.

const konsolenAusgabe = () => {
  console.log("Hier steht was in der Konsole :-)");
};

const konsolenAusgabeLoschen = () => {
  console.clear();
};

// - Wert 1: Welche Funktion soll ausgeführt werden
// - Wert 2: Nach wie vielen Milisekunden soll die Funktion ausgeführt werden
//  Hier wird nach 2sek was in die Konsole geschrieben, und nach 4sek gelöscht
// setTimeout(konsolenAusgabe, 2000);
// setTimeout(konsolenAusgabeLoschen, 4000);

// * setInterval
// Wir können eine Funktion in einem bestimmten Intervall immer wieder ausführen lassen.
// setInterval(konsolenAusgabe, 1000);

// * clearInterval
// löscht ein interval wieder.
// - Wir müssen das setInterval() in einer Variable speichern damit wie das später wieder löschen können
// const interval = setInterval(konsolenAusgabe, 1000);

document.querySelector("#interval-loeschen").addEventListener("click", () => {
  clearInterval(interval);
});

// * So kann man eine setInterval in einer Vallback Funk. schreiben
// Neu
setInterval(() => {
  console.log("Hallöchen");
}, 1000);

// Alt
setInterval(function () {
  console.log("Servus");
}, 1000);