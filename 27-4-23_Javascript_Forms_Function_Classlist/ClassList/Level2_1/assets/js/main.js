function changeHeadline() {
    let headline = document.querySelector("h3");
    headline.classList.add("red");
    //console.log({headline});
}
// Property classlist hat Methoden (quasi das gleiche Funktionen nur von nem Object!) - hier und ist der Methodenname .add - durch das nutzen der Methode .add
// füge ich dann die Klasse (und deren Eigenschaften über CSS) der Headline hinzu

function resetHeadline() {
    let headline = document.querySelector("h3");
    headline.classList.remove("red");
}