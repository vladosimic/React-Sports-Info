import React from "react";
import { Link } from "react-router-dom";
import "./css/Nav.css";

const Nav = () => {
  return (
    <div className="navbar">
      <div className="container ptb-0">
        <div className="grid-2">
          <div>
            <h2>Sport Info</h2>
          </div>
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/leagues/">Leagues</Link>
            </li>
            <li>
              <Link to="/player/">Players</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
