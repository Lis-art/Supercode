 // * ========== Collection ============

console.log(document.forms);

// hiermit holen wir unsere Login Form -> loginForm = name im html
const loginForm = document.forms.loginForm;
console.log(loginForm);

// zeigt in Console einzelne Elemente (InputFelder) an von Forms, Name wichtig
console.log(loginForm.elements);

// holt den Wert von username
console.log(loginForm.elements.username.value);

// holt den wert vom password feld
console.log(loginForm.elements.password.value);

// button element ohne value
console.log(loginForm.elements.button);


// * ========== NodeList & HTML Collection ==========

const liHTMLCollection = document.getElementsByTagName("li");
const liNodeList = document.querySelectorAll("li");

console.log({liHTMLCollection});
console.log({liNodeList});

// * ========== NodeList vs HTML Collection ==========
// HTML Collection ==> ist eine Live Liste (sonst sind die sachen so in var gespeichert wie zum zeitpunkt der erstelleung der Var) ---- forEach funktioniert nicht
// NodeList ==> Statisch - Var akzualisiert sich nicht --- forEach funktioniert (einzige Array Methode die bei NodeList funktioniert)

// erstelle ein Li Element und füge das mit JS zum HTML hinzu
console.log({liHTMLCollection}); // element wäre mit drin
console.log({liNodeList}); // nicht mit drin nach erstellung in JS

//liHTMLCollection.forEach(element => {
//    console.log(element);
//});
// klappt nicht - trick umwandlung array 
liNodeList.forEach(htmlElement => {
    console.log(htmlElement);
    htmlElement.innerHTML = "Hallo";
});
// funktioniert

//console.clear(); leert console
console.log(document.body.children[0].children);
// immer Elemente loggen um zu wissen was es ist!!!! 

console.log(document.body.firstElementChild); //ul
console.log(document.body.lastElementChild); //script





//  * ====== create Element, append Child ====

//console.clear();

// 1. erstellet element der wahl hier div
const divElement = document.createElement("div");

// 2. legt text im element fest
divElement.textContent = "Hallo ich bin ein div";

// 3. element gestylt
divElement.style.height = "100px";
divElement.style.backgroundColor = "tomato";

// 4. element wird im html als Child hinzugefügt

document.body.appendChild(divElement);




// * Alternative - man element damit easy einfügen wo man will - 4 möglickeiten

const ul = document.body.chldren[0];
ul.insertAdjacentHTML("afterbegin", divElement);
// gibt es mit before, before end, afterbegin...

// damit kann man eine Vorlage für ein html element erstellen was man immer wieder nutzen wird
const html = `<li>moin ich bin ein li</li>`;
ul.insertAdjacentHTML("afterbegin", html); //- kommt oben ins html

console.log({liHTMLCollection}); // neues element ist hier mit drin
console.log({liNodeList}); // nicht mit drin nach erstellung in JS






// * ======== for Each, create element, appendChild
const socialMedia = ["facebook", "twitter", "tiktok", "instagram"];
    
socialMedia.forEach((item) => {
    const element = document.createElement("li");
    element.innerHTML = item;
    ul.appendChild(element);
});
// elemente wurden oben am ende der list items hinzugefügt







// * ======= setAttribute & create Element mit imgs ======

const imageElement = document.createElement("img");
imageElement.setAttribute("src", "https://picsum.photos/200");
imageElement.setAttribute("alt", "Ein Random Bild von Picsum");
imageElement.setAttribute("class", "random-class"); //AUFPASSEN damit wird aktuelle class überschrieben

document.body.appendChild(imageElement);
// img element wurde unten im html eingefügt






// * ======= setAttribute & create Element mit for each ======

const imgSourceArray = [
    "https://picsum.photos/200",
    "https://picsum.photos/201",
    "https://picsum.photos/202",
    "https://picsum.photos/203",
];

imgSourceArray.forEach(imgSrc => {
    const newImg = document.createElement("img");
    newImg.setAttribute("src", "imgSrc");
    newImg.setAttribute("alt", "randomImage");
    document.body.appendChild(newImg);

    //Alternative, so einfach zack ins HTML
    const imageHTML = `<img src=${imgSrc} alt="randomImage">`;
    document.body.insertAdjacentHTML("afterbegin", imageHTML);
});


// ! wichtigsten DOM Sucher
// * querySelector
// * querySelectorAll
// * closest - geht nach oben (z.B um Container zu ändern!), query nach unten
// * insertAdjacentHTML
// * setAttribute