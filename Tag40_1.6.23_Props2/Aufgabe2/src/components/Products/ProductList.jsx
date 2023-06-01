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
            {itemArray.map((item, index) => <Products artikel={item} key={index} />)}
        </>
    )
}
export default ProductList 