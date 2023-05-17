/* In dieser Übung werden wir Objekte kennenlernen.

Erstelle ein Objekt und speichere es als Variable person
Deklariere die Eigenschaft name mit dem Wert deines Namens,
Deklariere die Eigenschaft alter mit dem Wert deines Alters,
Deklariere die Methode (Funktion) sagNameAlter im Objekt
Nutze den Befehl alert() im Funktionskörper um name, alter anzuzeigen.
Gib in der Konsole name und alter aus.
Rufe die Funktion sagNameAlter aus dem Objekt auf. */


const person = {
    name: "Lisa",
    age: 31,
    sagNameAlter: () => {
        alert(`${person.name} ${person.age}`)
    }
}
console.log(person.name, person.age);
console.log(person.sagNameAlter(person.name, person.age));