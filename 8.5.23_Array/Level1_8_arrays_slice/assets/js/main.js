/* Die Methode slice() kennen wir ja schon von den strings, auch hier kann man mit slice() Werte aus einem array schneiden und bekommt ein neues array zurück. Hierbei ist zu beachten das slice() einen Startindex benötigt, optional auch einen Endindex.

Erstelle ein neues array mit deinen Lieblingsreisezielen, danach schneidest du mit slice() zwei Werte aus dem array aus und lässt dir das Ergebnis in der Konsole ausgeben. */


let reiseZiele = [
    "Japan",
    "Neuseeland",
    "Kanada",
    "Island",
    "Italien"
]
console.log(reiseZiele);

let sliceReiseZiele = reiseZiele.slice(1,3); //Neuseeland, Kanada geslicet
console.log(sliceReiseZiele);
console.log(reiseZiele);



/* arr.slice()
kopiert das vollständige Array.

arr.slice(4)
schneidet das Element mit dem Index 4 aus. Wenn im Aufruf nur der Startindex angegeben ist, setzt slice() die Länge des Arrays als zweites Argument.

arr.slice(0,3)
schneidet die Elemente vom Index 0 bis zum Index vor 3 aus. Das Resultat ist ein Javascript Array der Länge 3: Der letzte Index ist ein leerer Platz oder Loch (sparse Arrays). */



/* 
Unterschied zwischen Array.slice und Array.splice
Array.slice verändert das Original-Array nicht, sondern liefert einen Ausschnitt des Originals zurück. Die Methode splice hingegen entfernt Daten oder fügt neue Elemente in das Array und verändert das Original.

array.slice()
slice eignet sich zum Kopieren eines vollständigen Arrays, um Teile eines Arrays in ein neues Array zu kopieren und um Array-ähnliche Objekte in ein Array umzuwandeln.

Javascript slice(start[, end]) kopiert einen Bereich eines Arrays in ein anderes Array. start ist die Anfangsposition und end die Position nach dem ausgeschnittenen Bereich. Wenn eine der beiden Zahlen negativ ist, wird vom Ende des Arrays aus gezählt.

Das Original-Array bleibt erhalten – die Methode array.slice() ist nicht destruktiv. */