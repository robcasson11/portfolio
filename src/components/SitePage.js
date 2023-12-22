import React from "react";
import { Link } from "react-router-dom";

const SitePage = ({ links }) => {
  return (
    <div className="card">
      {Object.entries(links).map(([key, value]) => {
        return (
          <div className="links-container">
            <Link
              key={key}
              to={value}
              target="_blank"
              rel="noopener noreferrer"
            >
              {key}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default SitePage;
