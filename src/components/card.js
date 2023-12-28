import React from "react";
import { Link } from "react-router-dom";

const Card = ({ site }) => {
  const { id, title, cardDescription, image } = site;
  return (
    <section className="card">
      <div className="links-container">
        <h2>{title}</h2>

        <h3>{cardDescription}</h3>

        <Link to={`/${id}`}>More Info</Link>
      </div>
      <img src={image} alt={`Site ${id}`} width="100%" />
    </section>
  );
};

export default Card;
