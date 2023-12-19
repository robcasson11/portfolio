import React from "react";
import { Link } from "react-router-dom";

const Card = ({ title, description, links, image }) => {
  return (
    <section className="card">
      <img src={image} alt="Site 1" width="100%" />
      <h2>{title}</h2>

      <h3>{description}</h3>
      <div className="links">
        {Object.entries(links).map(([key, value]) => {
          return (
            <Link
              key={key}
              to={value}
              target="_blank"
              rel="noopener noreferrer"
            >
              {key}
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Card;
