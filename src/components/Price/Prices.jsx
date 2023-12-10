import React from 'react'
import { prices } from '../../data/priceCards';
import PriceCard from '../Card/PriceCard';
import './prices.css'

function Prices() {
  return (
    <section id="prices">
      <div className="container">
        <div className="enterance">
          <h2 className="main-h">Price Table</h2>
          <p className="main-p">We offer competitive price</p>
        </div>
        <div className="price-row">
          {prices.map((card, i) => {
            return <PriceCard {...card} key={i} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default Prices