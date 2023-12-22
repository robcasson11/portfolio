import React from "react";
import { Link } from "react-router-dom";

const Card = ({ id, title, description, links, image }) => {
  return (
    <section className="card">
      <img src={image} alt="Site 1" width="100%" />
      <h2>{title}</h2>

      <h3>{description}</h3>
      <div className="links-container">
        <Link to={`/${id}`}>More Info</Link>
      </div>
    </section>
  );
};

export default Card;
