import React from "react";
import { Link } from "react-router-dom";
import sites from "../data/sites_data";

const SitesList = () => {
  return (
    <>
      <h2>Projects</h2>
      {sites.map((site) => {
        return (
          <div key={site.id}>
            <p>
              <Link to={`/${site.path}`}>{site.title}</Link>
            </p>
            <br />
          </div>
        );
      })}
    </>
  );
};

export default SitesList;
