import React from 'react';

function Navigation() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item"><a href="/">Facebook</a></li>
        <li className="nav-item"><a href="/about">Instagram</a></li>
        <li className="nav-item"><a href="/contact">TikTok</a></li>
      </ul>
    </nav>
  );
}

export default Navigation;
