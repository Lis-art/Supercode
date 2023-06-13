import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import './ProduktGallery.css'

const ProduktGallery = () => {

    const [product, setProduct] = useState([]);

    useEffect (() => {
        fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((product) => {
          setProduct(product);
        })
        .catch((error) => {
          console.log("Fehler beim laden", error);
        });
    }, [])

    return(
        <section>
      {product ? (
        <section>
          {product.map((item, index) => (
            <div className="shop-item" key={index}>
              <img className="item-img"  src={item.image} alt="" />
              <p className="item">{item.title}</p>
              <p className="item">{item.price} Euro</p>
              <Link to={`/produktdetails/${item.id}`} className="link-read-more">Read more</Link>
            </div>
          ))}
        </section>
      ) : (
        <p>Daten werden geladen ...</p>
      )}
    </section>
  );
};

export default ProduktGallery;