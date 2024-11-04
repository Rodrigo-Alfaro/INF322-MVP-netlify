import React from 'react';

export const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="about-page__background">
        <div className="about-page__background-shape about-page__background-shape--1" />
        <div className="about-page__background-shape about-page__background-shape--2" />
      </div>

      <div className="about-page__container">
        <div className="about-page__hero">
          <h1 className="about-page__hero-title">
            Acerca de la Feria del Software Virtual
          </h1>
          <p className="about-page__hero-subtitle">
            La Feria del Software Virtual es un evento en línea donde desarrolladores y empresas 
            pueden presentar proyectos innovadores y conectarse con una audiencia global. Es una 
            oportunidad única para descubrir las últimas tendencias en tecnología, explorar 
            proyectos de vanguardia y construir relaciones valiosas en la industria.
          </p>
        </div>

        <div className="about-page__content">
          <section className="about-page__section">
            <h2 className="about-page__section-title">¿Qué puedes esperar?</h2>
            <p className="about-page__section-text">
              La feria ofrece una plataforma interactiva para explorar proyectos innovadores, asistir 
              a charlas y presentaciones, y conectarte con otros profesionales del sector tecnológico. 
              Desde demos en vivo hasta paneles de discusión, cada aspecto de la feria está diseñado 
              para ofrecer una experiencia inmersiva y educativa.
            </p>
          </section>

          <section className="about-page__section">
            <h2 className="about-page__section-title">Nuestra misión</h2>
            <p className="about-page__section-text">
              Fomentar la innovación tecnológica y conectar a las mentes más brillantes del sector. 
              La feria busca impulsar el desarrollo de soluciones que transformen el futuro, 
              ofreciendo un espacio para la colaboración y el crecimiento.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
