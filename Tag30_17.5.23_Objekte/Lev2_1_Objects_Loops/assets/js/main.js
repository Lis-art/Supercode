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

//for each fuer d Namen
const metallNames = [];
edelMetallPreise.forEach(metallObject => {
	metallNames.push(metallObject.name);
});
console.log(metallNames);

//map fuer d Namen
const metallNamesMap = edelMetallPreise.map(metallObject => metallObject.name);
console.log(metallNamesMap);

//for each fuer d Preise
const metallPreiseGramm = [];
edelMetallPreise.forEach(metallObject => {
	metallPreiseGramm.push(metallObject.preiseGramEuro);
});
console.log(metallPreiseGramm);

//map fuer d Preise
const metallPreiseGrammMap = edelMetallPreise.map(
	metallObject => metallObject.preiseGramEuro,
);
console.log(metallPreiseGrammMap);

//for each fuer d veraenderung
const metallVeraenderungen = [];
edelMetallPreise.forEach(metallObject => {
	metallVeraenderungen.push(metallObject.veraenderung);
});
console.log(metallVeraenderungen);

//map fuer d veraenderung
const metallVeraenderungenMap = edelMetallPreise.map(
	metallObject => metallObject.veraenderung,
);
console.log(metallVeraenderungenMap);



// filter()
const preisUeber50 = edelMetallPreise.filter(
	metallObject => metallObject.preiseGramEuro > 50,
);
console.log(preisUeber50);



// Tabelle erstellen

const createTable = () => {
	const table = document.createElement("table");
	let tableContent = `<tr><th>Name</th><th>Preis pro Gramm in Euro</th><th>Veraenderung</th></tr>`;

	for (let i = 0; i < edelMetallPreise.length; i++) {
		tableContent += `<tr><td>${edelMetallPreise[i].name}</td><td>${edelMetallPreise[i].preiseGramEuro}</td><td>${edelMetallPreise[i].veraenderung}</td></tr>`;
	}

	table.innerHTML = tableContent;

	document.body.append(table);
};

createTable();