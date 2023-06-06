import { useParams } from "react-router-dom";
import blogData from "../components/Data";
import Nav from "../components/Nav";

const Details = () => {
    const params = useParams()
    const id = params.id
    const element = blogData[id]
    return ( 
        <>
        <Nav />
            <section className="detailsSection">
                <img src={element.img_url} alt={element.title} />
                <h3>{element.title}</h3>
                <p>{element.published_date}</p>
                <p>{element.description}</p>
                <p>{element.author}</p>
            </section>
        </>
     );
}
 
export default Details;