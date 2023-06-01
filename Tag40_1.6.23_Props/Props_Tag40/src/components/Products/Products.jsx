import './Products.css'

const Products = (props) => {
    console.log(props);
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