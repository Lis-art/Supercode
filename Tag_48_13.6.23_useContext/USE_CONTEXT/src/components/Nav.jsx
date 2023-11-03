import { Link } from "react-router-dom";
import beerIcon from "../assets/img/beerIcon.png";
import './Nav.css'

const Nav = () => {
    return(
        <section>
            <nav className="nav">
                <Link to={`/`}><img src={beerIcon} alt="beer" className="beerIcon" /></Link>
            </nav>     
        </section>
    )
}

export default Nav;