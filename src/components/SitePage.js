import React from "react";
import { Link, useParams } from "react-router-dom";
import useSiteData from "../hooks/useSiteData";

const SitePage = () => {
  const [siteData] = useSiteData();
  const { id } = useParams();
  const foundSite = siteData[id - 1];
  return (
    <section className="card sitePage">
      <h1>{foundSite.title}</h1>
      {foundSite.mainDescription}
      <div className="links-container">
        {Object.entries(foundSite.links).map(([key, value]) => {
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
