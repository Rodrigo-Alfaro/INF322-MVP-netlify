import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const BottomNavbar = () => {
  const navLinkClass = ({ isActive }) => {
    const classes = ['nav-bar__link']
    if (isActive) classes.push('nav-bar__link--active')
    return classes.join(' ')
  }

  return (
    <div className="bottom-navbar">
      <NavLink
        className="bottom-navbar__item"
        to='/proyecto'
      >
        Presentacion Problema
      </NavLink>
      <NavLink
        className="bottom-navbar__item"
        to='/rrss'
      >
        Redes Sociales
      </NavLink>
      <NavLink
        className="bottom-navbar__item"
        to='/equipo'
      >
        Conoce al Equipo
      </NavLink>
      <NavLink
        className="bottom-navbar__item"
        to='/detalles'
      >
        Más Detalles
      </NavLink>
    </div>
  );
};

// Validación de las props


export default BottomNavbar;
