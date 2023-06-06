import blogData from "../components/Data"
import Nav from "../components/Nav";
import Product from "../components/Product";

const Blog = () => {

    return ( 
        <>
        <Nav />
        <section className="blogSection">
            {blogData.map((item, index) => <Product products={item} key={index} />)}
        </section>
        </>
     );
}
 
export default Blog;