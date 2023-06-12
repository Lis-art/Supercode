import { Link } from "react-router-dom";


const Nav = () => {
    return ( 
        <section>
            <nav>
                <Link className="link" to="/">Home</Link>
                <Link className="link" to="/about">About</Link>
                <Link className="link" to="/contact">Contact</Link>
                <Link className="link" to="/services">Service</Link>
            </nav>
        </section>
     );
}
export default Nav; 
 
