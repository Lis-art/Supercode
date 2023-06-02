import Products from "./Products"

const ProductList = () => {
    const itemArray = [
        {
            img: './img/cocooil.jpeg',
            name: "Cocooil",
            preis: "30$",
            button: "Buy now"
        }, 
        {
            img: './img/mani.webp',
            name: "Polaroid",
            preis: "60$",
            button: "Buy now"
        },        
        {
            img: './img/camera.avif',            
            name: "Maui Moisture",
            preis: "20$",
            button: "Buy now"
        },
    ]
    
    return(
        <>
        <h2>Items</h2>
            {itemArray.map((item, index) => 
            <Products 
            artikel={item} 
            key={index} />)}
        </>
    )// werte werden über Products dem neuen Array Products übergeben
}
export default ProductList 

/* 
return (
    <>
      <secttion className="App">
        {productArr.map((element, i)=>
        <Products 
          key={i}
          /* properties = {zuweisug der Eigenschaft} */
          //product={element.name}
          //image={element.img}
         // price={element.price}
       // </>
   // )
//} */