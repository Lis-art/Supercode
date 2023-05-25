/* Nutze die Picsum Api
https://picsum.photos/v2/list

Lass dir die Liste in der Console ausgeben.
 */


/* 
fetch("https://picsum.photos/v2/list")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log("Fehler beim laden ", error);
  });


*/

/* 
Da du dir die Daten jetzt schon in der Konsole ausgeben lassen kannst, darfst du als Nächstes für jeden Datensatz eine Kombination aus Bild und Autor in ein figure-Element wrappen und in deinem HTML ausgeben lassen. 
  
Verwende dafür:
einen Loop
appendChild

Gib dem img-Tag in deinem CSS eine Breite von 50%, damit das Ganze nicht zu unübersichtlich wird.
*/



fetch("https://picsum.photos/v2/list")
    .then((res) => res.json())
    .then((data) => {
        console.log(data);

    data.forEach((author) => {
        const name = author.author;
        const img = author.download_url;
        const id = author.id;

        // DIV Element erstellen
        let authorItem = document.createElement("figure");

        // Title Element erstellen
        let nameOfAuthor = document.createElement("figcaption");
        nameOfAuthor.textContent = name;
        authorItem.appendChild(nameOfAuthor);

        // IMG Element erstellen
        let image = document.createElement("img");
        image.setAttribute("src", img);
        image.setAttribute("alt", name);
        authorItem.appendChild(image);

        // Elemente in die section mit der Class authorITEMS übertragen
        document.querySelector(".authorITEMS").appendChild(authorItem);
    });
})
.catch((error) => {
        console.log("Fehler beim Laden: ", error);
});