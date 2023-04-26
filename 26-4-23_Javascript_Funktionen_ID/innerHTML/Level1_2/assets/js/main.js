let mainHeadline = document.getElementById("info");
console.log(mainHeadline);



mainHeadline.innerHTML = ("<h1>Hello World</h1>" + " ");
mainHeadline.innerHTML += ("<h2>How are you?</h2>");
// über .innerHTML wird Element dort hizugefügt wo es angesprochen wird

document.write("<h3>end of the element</h3>");
// über document.write wird Element ganz unten hizugefügt