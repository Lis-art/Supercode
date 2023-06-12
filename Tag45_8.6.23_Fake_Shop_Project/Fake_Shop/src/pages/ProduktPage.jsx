//import Header from "../components/Header";

const ProduktPage = (props) => {
    return ( 
        <section>
            <Header />
            <img src={props.item.image} alt="" />
              <p>{props.item.title}</p>
              <p>{props.item.price}</p>
              <p>{props.item.description}</p>
        </section>
    );
}
 
export default ProduktPage;