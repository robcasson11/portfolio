import React from "react";
import { Link } from "react-router-dom";
import sites from "../data/sites_data";

const SitesList = () => {
  return (
    <>
      <h2>Projects</h2>
      {sites.map((site) => {
        return (
          <>
            <p>
              <Link key={site.id} to={`/${site.path}`}>
                {site.title}
              </Link>
            </p>
            <br />
          </>
        );
      })}
    </>
  );
};

export default SitesList;
