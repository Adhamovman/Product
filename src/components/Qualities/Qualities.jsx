import React from "react";
import { futureCards } from "../../data/futureCards";
import FutureCard from "../Card/FutureCard";
import './qualities.css'
import MainBtn from "../Button/MainBtn";

const Qualities = () => {
  return (
    <section id="qualities">
      <div className="container">
        <div className="enterance">
          <h2 className="main-h">Product was Built Specifically for You</h2>
        </div>
        <div className="quality-row">
          {futureCards.map((card, i) => {
            return <FutureCard {...card} key={i} />;
          })}
        </div>
        <div className="sign-btn">
          <MainBtn>SIGN UP NOW</MainBtn>
          <div className="oval"></div>
        </div>
      </div>
    </section>
  );
};

export default Qualities;
