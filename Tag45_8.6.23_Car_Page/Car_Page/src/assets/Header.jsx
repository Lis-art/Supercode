import { NavLink } from "react-router-dom";


const Nav = () => {
    return(
        <nav>
            <h1>Super Carlist</h1>
            <NavLink className="link" to="/">Home</NavLink>
        </nav>

    )
}
export default Nav;