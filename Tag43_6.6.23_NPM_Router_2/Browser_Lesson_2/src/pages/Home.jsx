import Nav from "../components/Nav";

const Home = () => {
    return ( 
        <>
        <header>
            <Nav />
        </header>
        <div className="homeSection">
            <h2>Welcome to my simple Blog</h2>
            <a className="btn" href="/blog">Go to articles</a>
        </div>
        </>
     );
}
 
export default Home;