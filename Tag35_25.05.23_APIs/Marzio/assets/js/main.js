// # ======= API =======
// * eine API ist eine SChnittstelle zwischen front und Backend
// * eine API kommuniziert in der regel mit einem Server der wiederum mit Daten Antwortet

// ! ==== JSON ====
// * JSON ( JavaScript Object Notation) ist eine gängig form um Daten zu speichern.
// * Unterstützt verschiedene Datentypen wie zb, String, Zahlen, Boolean, Arrays, Objekte und null
// * Hierrarische Struktur: Objekte können andere Objekte oder Arrays enthalten, und Arrays können wiedertum andere Objekte, Arrays oder einzelne Werte enthalten.
// * Gibt es in verschiedenen Sprachen
// * Weit verbreitet wird häufig für Datenaustasch benutzt
// * Google Chrome Plugin: "JSON Formatter"

// - So schaut ein JSON aus.
// {
// "id": 15,
// "title": "Eau De Perfume Spray",
// "description": "Genuine  Al-Rehab spray perfume from UAE/Saudi Arabia/Yemen High Quality",
// "price": 30,
// "discountPercentage": 10.99,
// "rating": 4.7,
// "stock": 105,
// "brand": "Lord - Al-Rehab",
// "category": "fragrances",
// "thumbnail": "https://i.dummyjson.com/data/products/15/thumbnail.jpg",
// "images": [
// "https://i.dummyjson.com/data/products/15/1.jpg",
// "https://i.dummyjson.com/data/products/15/2.jpg",
// "https://i.dummyjson.com/data/products/15/3.jpg",
// "https://i.dummyjson.com/data/products/15/4.jpg",
// "https://i.dummyjson.com/data/products/15/thumbnail.jpg"
// ]
// }

// ! ===== Prmise & fetch =====

console.log(fetch("../fakeData.json"));
// * 1 ein fetch ist eine Promise

// * 2 eine Promise ist ein Objekt
// : -> A. eine Promise ist eine Versprechen das den eventuellen Abschluss representiert. Der kann erfolgreich oder nicht erfolgreich sein. ABBBEBRRRRRR er gibt aufjedenfall was zurück.
//  : -> B. eine Promise hat drei zustände:
//  : ---------> <pending> (wir haben noch keine Antwort erhalten)
//  : ---------> <resolved> (wir haben eine Antwort erhalten, wie bekommen die Daten)
//  : ---------> <rejected> (wir haben eine Antwort erhalten, wie haben ein Fehler erhalten)

// * 3 fetch ist asynchron heißt es läuft pararellel und andere funktionen müssen nicht warten bis der fetch fertig ist.

// * 4 Eine Promise kann mit der Methode then() und catch() behandelt werden, um auf das Ergebhnis oder Fehler zu reagieren.
// : --> "then()" - Methode wird aufgerufen, wenn die Promise erfolgreich war. Sie nimmt eine Funktion entgegen, die das Ergebnis des Promises verarbeitet.

// : --> "catch()" - Methode wird  aufgerufen, wenn die Promise nicht erfolgreich war. Sie nimmt eine funktion entgegen, die den Fehler des Pormises beinhalted.

// ! ===== Lokale Daten fetchen =====

fetch("../fakeData.json")
  // - Wir können nicht auf die Daten (body) zugreifen da wir json benötigen
  // .then((response) => console.log(response));
  .then((response) => response.json())
  //   die JSON Daten befinden sich nun in "data" und können genutzt werden (data ist frei wählbar)
  .then((data) => {
    // console.log(data); // HIER SIND DIE DATEN VORHANDEN :-))))
  })
  .catch((error) => {
    console.log("Fehler beim Laden, schade :´(", error);
  });

// ! ==== API´s fetchen ======
// * Mit der Fetch Methode fragen wir Daten beim Server an, wenn wir es nicht anders definieren, machen wir automatisch eine get request.
// * Wir nutzen die URL/den Endpoint der API, je nachdem wie die URL aussieht, bekommen wir unterscheidliche Daten ausgegeben.
// * Wie die URL aussehen muss, steht in der DOKUMENTATION (!!!!!!!)

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    // console.log(data.products);

    const products = data.products;

    products.forEach((singleProduct) => {
      const name = singleProduct.title;
      const description = singleProduct.description;
      const price = singleProduct.price;
      const img = singleProduct.images[0];
      const id = singleProduct.id;

      //   erstellt ein Div
      let productItem = document.createElement("div");

      // Title
      let titleOfProduct = document.createElement("h2");
      titleOfProduct.textContent = name;
      productItem.appendChild(titleOfProduct);

      // Beschreibung
      let descriptionOfProduct = document.createElement("p");
      descriptionOfProduct.textContent = description;
      productItem.appendChild(descriptionOfProduct);

      //   Preis
      let preisOfProduct = document.createElement("h5");
      preisOfProduct.textContent = price + " €";
      productItem.appendChild(preisOfProduct);

      //   IMG
      let image = document.createElement("img");
      image.setAttribute("src", img);
      image.setAttribute("alt", name);
      productItem.appendChild(image);

      //   btn
      let moreInfo = document.createElement("button");
      moreInfo.textContent = "Mehr info";
      moreInfo.addEventListener("click", () => {
        fetch(`https://dummyjson.com/products/${id}`)
          .then((res) => res.json())
          .then((data) => console.log(data))
          .catch((err) => {
            console.log("fehler :(", err);
          });
      });
      productItem.appendChild(moreInfo);

      //   Schreibt das div in die class "products"
      document.querySelector(".products").appendChild(productItem);
    });
  })

  .catch((error) => {
    console.log("Fehler beim laden ", error);
  });