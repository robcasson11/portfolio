import React from "react";
import { Outlet, Link } from "react-router-dom";
import Navbar from "./navbar";
import SitesList from "./sitesList";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="grid-container" id="grid-container">
        <section className="main-display grid-item" id="main-display">
          <Outlet />
        </section>
        <section className="sites-list grid-item" id="site-list">
          <SitesList />
          <Link to={"/"}>Home</Link>
        </section>
      </main>
    </>
  );
};

export default Layout;
