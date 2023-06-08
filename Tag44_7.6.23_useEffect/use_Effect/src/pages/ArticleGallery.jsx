
import Nav from "../components/Nav";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const ArticleGallery = () => {
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((products) => {
          setProducts(products);
          console.log(products);
        })
        .catch((error) => {
          console.log("Fehler beim Laden", error);
        });
    }, []);


    return (
      <>
        <Nav />
        <h2>Products</h2>
        <section className="productGallery">
          {products.map((product, index) => (
            <div key={index} className="product">
              <h2>{product.title}</h2>
              <img src={product.image} alt="img" />
              <h2>{product.price}</h2>
              <Link to={`/${product.id}`}>Go to article</Link>
            </div>
          ))}
        </section>
      </>
    );
  };
  
  export default ArticleGallery;