// # ===== ONCLICK =====

const halloOutput = document.querySelector("#hello-output");

const sayHello = () => {
  halloOutput.innerHTML = "Hallo Onclick Kurs";
};

// # ====== EVENTS & EVENTLISTENER =======

const sayHiBtn = document.querySelector("#say-hi-btn");
const textInput = document.querySelector("#text-input");
const selectInput = document.querySelector("#select-input");
const selectOutput = document.querySelector("#select-output");
const submitBtn = document.querySelector("#submit-btn");

// Ein Eventlistener beobachtet das asugewählte Element und guckt, ob ein Event drauf ausgeführt wurde
// Ein Event kann zb ein klick sein

// Aufbau
// - 1. Welches Element soll beobachtet werden
// * sayHiBtn

//  - 2. EventListener hinzufügen
// * sayHiBtn.addEventListener()

// - 3. Event definieren
//  * sayHiBtn.addEventListener('click')

// - 4 Definieren was bei dem Event passieren soll
sayHiBtn.addEventListener("click", () => {
  halloOutput.innerHTML = "Hallo von dem Event";
});

// * === Mouseover ===
// Die Maus wird auf das Element bewegt
textInput.addEventListener("mouseover", () => {
  console.log("Die Maus wurde über mich bewegt");
  textInput.style.border = "3px solid red";
});

// * === Mouseout ===
// Die Maus bewigt sich raus

// -Neue schreibweise
textInput.addEventListener("mouseout", () => {
  console.log("Die Maus hat mich verlassen");
  textInput.style.border = "3px solid blue";
});

// -Alte schreibweise
// textInput.addEventListener("mouseout", function () {
//   console.log("Die Maus hat mich verlassen");
//   textInput.style.border = "3px solid blue";
// });

// * === Change ===
selectInput.addEventListener("change", () => {
  console.log("Ich wurde verändert");
  halloOutput.innerHTML = selectInput.value;
});

// ! Externer EventListener
// Wir können die Funktion auch auslagern, damit wir das ganze genereller halten können

const inputFuc = () => {
  console.log("In mich wurde was eingetragen");
  halloOutput.innerHTML = textInput.value;
};

textInput.addEventListener("input", inputFuc);

submitBtn.addEventListener("click", () => {
  // verhindet das neuladen der Seite
  event.preventDefault();

  // * === Remove ===
  // Wir können auch eine Event wieder removen
  // Das funktioniert aber nur wenn wir die Funktion Auslagern wie in Zeile 66
  textInput.removeEventListener("input", inputFuc);
});