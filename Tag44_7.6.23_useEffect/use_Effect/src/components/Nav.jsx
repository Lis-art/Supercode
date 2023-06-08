import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
    return(
        <nav>
            <h2>The Fake Shop</h2>
            <div>
                <Link className="link" to ="/">Home</Link>
                <Link className="link" to ="/about">About</Link>
                <Link className="link" to ="/services">Services</Link>
                <Link className="link" to ="/contact">Contact</Link>

            </div>
        </nav>
    )
}
export default Nav;