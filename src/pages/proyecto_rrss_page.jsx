import React from 'react';
import BottomNavbar from '../components/nav_bar_proyectos';

export const RedesSocialesPage = () => {
    return (
        <div className="redes-sociales-page">
            <div className="redes-sociales-page__container">
                <div className="redes-sociales-page__header">
                    <h1 className="redes-sociales-page__title">Redes Sociales</h1>
                    <p className="redes-sociales-page__description">
                        Conéctate con nosotros a través de nuestras redes sociales para estar al tanto de las últimas novedades y actualizaciones.
                    </p>
                </div>

                <div className="redes-sociales-page__links">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="redes-sociales-page__link">
                        Facebook
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="redes-sociales-page__link">
                        Twitter
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="redes-sociales-page__link">
                        Instagram
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="redes-sociales-page__link">
                        LinkedIn
                    </a>
                </div>
            </div>
            <BottomNavbar/>
        </div>
    );
};

export default RedesSocialesPage;