import { Link } from "react-router-dom";

const Nav = () => {
    return ( 
        <section className="navSection">
        <h1>My Life</h1>
        <nav>
           <Link to="/">Home</Link> 
           <Link to="/blog">Blog</Link> 
        </nav>
        </section>  
     );
}
 
export default Nav;