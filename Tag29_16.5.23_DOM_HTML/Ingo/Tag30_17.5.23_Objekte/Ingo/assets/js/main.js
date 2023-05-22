// * Objects = Möglichkeit Daten strukturiert in Form von Key Value Paaren zu speichern

// ? ==================  Object erstellen ================
const person = {
    name: "Ingo",
    age: 35,
    adult: true,
    city: "Moormerland",
    "admin-status": true //geht auch
}

console.log(person);
//Reihenfolge egal
// Funktion im Objekt = Methode

//* Zugriff auf Values
// DOT Notation
console.log(person.name);

// Braket Notation - Key muss IMMER String sein ""
console.log(person["age"]);

// * Werte eines Objektes neu zuweisen 
person.name = "Ingo Siemes";
console.log(person.name);

// * Werte im objekt hinzufügen
person.job = "Trainer";

// * Werte im objekt löschen
delete person.job;
console.log(person.job);



//* ======== Methoden in Objekten speichern ======
const calculator = {
    add: (a,b) => a + b,
    sub: (a,b) => {
        return a - b;
    }
}
console.log(calculator.add(2,5));


const person2 = {
    name: "Ingo",
    age: 35,
    adult: true,
    city: "Moormerland",
/*     
    greet: (name, age, city) => {
        return `Hallo mein Name ist ${name}, ich bin ${age} Jahre alt und komme aus ${city}`
    }*/
    greet: () => {
        return `Hallo mein Name ist ${person2.name}, ich bin ${person2.age} Jahre alt und komme aus ${person2.city}`
    } 
/*     greetThree function () {
        return `Hallo mein Name ist ${this.name}, ich bin ${this.age} Jahre alt und komme aus ${this.city}`
    }  */
}
//console.log(person2.greet(person2.name, person2.age, person2.city));
console.log(person2.greet())    


const greetTwo = () => {
        return `Hallo mein Name ist ${person2.name}, ich bin ${person2.age} Jahre alt und komme aus ${person2.city}`
} 
// Declaration einer ausgelagerten Funktion

// dem Key greetTwo im Person2 Objekt wird die Funktion greetTwo zugewiesen
person2.greetTwo = greetTwo;
console.log("greetTwo", person2.greet());

console.log(person2);

//console.log(person2.greetThree());





// * =============== THIS Keyword ===========================
// this wird dynamisch festgelegt, abhängig vom Aufrufkontext - klassische schreibweise
// arrow function nicht mit this .... ist schwerer

console.log("greetTwo in person2", person2.greetTwo());
//console.log("greetTwo außerhalb person2", person2.greetTwoFunction());
// unterschiedliche aufrufkontexte 1. geht, 2. nicht



// * ================= Objekte und for in Schleifen ========


const person3 = {
    name: "Ingo",
    age: 35,
    adult: true,
    city: "Moormerland",
}

for (let key in person3){
    console.log(key + " : " + person3[key])
}
// key frei definiert




// ? ==========METHODEN JAVASCRIPT===============

// * ========= Objekte => keys (von Javascript ne Methode) ====

const keys = Object.keys(person3);
console.log(keys);


// * ========= Objekte => values =============

const values = Object.values(person3);
console.log(values);

// * ========= Objekte => entries =============

const entries = Object.entries(person3);
console.log(entries);
// array in array 

// Zahl 35 ausgeben
console.log(entries[1][1]); //array Nr 1 mit Index Nr 1

const array = ([1,2,3][1[1[32]]])
console.log(array[3][2][3][1]);




// * ========== Objekte innerhalb von Objekten ======

const person4 = {
    name: "Magda",
    job: "trainer",
    city: "Hamburg",
    socialMedia: {
        linkedIn: "linkedProfilPage", //diesen Wert auslesen
        insta: "instagramPage",
        "tik-tok": "tik-tok Profil"
    },
    hobbies: ["coding", "gaming", "zeichnen"]
}
const valuesPerson4 = Object.values(person4.socialMedia);
console.log(valuesPerson4[0]);

console.log(person4.socialMedia.linkedIn); //einfacher Weg
console.log(person4.socialMedia["tik-tok"]);

console.log(person4.hobbies);




// * ========= Objekte in Array =========

const superTrainer = [
    {
        name: "Ingo",
        city: "momland"
    },
    {
        name: "Magda",
        city: "hamburg"
    },
    {
        name: "Marzio",
        city: "Bayern"
    },
]

superTrainer.forEach(trainer => {
    console.log(`${trainer.name} kommt aus ${trainer.city} `)
})



superTrainer.forEach(trainer => {

    const html = `<div>
      <h2>${trainer.name}</h2>
      <p>${trainer.city}</p>
    </div>`;
  
    document.body.insertAdjacentHTML("afterbegin", html);
  
    console.log(`${trainer.name} kommt aus ${trainer.city}`)
  })