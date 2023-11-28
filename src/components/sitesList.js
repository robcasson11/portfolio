import React from "react";
import { Link } from "react-router-dom";

const SitesList = () => {
  return (
    <>
      <Link to={`/site1`}>View my first site here</Link>
      <br />
      <Link to={`/site2`}>View my second site here</Link>
      <br />
    </>
  );
};

export default SitesList;
