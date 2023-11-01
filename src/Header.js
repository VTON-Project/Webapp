import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
function Header() {
  return (
    <>
      <nav class="nav">
        <input type="checkbox" id="nav-check"></input>
        <div class="nav-btn">
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        <ul class="nav-list">
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <div class="nav-header">
          <div class="nav-title">
            <Link style={{ textDecoration: 'none' }}to="/vton">
              <p className="text">VITON</p>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
