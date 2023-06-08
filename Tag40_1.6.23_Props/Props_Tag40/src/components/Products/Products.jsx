import './Products.css'

const Products = (props) => {
    console.log(props);
    //Definiert eine Funktionale-Komponente namens Products, die Props als Parameter erhält. Die Props sind die Daten, die von der übergeordneten Komponente übergeben werden.
    return(
        <section>
            <div>
                <img src={props.artikel.img} alt="Bild" />
                <p>{props.artikel.name}</p>
                <p>{props.artikel.preis}</p>
            </div>
        </section>
    )
}
export default Products

// zuerst wird ein <img> Element gerendert mit dem Bild des Produkts, das Bild wird über die Props 'artikel'  und die  Property des Objects entnommen
// dann wird ein p Element gerendert mit dem Namen des Produktes - der Name wird über Props 'artikel' erhalten und der Eigenschaft Name des Objektes entnommen 
// dann wird ein p Element gerendert mit dem Preis des Produktes - der Preis wird über Props 'artikel' erhalten und der Eigenschaft Preis des Objektes entnommen 