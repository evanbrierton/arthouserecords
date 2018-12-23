import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav style={{ display: 'flex', justifyContent: 'center' }}>
    <NavLink exact activeStyle={{ borderBottom: '2px solid #b71c1c' }} to="/">
      <h5>Home</h5>
    </NavLink>
    <NavLink activeStyle={{ borderBottom: '2px solid #b71c1c' }} to="/artists">
      <h5>Artists</h5>
    </NavLink>
    <NavLink to="/">
      <h4>ART HOUSE</h4>
    </NavLink>
    <NavLink activeStyle={{ borderBottom: '2px solid #b71c1c' }} to="/news">
      <h5>News</h5>
    </NavLink>
    <NavLink activeStyle={{ borderBottom: '2px solid #b71c1c' }} to="/contact">
      <h5>Contact</h5>
    </NavLink>
  </nav>
);

export default Navbar;
