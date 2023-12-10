import React from "react";
import "./strategies.css";
import StrategyCard from "../Card/StrategyCard";
import { stategyCards } from "../../data/strategyCards";

const Strategies = () => {
  return (
    <section id="strategies">
      <div className="container">
        <div className="enterance">
          <h2 className="main-h">Contents Strategies</h2>
          <p className="main-p">
            We focus on ergonomics and meeting you where you work. It's only a
            keystroke away.{" "}
          </p>
        </div>
        <div className="strategies-row">
          {stategyCards.map((card, i) => {
            return <StrategyCard {...card} key={i} />;
          })}
        </div>
      </div>
  
    </section>
  );
};

export default Strategies;
