import './Products.css'

const Products = (props) => {
    console.log(props);
    return(
        <section>
            <img src={props.artikel.img} alt="Bild" />
            <div>
                <h3>{props.artikel.name}</h3>
                <h3>{props.artikel.preis}</h3>
                <button>{props.artikel.button}</button>
            </div>
        </section>
    )
}
export default Products