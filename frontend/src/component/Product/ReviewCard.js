import React from "react";
import ReactStars from "react-rating-stars-component";
import userLogo from "../../images/user.png";

const ReviewCard = ({ review }) => {
  const options = {
    edit: false,
    color: "rgba(20,20,20,0.1)",
    activeColor: "#fe9900",
    size: window.innerWidth < 600 ? 20 : 25,
    value: `${review.rating}`,
    isHalf: true,
  };

  return (
    <div className="reviewCard">
      <img src={userLogo} alt="User" />
      <p>{review.name}</p>
      <ReactStars {...options} />
      <span className="reviewCardComment">{review.comment}</span>
    </div>
  );
};

export default ReviewCard;
