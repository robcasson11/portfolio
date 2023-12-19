import React from "react";

const Card = ({ id, title, description, link, image }) => {
  return (
    <section className="card">
      <img src={image} alt="Site 1" width="100%" />
      <h2>{title}</h2>

      <h3>{description}</h3>
      <div className="links">
        <a href={link} target="_blank" rel="noreferrer">
          View Site
        </a>
        <button as="a" href={link} target="_blank" rel="noreferrer">
          View Site
        </button>
        <a href="" target="_blank" rel="noreferrer">
          Frontend Code
        </a>
        <a href="" target="_blank" rel="noreferrer">
          Backend Code
        </a>
      </div>
    </section>
  );
};

export default Card;
