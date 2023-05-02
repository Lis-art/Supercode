const text = "Sam is good at codingschool";

let teilEins = text.replace("good", "bad").replace("codingschool", "school");
console.log(teilEins);

let teilZwei = text.replace("Sam", "Susi").replace("codingschool", "school");
console.log(teilZwei);

let teilDrei = text.replace("codingschool", "tennis");
console.log(teilDrei);

/* Sam is bad at school
Susi is good at school 
Sam is good at tennis */

let satz = `${teilEins} <br> ${teilZwei} <br> ${teilDrei}`;
document.write(satz);

