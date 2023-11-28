import React from "react";

const Card = ({ title, description, link }) => {
  return (
    <div>
      <h1>This is the {title} card</h1>
      <h3>This is the description: {description}</h3>
      <p>This is the url... {link}</p>
    </div>
  );
};

export default Card;
