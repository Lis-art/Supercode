/* Verwende den Code aus dem Kommentarbereich.
Greife mithilfe von forEach() oder map() auf Eigenschaften dieses Objekts zu.
Schreibe Funktion für das Objekt, die in der Console folgendes ausgeben, nutze dafür den for in Loop:
name
coop
city
emails
 */


let studentData = [
    {
      name: "Alex",
      age: 23,
      coop: false,
      address: {
        street: "Don Valley Business Park",
        city: "Toronto",
        postalCode: "ONM3C3E5"
      },
      emails: ["alex69@gmail.com", "alex123@yahoo.com"]
    },
    {
      name: "Sandra",
      age: 22,
      coop: true,
      address: {
        street: "34 Lawrence Ave",
        city: "Toronto",
        postalCode: "ONM3C0E5"
      },
      emails: ["sandra@gmail.com", "sandra@yahoo.com"]
    }
  ];

  studentData.forEach(datas => {
    console.log(`${datas.name} ${datas.coop} ${datas.address.city} ${datas.emails}`)

   

  })
  
  for (let key in studentData){
    console.log(key + " : " + studentData[key].name);
    console.log(key + " : " + studentData[key].coop);
    console.log(key + " : " + studentData[key].emails)

}
