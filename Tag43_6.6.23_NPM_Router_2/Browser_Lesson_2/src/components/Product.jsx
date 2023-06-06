import { NavLink } from "react-router-dom";

const Product = (props) => {
    const href = "/details/" + props.products.id;
    return ( 
        <div>
            <img src={props.products.img_url} alt={props.products.title} />
            <h3>{props.products.title}</h3>
            <NavLink to={href}>Read more</NavLink>
        </div>
     );
}
 
export default Product;