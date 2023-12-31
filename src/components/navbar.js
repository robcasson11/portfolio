import React from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { GiAnvil } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className="navbar" id="navbar">
      <section className="nav-left">
        <Link to={"/about"}>
          <GiAnvil />
        </Link>
      </section>

      <section className="nav-right">
        <a
          href="https://github.com/robcasson11"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="mailto:robertcasson11@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <MdEmail />
        </a>
      </section>
    </div>
  );
};

export default Navbar;
