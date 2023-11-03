import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import back from "../assets/img/Back.png";
import Nav from "../components/Nav";
import "./Randombeer.css"


const Randombeer = () => {
    
    const [beerDetail, setBeerDetail] = useState(null);

    useEffect (() => {
        fetch(`https://ih-beers-api2.herokuapp.com/beers/random`)
        .then((response) => response.json())
        .then((beerDetail) => {
            setBeerDetail(beerDetail);
        })
        .catch((error) => {
            console.log("Fehler", error);
        });
    }, [])
    
    return ( 
        <section>
          {beerDetail ? (
            <div className="beerDetailPage">
                <div className="detailImgContainer">
                    <img className="beerDetailImg" src={beerDetail.image_url} alt="Bild Bier" />
                </div>
              <div>
                <h2 className="beerDetailName">{beerDetail.name}</h2>
                <h4 className="beerDetailTagline">{beerDetail.tagline}</h4>
                <div>
                  <article className="gray1">
                    <p>First brewed:</p>
                    <p>{beerDetail.first_brewed}</p>
                  </article>
                  <article className="gray2">
                    <p>Attenuation level:</p>
                    <p>{beerDetail.attenuation_level}</p>
                  </article>
                  <p className="beerDescription">{beerDetail.description}</p> 
                </div>
                <Link to="/uebersicht"><img src={back} alt="back Icon" className="backIcon" /></Link>
              </div>
            </div>
          ) : (
            <p>Daten werden geladen ...</p>
          )}
          <Nav />
        </section>
    );
}
 
export default Randombeer;