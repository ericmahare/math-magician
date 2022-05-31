import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/calculator" className={({ isActive }) => (isActive && 'active')}>Calculator</NavLink>
      </li>
      <li>
        <NavLink to="/quote">Quote</NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
