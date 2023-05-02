const text1 = "Sam is going to school";
const text2 = "Susi";
const text3 = "and";


// Sam is going to school and to the movie theater
let satz1 = text1.concat(" ", text3, " to the movie theater.");
console.log(satz1);
// Sam is going to movie theater
let schoolWeg = text1.slice(0,15);
//console.log(schoolWeg);
let satz2 = schoolWeg.concat(" movie theater.");
console.log(satz2);

// Susi and Sam are going to school
let sam = text1.slice(0, 3);
console.log(sam);
let satz3 = text2.concat(" ", text3, " ", sam, " ", "are going to school");
console.log(satz3);

// Susi and Sam are going to gym and to the movie theater
let goingTo = text1.slice(7, 15);
console.log(goingTo);
let satz4 = text2.concat(" ", text3, " ", sam, " are ", goingTo, " gym ", text3, " to the movie theater.");
console.log(satz4);

// Susi is going to school and to the movie theater
let satz5 = text2.concat(" is ", goingTo, " school ", text3, " and the movie theater.");
console.log(satz5);

//document write und so...


