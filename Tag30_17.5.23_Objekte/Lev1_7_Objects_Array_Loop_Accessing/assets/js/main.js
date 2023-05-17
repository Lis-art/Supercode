/* In dieser Übung lernen wir, wie man auf die Objekte mit Hilfe von forEach() zugreift.
Verwende den Code aus dem Kommentarbereich.
Greife auf die Eigenschaften des Objekts zu und gib folgende Werte mit forEach() 
im HTML aus:
Alle “artist” 
Alle “title”
Alle “medium”

Bonus Aufgabe:
Gib alle “release_year” älter als 1975 aus
 */


let myMusic = [
    {
      artist: "The Beatles",
      title: "Abbey Road",
      release_year: 1969,
      medium: ["LP", "CD", "MC", "Download"],
      gold: true
    },
    {
      artist: "Pink Floyd",
      title: "Dark Side of the Moon",
      release_year: 1978,
      medium: ["CS", "CD", "LP", "Download"],
      gold: true
    },
    {
      artist: "Led Zeppelin",
      title: "Led Zeppelin IV",
      release_year: 1971,
      medium: ["CS", "LP", "Download"],
      gold: true
    },
    {
      artist: "Metallica",
      title: "Kill ’Em All und Ride the Lightning",
      release_year: 1983,
      medium: ["LP", "CD", "MC", "Download"],
      gold: true
    }
  ];
  
  myMusic.forEach(music => {

    const html = `<p>${music.artist}</p>`;
    const html2 = `<p>${music.title}</p>`;
    const html3 = `<p>${music.medium}</p>`;
    const html4 = `<p>${music.release_year > 1975}</p>`;
    
    
    document.body.insertAdjacentHTML("afterbegin", html);

    document.body.insertAdjacentHTML("afterbegin", html2);

    document.body.insertAdjacentHTML("afterbegin", html3);

    //BONUS ?
    document.body.insertAdjacentHTML("afterbegin", Number(html4));

    
    
    console.log(`${music.artist}, ${music.title}, ${music.medium}`);
  })