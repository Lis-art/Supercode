/* Nehmen wir an, wir haben 100 Bilder in unserem Ordner.
Wir wollen ein Array von Bildern erstellen und die Dateinamen standardisieren. 
Gib in der Konsole image_001.jpg bis image_100.jpg aus.
Deklariere die Function imageArray.
In Funktionskörper deklariere die Variable returnArray als leeres Array.
Schreibe eine for-Schleife.
Nutze push() und Conditionals Statements (if, else if, else).
Lass dir returnArray in der Konsole ausgeben. */



const imageArray = () => {
    let returnArray = [];
  
    for (let i = 1; i <= 100; i++) {
      let images;
      if (i < 10) {
        images = "image_00" + i + ".jpg";
      } else if (i < 100) {
        images = "image_0" + i + ".jpg";
      } else {
        images = "image_" + i + ".jpg";
      }
      returnArray.push(images);
    }
  
    return returnArray;
  };
  
  console.log(imageArray());
