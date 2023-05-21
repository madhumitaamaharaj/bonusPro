import React from "react";
import styled from "./Navbar.module.css";

import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className={styled.container}>
        <h3>Demo</h3>

        <nav className={styled.list}>
          <Link className={styled.navlink} to="/">
           Home
          </Link>

          <Link className={styled.navlink} to="/contact">
            Contact
          </Link>

          <Link className={styled.navlink} to="/task">
            Task
          </Link>
        </nav>

        <h2>
          <FaUserCircle />
        </h2>
      </div>
    </>
  );
};
export default Navbar;
