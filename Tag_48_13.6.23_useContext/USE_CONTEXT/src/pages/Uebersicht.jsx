import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import "./Uebersicht.css"


const Uebersicht = () => {
  const [getData, setGetData] = useState();

  useEffect(() => {
    fetch(`https://ih-beers-api2.herokuapp.com/beers`)
      .then((response) => response.json())
      .then((getData) => {
        setGetData(getData);
        console.log(getData);
      })
      .catch((error) => {
        console.log("Fehler", error);
      });
  }, []);

  return (
    <section>
      {getData ? (
        <section>
          {getData.map((beer, index) => {
            console.log(beer);
            return ( 
              <div className="beerDiv" key={index}>
                <article className="imgContainer">
                    <img className="imgBeer" src={beer.image_url} alt="" />
                </article>
                <article className="beerInfoUE">
                    <h2 className="beerName">{beer.name}</h2>
                    <h4 className="beerTagline">{beer.tagline}</h4>
                    <p className="beerName2">Created by: {beer.name}</p>
                    <Link className="detailsLink" to={`/detailpage/${beer._id}`}>Details</Link>
                </article>
              </div>
            );
          })}
        </section>
      ) : (
        <p>Daten werden geladen</p>
      )}
      <Nav />
    </section>
  );
};

export default Uebersicht;
