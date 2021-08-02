import React from "react";
import { FaStar } from "react-icons/fa";

// rating system is maintained to be from 1 star to 5 star
// for the sake of clarity and aesthetics
const Rating = ({ rating }) => {
  const totalRating = [];

  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      totalRating.push(
        <li className="star" key={i}>
          <FaStar />
        </li>
      );
    } else {
      totalRating.push(
        <li className="star-o" key={i}>
          <FaStar />
        </li>
      );
    }
  }
  return (
    <div className="rating">
      <ul>{totalRating}</ul>
    </div>
  );
};

export default Rating;
