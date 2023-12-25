import React from "react";
import { Link } from "react-router-dom";
import useSiteData from "../hooks/useSiteData";

const SitesList = () => {
  const [siteData] = useSiteData();
  return (
    <>
      <h2>Projects</h2>
      {siteData.map((site) => {
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
