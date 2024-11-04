import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const BottomNavbar = ({ problemUrl, socialUrl, teamUrl, detailsUrl }) => {
  return (
    //estan con bottones en vez de navlink como la de ejemplo para que manejar diff pags de proyectos
    //sea mas facil, ya que como no hay be solo hay que hardcodear las pages.
    <div className="bottom-navbar">
      <button
        className="bottom-navbar__item"
        onClick={() => window.location.href = problemUrl}
      >
        Presentacion Problema
      </button>
      <button
        className="bottom-navbar__item"
        onClick={() => window.location.href = socialUrl}
      >
        Redes Sociales
      </button>
      <button
        className="bottom-navbar__item"
        onClick={() => window.location.href = teamUrl}
      >
        Conoce al Equipo
      </button>
      <button
        className="bottom-navbar__item"
        onClick={() => window.location.href = detailsUrl}
      >
        Más Detalles
      </button>
    </div>
  );
};

// Validación de las props
BottomNavbar.propTypes = {
  socialUrl: PropTypes.string.isRequired,
  teamUrl: PropTypes.string.isRequired,
  detailsUrl: PropTypes.string.isRequired,
};

export default BottomNavbar;
