let pictures = document.querySelector("#gallery");
console.log(pictures.innerHTML);

// Variable wird mit pictures deklariert, dann wird Wert zugeordnet
// über angesprochene ID:gallery
// übeer console.log wird Inhalt dem HTML Element zugefügt

pictures.innerHTML = "<figure><img src='./assets/img/photo-1680328944823-547f1c7dc353.jpeg'><figcaption>Fig1</figcaption><figure>";

pictures.innerHTML += "<figure><img src='./assets/img/photo-1681317915217-4b5776317aaf.jpeg'><figcaption>Fig2</figcaption><figure>";

pictures.innerHTML += "<figure><img src='./assets/img/photo-1681572028957-8840070280a7.jpeg'><figcaption>Fig3</figcaption><figure>";

 
// mit variable.innerHTML wird Inhalt dann HTML übergeben und direkt angezeigt
// durch += werden Elemente nacheinander angeordnet und nicht überschrieben
