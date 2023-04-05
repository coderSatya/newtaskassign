import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar_styling">
      <Link to="/">AllUsers</Link>
      <Link to="/adduser">AddUsers</Link>
    </div>
  );
};

export default Navbar;
