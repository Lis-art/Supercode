/* 
Erstelle ein neues Array auf Basis des gegebenen Arrays (Kommentar unten). Beachte folgende Regeln:
entferne die Dateiendungen (z.B. “image.jpg” => “image”)
falls keine Dateiendung vorhanden, soll der Wert “invalid” gespeichert werden (z.B. “dog” => “invalid”)
die Werte sollen in Kleinbuchstaben gespeichert werden
es sollte entweder mit der map() oder forEach() Methode gearbeitet werden
 */


let album = [
    "holidays.jpg",
    "Restaurant.jpg",
    "desktop",
    "rooms.GIF",
    "DOGATBEACH.jpg",
]



let lowerCase = album.map((low) => {
    return low.toLowerCase();
})

const cutted = (a) => {
    if (a.includes(".")){
        return a.slice(0, a.length-4);
    } else  {
        return a = "invalid";
    }
};
let output = lowerCase.map(cutted);
console.log(output);




/* 
Pauls Lösung:
let albums = albumArray.map((album) =>
    album.lastindexOf(".") === -1 //wenn kein Punkt vorkommt gleich falsch
        ? (album = "invalid")
        : album.slice(0, album.lastindexOf(".")).toLowerCase()
);
console.log({ albums }); 

*/


/* 
Timos Lösung:
const removeME = (a) => {
    return (a.includes(".") 
    ? a.slice(0,a.length-4) 
    : "invalid").toLowerCase();
 }
 
 let newAlbum = album.map(removeME);
 console.log(newAlbum); 
 
 */
