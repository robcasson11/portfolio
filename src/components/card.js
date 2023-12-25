import React from "react";
import { Link } from "react-router-dom";

const Card = ({ id, title, cardDescription, links, image }) => {
  return (
    <section className="card">
      <div className="links-container">
        <h2>{title}</h2>

        <h3>{cardDescription}</h3>
        <Link to={`/${id}`}>More Info</Link>
      </div>
      <img src={image} alt="Site 1" width="100%" />
    </section>
  );
};

export default Card;
