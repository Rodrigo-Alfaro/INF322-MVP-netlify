
import React from 'react'
import { Link } from 'react-router-dom';
import '../stylesheets/home_page.scss';

export const HomePage = () => {
  const features = [
    {
      title: "Proyectos Innovadores",
      description: "Descubre soluciones tecnológicas de vanguardia desarrolladas por talento emergente.",
      icon: (
        <svg className="home-page__features-item-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Networking Virtual",
      description: "Conecta con desarrolladores, empresas y profesionales del sector tecnológico.",
      icon: (
        <svg className="home-page__features-item-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Experiencia Interactiva",
      description: "Explora demos, presentaciones y contenido exclusivo de cada proyecto.",
      icon: (
        <svg className="home-page__features-item-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
        </svg>
      )
    }
  ];

  return (
    <div className="home-page">
      <div className="home-page__background">
        <div className="home-page__background-shape home-page__background-shape--1" />
        <div className="home-page__background-shape home-page__background-shape--2" />
      </div>

      <div className="home-page__container">
        <div className="home-page__hero">
          <h1 className="home-page__hero-title">
            Bienvenido a la Feria del Software Virtual
          </h1>
          <p className="home-page__hero-subtitle">
            Explora una exhibición única de proyectos innovadores en tecnología. 
            Conecta con desarrolladores talentosos y descubre las últimas tendencias 
            en desarrollo de software en un entorno virtual inmersivo.
          </p>
          
          <button 
            className="home-page__cta"
            onClick={() => window.location.href = '/expositores'}
          >
            Explorar Proyectos
            <svg
              className="home-page__cta-icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        <div className="home-page__features">
          {features.map((feature, index) => (
            <div key={index} className="home-page__features-item">
              {feature.icon}
              <h3 className="home-page__features-item-title">{feature.title}</h3>
              <p className="home-page__features-item-text">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
