import React from 'react';
import BottomNavbar from '../components/nav_bar_proyectos';

export const ProjectPage = () => {
  return (
    <div className="project-page">
      <div className="project-page__container">
          <h1 className="project-page__title">Nombre del Proyecto</h1>
        <div className="project-page__video-section">
          <iframe
            className="project-page__video"
            src="https://www.youtube.com/embed/IceGrlN6W0k"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="project-page__info-section">
          <p className="project-page__description">
            Este proyecto es una solución innovadora que busca resolver problemas en el área de [área del proyecto]. Utiliza [tecnologías o metodologías] para mejorar la experiencia del usuario y optimizar los procesos.
          </p>
        </div>

        {/* Navbar inferior */}
      </div>
      <BottomNavbar
      problemUrl={"http://localhost:5050/proyecto"}
       socialUrl="http://localhost:5050/rrss" 
       teamUrl="http://localhost:5050/equipo"
       detailsUrl="URL_MAS_DETALLES"
      >
      </BottomNavbar>
    </div>
  );
};

export default ProjectPage;
