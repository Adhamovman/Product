import React from "react";
import full_star from "../../assets/images/full_star.png";
import half_star from "../../assets/images/half_star.png";

const RatingDisplay = (rating, maxStars = 5) => {
  const starCount = Math.max(0, Math.floor(rating));
  const totalStars = Math.max(0, Math.floor(maxStars));
  const displayedStars = Math.min(starCount, totalStars);

  const stars = Array.from({ length: totalStars }, (_, index) => (
    <img
      key={index}
      src={index < displayedStars ? full_star : half_star}
      alt={index < displayedStars ? "Filled Star" : "Empty Star"}
      style={{ width: "18px", height: "18px", margin: "0 1px" }} 
    />
  ));
  return <div>{stars}</div>;
};

const ReviewCard = ({ stars, comment, username, job, avatar }) => {
  return (
    <div className="review-card">
      {RatingDisplay(stars)}
      <p className="main-p" style={{margin: '12px 0'}}>
      {comment}
      </p>
      <div className="user">
        <div className="u-left">
             <img src={avatar} alt={avatar} />
        </div>
        <div className="u-right">
         <p className="username">{username}</p>
         <p className="main-p job">{job}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
