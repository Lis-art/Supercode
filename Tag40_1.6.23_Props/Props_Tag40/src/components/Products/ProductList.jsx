import Products from "./Products"

const ProductList = () => {

    
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