const A = "Susi is going to codingschool";


const eins = A.slice(0, 4);
console.log(A.slice (0, 4));
//Susi


const zwo = A.slice (5, 7);
console.log(A.slice (5, 7));
// is

const drei = A.slice (5, 16 + (-6));
console.log(A.slice (5, 17)) + (A.slice(-6));
// is going to school

const vier = A.slice (-6)
console.log(A.slice (-6));
//school

const fuenf = A.slice (-6)
console.log(A.slice (0, 8) + A.slice (-6));
// Susi is school



document.write(`${eins} <br> ${zwo} <br> ${drei} <br> ${vier} <br> ${fuenf}`);




