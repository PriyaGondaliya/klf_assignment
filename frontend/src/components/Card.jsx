import React from "react";

const Card = ({img,name}) => {
  return (
    <div className="card">
      <img src={img} alt="Avatar" className="cat1Image" />{" "}
      <div className="container">
        <p>{name}</p>
      </div>
    </div>
  );
};

export default Card;
