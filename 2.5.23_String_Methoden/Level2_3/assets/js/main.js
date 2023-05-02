/* 
Dazu kannst du die replaceAll-Methode des String-Objekts verwenden.

Mit der innerText-Eigenschaft des Elements kannst du nur den Text des Artikels erhalten und mit der innerHTML-Eigenschaft kannst du den html-Inhalt des Artikels festlegen.

Du kannst ein span-Element verwenden, um die Wörter hervorzuheben.
 */

const input = document.querySelector("#search-input");
const article = document.querySelector("#articleOG");


function searchWord() {
    
   let inputValue = input.value;
    console.log(inputValue);

    let articleText = article.innerText;
    //console.log(articleSearch);
    articleText = articleText.replaceAll(
        inputValue, "<span class='highlight'>" + inputValue + "</span>" 
    ); 
    document.querySelector("#articleOG").innerHTML = articleText; 
}



/* const article2 = "Chris wird das schaffen, wir glauben daran!";

let inputVar = "Chris";
let replaceVar = "Lisa";

console.log(article2.replaceAll(inputVar, replaceVar));
// output: "Lisa wird das schaffen, wir glauben daran!" */