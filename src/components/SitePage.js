import React from "react";
import { Link } from "react-router-dom";

const SitePage = ({ title, mainDescription, links }) => {
  return (
    <section className="card sitePage">
      <h1>{title}</h1>
      <p>{mainDescription}</p>
      <div className="links-container">
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

export default SitePage;
