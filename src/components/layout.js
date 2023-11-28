import React from "react";
import { Outlet, Link } from "react-router-dom";
import Navbar from "./navbar";
import SitesList from "./sitesList";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <SitesList />
      <Link to={"/"}>Home</Link>
    </>
  );
};

export default Layout;
