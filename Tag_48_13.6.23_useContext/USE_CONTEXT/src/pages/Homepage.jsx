import React, { useContext, useEffect, useState } from "react";
import ersteBild from "../assets/img/ersteBild.png";
import zweiteBild from "../assets/img/zweiteBild.png";
import { Link } from "react-router-dom";
import BeerAnimation from "../assets/svg/beer";
import { AnimationContext } from "../context/context";
import './Homepage.css'

const Homepage = () => {
  const { animation, setAnimation } = useContext(AnimationContext);

  useEffect(() => {
    setTimeout(() => {
      setAnimation(false);
    }, 5000);
  }, []);

  return (
    <section className="Homepage">
      {animation ? (
        <div className="svg-beer">
          <BeerAnimation />
        </div>
      ) : (
        <>
          <div className="divHome">
            <img className="imgHome" src={ersteBild} alt="Regal Biere" />
            <Link className="linkHome" to="/uebersicht">
              All Beers
            </Link>
            <p className="pHome">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Eveniet beatae fuga, iusto laudantium perspiciatis odio quam?
            </p>
          </div>
          <div className="divHome">
            <img className="imgHome" src={zweiteBild} alt="Biere auf Tresen" />
            <Link className="linkHome" to="/randombeer">
              Random Beers
            </Link>
            <p className="pHome">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Eveniet beatae fuga, iusto laudantium perspiciatis odio quam?
            </p>
          </div>
        </>
      )}
    </section>
  );
};

export default Homepage;
