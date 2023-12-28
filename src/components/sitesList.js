import React from "react";
import useSiteData from "../hooks/useSiteData";
import { NavLink } from "react-router-dom";

const SitesList = () => {
  const [siteData] = useSiteData();
  return (
    <>
      <h2>Projects</h2>
      {siteData.map((site) => {
        return (
          <div key={site.id}>
            <p>
              <NavLink to={`/${site.path}`} activeclassname="active">
                {site.title}
              </NavLink>
            </p>
            <br />
          </div>
        );
      })}
    </>
  );
};

export default SitesList;
