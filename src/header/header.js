// src/Hello.js
import React from 'react';
import '../index.css';

function Header() {
  return (
    <header>
      <nav>
        <div class="logo">
          <img src="logo.svg" alt="Da Hyper Logo" />
        </div>

        <ul class="nav-links">
          <li>
            <a href="index.html">Services</a>
          </li>
          <li>
            <a href="index.html">Portfolio</a>
          </li>
          <li>
            <a href="index.html">Contact Us</a>
          </li>

          {/* <li class="menu-icon">
            <a href="index.html">Menu</a>
          </li> */}
        </ul>
      </nav>
      <ul class="menu-icon">
        <li>
          <a href="index.html">Menu</a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
