import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import Header from "../components/Header";

const Produktdetails = () => {
    const [getDetail, setGetDetail] = useState([]);
    const params = useParams();

    useEffect (() => {
        fetch(`https://fakestoreapi.com/products/${params.productId}`)
        .then((response) => response.json())
        .then((productData) => {
            setGetDetail(productData);
        })
        .catch((error) => {
          console.log("Fehler beim laden", error);
        });
    }, [])
    return(
        <section>
          <Header />
          <section>
              <div className="shop-item" >
                <img src={getDetail.image} alt="" />
                <p>{getDetail.title}</p>
                <p>{getDetail.price} Euro</p>
                <p>{getDetail.description}</p>
              </div>
          </section>
      </section>
    )

}
export default Produktdetails;