import { useEffect, useState } from "react";
import Nav from "../components/Nav";

const ArticlePage = () => {
  
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((product) => {
        setProduct(product);
        console.log(product);
      })
      .catch((error) => {
        console.log("Fehler beim Laden", error);
      });
  }, []);

  return (
    <>
      <Nav />
      {product ? (
        <section className="productGallery">
          <article className="product">
            <h1>{product.title}</h1>
            <img src={product[0].image} alt="img" />
            <h2>{product[0].price}€</h2>
            <h2>{product[0].description}</h2>
          </article>
        </section>
      ) : (
        <p>Product wird geladen</p>
      )}
    </>
  );
};

export default ArticlePage;