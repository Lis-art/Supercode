import Products from "./Products"

const ProductList = () => {

    // Map Methode wird auf den Array verwendet um jedes Listenelement zu verarbeiten
    // Für jedes Produkt wird die Komponente 'Products'  gerendert und mit dem Props 'artikel' (das aktuelle Produktobjekt) und 'key' (der Index des Elementes in der Liste) versehen
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