const text = "Sam is going to codingschool";

/* let wegDamit = text.replace("codingschool", "school");
console.log(wegDamit);

//SAM IS GOING TO SCHOOL 1
let satzEins = text.toUpperCase();
console.log(satzEins);

//sam is going at school 2
let satzZwei = text.toLowerCase();
console.log(satzZwei);
 */


//SAM is going to SCHOOL 3
let satzDrei = text[0].toUpperCase();
let satzDrei1 = text[1].toUpperCase();
let satzDrei2 = text[2].toUpperCase();
let satzDrei3 = text[16].toUpperCase();
let satzDrei4 = text[17].toUpperCase();
let satzDrei5 = text[18].toUpperCase();
let satzDrei6 = text[19].toUpperCase();
let satzDrei7 = text[20].toUpperCase();
let satzDrei8 = text[21].toUpperCase();
let satzDrei9 = text[22].toUpperCase();
let satzDrei10 = text[23].toUpperCase();
let satzDrei11 = text[24].toUpperCase();
let satzDrei12 = text[25].toUpperCase();
let satzDrei13 = text[26].toUpperCase();
let satzDrei14 = text[27].toUpperCase();
console.log(satzDrei, satzDrei1, satzDrei2 + " is going to " + satzDrei3, satzDrei4, satzDrei5, satzDrei6, satzDrei7, satzDrei8, satzDrei9, satzDrei10, satzDrei11, satzDrei12, satzDrei13, satzDrei14);

//sam IS GOING TO school 4
let satzVier1 = text[0].toLowerCase();
let satzVier2 = text[5].toUpperCase();
let satzVier3 = text[6].toUpperCase();
let satzVier4 = text[8].toUpperCase();
let satzVier5 = text[9].toUpperCase();
let satzVier6 = text[10].toUpperCase();
let satzVier7 = text[11].toUpperCase();
let satzVier8 = text[12].toUpperCase();
let satzVier9 = text[14].toUpperCase();
let satzVier10 = text[15].toUpperCase();
console.log(satzVier1, satzVier2, satzVier3, satzVier4, satzVier5, satzVier6, satzVier7, satzVier8, satzVier9, satzVier10 + " school");






// Sam Is Going To School 5
let ganzerSatz = "Sam is going to codingschool";
let satzFuenfSplit = ganzerSatz.split(" ");
console.log(satzFuenfSplit); 

let capSatzFuenfSplit = satzFuenfSplit.map(word => {
    return word[0].toUpperCase() + word.slice(1);
})
console.log(capSatzFuenfSplit);

let newSentence = capSatzFuenfSplit.join(" ");
console.log(newSentence);



