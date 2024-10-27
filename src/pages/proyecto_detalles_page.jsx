import React from 'react';
import BottomNavbar from '../components/nav_bar_proyectos';

export const ProjectDetallesPage = () => {
    return (
        <div className="proyecto-detalles-page">
            <div className="proyecto-detalles-page__container">
                <h1 className="proyecto-detalles-page__title">Detalles del Proyecto</h1>
                
                <div className="proyecto-detalles-page__info-section">
                    <p className="proyecto-detalles-page__description">
                        Aquí encontrarás todos los detalles sobre el proyecto, incluyendo su propósito, las tecnologías utilizadas, el equipo detrás del proyecto, y mucho más.
                    </p>
                    
                    <h2 className="proyecto-detalles-page__subtitle">Propósito del Proyecto</h2>
                    <p className="proyecto-detalles-page__text">
                        El propósito de este proyecto es [descripción del propósito].
                    </p>
                    
                    <h2 className="proyecto-detalles-page__subtitle">Tecnologías Utilizadas</h2>
                    <p className="proyecto-detalles-page__text">
                        Este proyecto utiliza las siguientes tecnologías: [lista de tecnologías].
                    </p>
                    
                </div>
            </div>
            
            <BottomNavbar
                problemUrl={"http://localhost:5050/proyecto"}
                socialUrl="http://localhost:5050/rrss"
                teamUrl="http://localhost:5050/equipo"
                detailsUrl="http://localhost:5050/detalles"
            />
        </div>
    );
};

export default ProjectDetallesPage;