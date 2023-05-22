// # ===== for loop =====

// *Aufbau vom for loop
// for (statment1; statment2; statment3){
// codeeeee
// }

// for(start/befor; condition; step/after){
//     code
// }

// * Klassischer for loop
// i ist frei wählbar steht für index

// for (let i = 0; i <= 1000; i++) {
//   console.log(i);
// }

// * ACHTUNG vor INFINITY LOOP
// -> Verursacht ein infinity loop weil die bedingung nie erreicht werden kann.
// --> Da wir mit 6 Starten kann größer gleich 5 nicht erreciht werden
// ---> Browser stürzt ab :-( )

// for (let i = 6; i >= 5; i++) {
//   console.log(i);
// }

// # ===== Schleife in einer Schleif "nested Loop" ======
// in diesem BSP haben wir eine äußere schleife, die von 1 bis 3 läuft, und eine inner schleife, die von 1 bis 10 läuft. Bei jedem Durchlauf der außeren schleife wird die Innere Schleife vollständig durchlaufen.
for (let i = 1; i <= 3; i++) {
    console.log("Äußere Schleife START");
  
    for (let j = 1; j <= 10; j++) {
      console.log(`Äußere Schleife: ${i}, Innere Schleife: ${j}`);
    }
  }
  
  // # ===== Runterzählen mit for loop ======
  // wenn ich von groß auf klein zählen möchte muss der start index höher als der zweite Parameter sein. In diesem fall größer als 45
  for (let i = 50; i >= 40; i--) {
    console.log(i);
  }
  
  console.log("%c for Loop mit Arrays", "color: tomato; background-color: gold;");
  
  // # ===== for Schleife mit Array benutzen =====
  
  let country = ["germany", "france", "spain", "italy"];
  
  // macht das selbe wie in der schleife unten
  
  // Hier bekmmen wir die länge vom array als zahl zurück
  console.log(country.length); //4
  
  console.log(country[0].toUpperCase());
  console.log(country[1].toUpperCase());
  console.log(country[2].toUpperCase());
  console.log(country[3].toUpperCase());
  
  // Hier benutzen wie die länge von array als "endpunkt"
  for (let i = 0; i < country.length; i++) {
    console.log(i);
    console.log(country[i].toUpperCase());
  }
  
  // # ===== "for of" Schleife =====
  // mit ES6 gekommen, kurz und bündig. Ohne zustazliche variablen und kann über alles iterieren was eien ides hat. zb Array / String
  
  console.log("%c for of Loop", "color: tomato; background-color: gold;");
  
  let color = ["green", "red", "blue", "black"];
  
  // auch hier ist i frei wählbar
  for (let i of color) {
    console.log(i);
  }
  
  // Wenn ich über ein String iteriere bekomme ich jeden buchstaben einzeln
  const text = "textlang";
  
  for (let i of text) {
    console.log(i);
  }
  
  // # ===== verschiedene loops =====
  
  console.log(
    "%c mit 2 multiplizieren",
    "color: tomato; background-color: gold;"
  );
  
  let superArray = [10, 20, 30];
  
  // - for loop
  console.log("%c for loop", "color: tomato; ");
  for (let i = 0; i < superArray.length; i++) {
    console.log(superArray[i] * 2);
  }
  
  // - for of
  console.log("%c for of", "color: tomato; ");
  for (let i of superArray) {
    console.log(i * 2);
  }
  
  // - forEach
  console.log("%c forEach", "color: tomato; ");
  superArray.forEach((elt) => console.log(elt * 2));
  
  // - map
  console.log("%c map", "color: tomato; ");
  superArray.map((elm) => console.log(elm * 2));