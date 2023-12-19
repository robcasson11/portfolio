import React from "react";
import { Link } from "react-router-dom";

const SitesList = () => {
  return (
    <>
      <h2>Projects</h2>
      <p>
        <Link to={`/site1`}>View my first site here</Link>
      </p>
      <br />
      <p>
        <Link to={`/site2`}>View my second site here</Link>
      </p>
      <br />
      <p>
        <Link to={`/site3`}>View my third site here</Link>
      </p>
      <br />
    </>
  );
};

export default SitesList;
