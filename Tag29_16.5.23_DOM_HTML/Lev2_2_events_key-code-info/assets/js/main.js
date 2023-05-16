/* Schreibe eine kleine App, die Dir die Taste ("key"), den Unicode Tastencode ("keyCode") und  den "Code" anzeigt, sobald Du eine Taste auf deinem Keyboard drückst. */


const outputZahl = document.body.firstElementChild.firstElementChild;
console.log(outputZahl);

const outputKey = document.querySelector("#outputKey");
//event.key
const outputKeyCode = document.querySelector("#outputKeyCode");
//event.which
const outputCode = document.querySelector("#outputCode");
//event.code

document.addEventListener("keydown", (e) => {
    e.preventDefault();

    outputZahl.innerHTML = e.which;
    outputKey.innerHTML = e.key; 
    outputKeyCode.innerHTML = e.which;
    outputCode.innerHTML = e.code;
});
