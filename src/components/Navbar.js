import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <div className="App-header navbar">
    <div className="h2">Math Magicians</div>
    <div className="nav-links">
      <Link to="/" className="nav-link">Home </Link>
      <Link to="/App" className="nav-link">Calculator </Link>
      <Link to="/Quote" className="nav-link">Quote </Link>
    </div>
  </div>
);

export default NavBar;
