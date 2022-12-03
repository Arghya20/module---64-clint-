import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h2>This is Header on entire website !</h2>
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
};

export default Header;
