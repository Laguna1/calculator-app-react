import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <div className="App-header">
    <h1>Math Magicians Site</h1>
    <Link to="/">Home </Link>
    <Link to="/App">Calculator </Link>
    <Link to="/Quote">Quote </Link>
  </div>
);

export default NavBar;
