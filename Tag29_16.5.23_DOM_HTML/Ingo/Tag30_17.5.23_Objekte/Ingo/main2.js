// #OOP - Objektorientierte Programmierung -> ist das Oberthema, bei Interesse gerne mal einlesen


// #Function Constructor
// Damit erstelle ich ein Template/Blueprint für ein vordefiniertes objekt

function Laptop(herstellerParam, modelParam, jahrParam, ausstattungsParam) {
  this.hersteller = herstellerParam;
  this.model = modelParam;
  this.jahr = jahrParam;
  this.ausstatung = ausstattungsParam;

  this.description = function() {
    console.log(`Der Hersteller ist ${this.hersteller} und das model ist ${this.model} aus dem Jahr ${this.jahr}`);
  }
}

// Objekte die über einen Constructor erstellt werden, nennt man Instanzen
// Kopiert die Objekt-Struktur von meinem Constructor und mit den Parametern kann ich diese immer mit neuem Inhalt befüllen
const microsoftLaptop = new Laptop("Microsoft", "Surface", 2022, ["I5", "16gb Ram"]);

microsoftLaptop.description();

const macbook = new Laptop("Apple", "Macbook Air M2", 2022, ["M2", "16gb Ram"]);
macbook.description();


// # Class Constructor ES6
// class ist die neuere alternative zum function constructor. Die Syntax ist eine andere, aber die Funktionalität unterscheidet sich garnicht.

class Handy{
  constructor(herstellerParam, modellParam, jahrParam) {
    this.hersteller = herstellerParam;
    this.modell = modellParam;
    this.jahr = jahrParam;
  }

  description() {
    console.log(`${this.hersteller} hat das Modell ${this.modell} im Jahr ${this.jahr} released`);
  }
}

// # Class Vererbung mit extend
// extends ist das schlüsselwort für die vererbung

class IPhone extends Handy {
  constructor(herstellerParam, modellParam, jahrParam, gamezzz) {
    // mit super() wird die constructor-function aus dem parent aufgerufen
    super(herstellerParam, modellParam, jahrParam);
    this.gamezzz = gamezzz;
  }

  // in der neuen Klasse kann ich weitere Methoden hinzufügen
  airplay() {
    console.log("Wir tun so, als ob das hier eine richtige airplay funktion wäre");
  }

  // setter function / geht auch mit set hersteller / dafür da, um noch ein Logik einzubauen, bevor ein neuer Wert gesetzt wird. Zum Beispiel prüft man damit, ob der neue Wert überhaupt Sinn ergibt.
  setHersteller(herstellerParam) {
    if(typeof herstellerParam === "string") {
      this.hersteller = herstellerParam;
    }
  }

  // getter sind dafür da, Werte aus der Instanz zu lesen. In einem getter kann man den Wert vor der "rausgabe" auch noch bearbeiten
  getHersteller() {
    return this.hersteller;
  }
}

const iPhone14 = new IPhone("Apple", "iphone14", 2022, ["Snake"]);

// neuer Wert wird zugewiesen
iPhone14.setHersteller("Microsoft")

// neuer Wert wird nicht zugewiesen, da kein String
iPhone14.setHersteller(50);

console.log(iPhone14)

iPhone14.description();
iPhone14.airplay();

const iPhone = new Handy("Apple", "iPhone14", 2022);
const samsung = new Handy("Samsung", "S20", 2022);
iPhone.description();

// Man sollte weder neue keys/properties/fields hinzufügen, noch direkt mit der dot notation ändern. In Typescript kann dies bereits bei der Erstellung der Klasse "verboten" werden. (privat property). In Vanilla JS müssen wir selbst darauf achten.
iPhone.color = "red"; // !das hier ist ein nono!!!

console.log(iPhone);
console.log(samsung);