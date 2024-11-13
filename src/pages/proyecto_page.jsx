import React from 'react';
import BottomNavbar from '../components/nav_bar_proyectos';

export const ProjectPage = () => {
  return (
    <div className="project-page">
      <div className="project-page__container">
          <h1 className="project-page__title">SecureNet Solutions</h1>
        <div className="project-page__video-section">
          <iframe
            className="project-page__video"
            src="https://www.youtube.com/embed/VEQd-jmVs44"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="project-page__info-section">
          <p className="project-page__description">
          Ofrece una suite completa de servicios de ciberseguridad diseñada para proteger la información crítica de 
          las empresas. Con un enfoque integral, SecureNet Solutions garantiza una defensa robusta contra amenazas
          digitales, incluyendo la prevención de ataques, la gestión de vulnerabilidades y la seguridad de redes. 
          Su misión es fortalecer la infraestructura de seguridad de sus clientes para que puedan operar de manera 
          segura y confiable en el entorno digital.
          </p>
        </div>

        {/* Navbar inferior */}
      </div>
      <BottomNavbar>
      </BottomNavbar>
    </div>
  );
};

export default ProjectPage;
