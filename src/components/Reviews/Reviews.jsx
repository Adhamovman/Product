import React from "react";
import { reviews } from "../../data/reviewCards";
import ReviewCard from "../Card/ReviewCard";
import './review.css'
const Reviews = () => {
  return (
    <section id="reviews">
      <div className="container">
        <div className="enterance">
          <h2 className="main-h">What Clients Say</h2>
          <p className="main-p">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>
        <div className="reviews-row">
          {reviews.map((card, i) => {
            return <ReviewCard {...card} key={i} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
