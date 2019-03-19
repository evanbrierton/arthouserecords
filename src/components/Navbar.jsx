import React from 'react';
import { NavLink } from 'react-router-dom';
import { shape, string, func } from 'prop-types';

const Navbar = ({ theme, setLightTheme, setDarkTheme }) => (
  <nav style={{ display: 'flex', justifyContent: 'space-between', ...theme }}>
    <div />
    <ul style={{
      display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: '8em',
    }}
    >
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
    </ul>
    <ul style={{ marginRight: '3em', display: 'flex' }}>
      <li>
        <button
          type="button"
          className="theme light"
          onClick={setLightTheme}
          style={{ borderColor: theme.color === '#2c2c2c' ? '#b71c1c' : '#2c2c2c' }}
          name="light theme"
        />
      </li>
      <li>
        <button
          type="button"
          className="theme dark"
          onClick={setDarkTheme}
          style={{ borderColor: theme.color === 'white' ? '#b71c1c' : 'white' }}
          name="light theme"
        />
      </li>
    </ul>
  </nav>
);

Navbar.propTypes = {
  theme: shape({ backgroundColor: string, color: string }).isRequired,
  setLightTheme: func.isRequired,
  setDarkTheme: func.isRequired,
};

export default Navbar;
