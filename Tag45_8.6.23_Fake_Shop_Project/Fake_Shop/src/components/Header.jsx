import { Link } from "react-router-dom";
import './Header.css'

const Nav = () => {
    return ( 
        <section>
            <nav>
                <h1 className="headline">The Fake Shop</h1>
                <div className="nav-links">
                <Link className="link" to="/">Home</Link>
                <Link className="link" to="/about">About</Link>
                <Link className="link" to="/contact">Contact</Link>
                <Link className="link" to="/services">Service</Link>
                </div>
            </nav>
        </section>
     );
}
export default Nav; 
 
