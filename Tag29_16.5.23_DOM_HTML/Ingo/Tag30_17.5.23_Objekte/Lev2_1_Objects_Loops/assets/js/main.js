/* Greife auf die Objekte im Array mit Hilfe von map(), forEach(), filter() zu.
Der Code dazu ist im Kommentarbereich.

Verwende forEach() und greife auf alle name zu. Pushe diese in ein neues Array.

Verwende map() und greife auf alle name zu.

Verwende forEach() und greife auf alle preiseGramEuro zu und pushe diese ein neues Array.

Verwende map() und greife auf alle preiseGramEuro zu.

Verwende forEach() und greife auf alle veraenderung zu und pushe in ein neues Array.

Verwende map() und greife auf alle veraenderung zu.

Verwende filter() und greife auf preiseGramEuro die teurer als 50 Euro zu 

Gib alles als Tabelle in deinem HTML-Dokument aus.
 */



let edelMetallPreise = [
	{ name: "Gold", preiseGramEuro: 42.91, veraenderung: "+0.12%" },
	{ name: "Silber", preiseGramEuro: 0.51, veraenderung: "+1.02%" },
	{ name: "Platin", preiseGramEuro: 25.74, veraenderung: "+0.41%" },
	{ name: "Palladium", preiseGramEuro: 50.93, veraenderung: "0.00%" },
	{ name: "Rhodium", preiseGramEuro: 160.12, veraenderung: "-0.10%" },
	{ name: "Iridium", preiseGramEuro: 42.84, veraenderung: "0.00%" },
	{ name: "Ruthenium", preiseGramEuro: 7.36, veraenderung: "0.00%" },
	{ name: "Rhenium", preiseGramEuro: 37.22, veraenderung: "-0.53%" },
	{ name: "Osmium", preiseGramEuro: 11.54, veraenderung: "0.00%" },
];


let arrayNamen = [];
let arrayPreise = [];
let arrayAenderung = [];
edelMetallPreise.forEach(metalle => {
	arrayNamen.push(metalle.name)
	arrayPreise.push(metalle.preiseGramEuro)
	arrayAenderung.push(metalle.veraenderung)
});
console.log(arrayNamen);
console.log(arrayPreise);
console.log(arrayAenderung);

console.log("=====================");

const mapName = edelMetallPreise.map((metalle) =>  metalle.name);
const mapPreise = edelMetallPreise.map ((metalle) => metalle.preiseGramEuro);
const mapAenderung = edelMetallPreise.map((metalle) => metalle.veraenderung);



//Verwende filter() und greife auf preiseGramEuro die teurer als 50 Euro zu 

const hohePreise = edelMetallPreise.filter((metalle) => metalle.preiseGramEuro > 50);
console.log(hohePreise);
// ! wenn man Value zurück bekommt (filter, map) muss man Wert in Variable speichern!!!

const table = document.createElement("table");
const tableBody = document.createElement("tbody");
table.appendChild(tableBody);
const body = document.querySelector("body");
body.appendChild(table);


edelMetallPreise.forEach((metalle) => {
	
	let tableTr = "";
	let tableValues = "";
	for (let key in metalle){
		tableValues += `<td>${metalle[key]}</td>`;
	}
	tableTr = `<tr>${tableValues}</tr>`
	tableBody.insertAdjacentHTML("beforeend", tableTr)
})


let keys = Object.keys(edelMetallPreise[0]);
let thHTML = ``;

keys.forEach((key) => {
	thHTML += `<th>${key}</th>`;
})
let tableTrHeadline = `<tr>${thHTML}</tr>`;
tableBody.insertAdjacentHTML("afterbegin", tableTrHeadline)

/* 
// Andere Lösung:
const table = document.createElement("table");
edelMetallPreise.unshift(["name", "preiseGramEuro", "veraenderung"]);
edelMetallPreise.forEach((metall, index) => {
    const tr = document.createElement("tr");
    for (const key in metall) {
        const element = metall[key];
        let zelle;
        if (index === 0) {
            zelle = document.createElement("th");
        } else {
            zelle = document.createElement("td");
        }
        zelle.textContent = element;
        tr.appendChild(zelle);
    }
    table.appendChild(tr);
});

document.body.appendChild(table);
 */




/* 
// Andere Lösung:
let table = document.createElement("table");

edelMetallPreise.unshift(["Name", "PreiseGramEuro", "Veranderung"]);

for (let i = 0; i < edelMetallPreise.length; i++) {
  let tableTr = document.createElement("tr");
  table.appendChild(tableTr);

  if (i === 0) {
    for (let j = 0; j < edelMetallPreise[i].length; j++) {
      let tableTh = document.createElement("th");
      tableTh.innerHTML = edelMetallPreise[i][j];
      tableTr.appendChild(tableTh);
    }
  } else {
    let nameTd = document.createElement("td");
    nameTd.innerHTML = edelMetallPreise[i].name;
    tableTr.appendChild(nameTd);

    let preisGramEuroTd = document.createElement("td");
    preisGramEuroTd.innerHTML = edelMetallPreise[i].preiseGramEuro;
    tableTr.appendChild(preisGramEuroTd);

    let veranderungTd = document.createElement("td");
    veranderungTd.innerHTML = edelMetallPreise[i].veranderung;
    tableTr.appendChild(veranderungTd);
  }
}
// console.log(table);
let tableBody = document.querySelector("body");
tableBody.appendChild(table); */