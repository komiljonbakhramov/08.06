import React from "react";

const StarRating = ({ rating }) => {
  const { rate, count } = rating;

  const stars = [];
  const filledStars = Math.floor(rate);
  const hasHalfStar = rate - filledStars >= 0.5;

  for (let i = 1; i <= 5; i++) {
    if (i <= filledStars) {
      stars.push(
        <span key={i} className="star filled">
          &#9733;
        </span>
      );
    } else if (i === filledStars + 1 && hasHalfStar) {
      stars.push(
        <span key={i} className="star halfFilled">
          &#9733;
        </span>
      );
    } else {
      stars.push(
        <span key={i} className="star">
          &#9734;
        </span>
      );
    }
  }

  return (
    <div className="starRating">
      {stars} ({count})
    </div>
  );
};

export default StarRating;
