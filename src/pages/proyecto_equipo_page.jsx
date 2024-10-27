import React from 'react';
import BottomNavbar from '../components/nav_bar_proyectos';

const teamMembers = [
    {
        name: "Juan Pérez",
        role: "Desarrollador Frontend",
        description: "Apasionado por el diseño de interfaces y la experiencia del usuario. Responsable de la implementación visual del proyecto.",
        imageUrl: "URL_DE_IMAGEN_JUAN",
        socialUrl: "URL_DE_RED_SOCIAL_JUAN"
    },
    {
        name: "Ana López",
        role: "Desarrolladora Backend",
        description: "Experta en sistemas de bases de datos y lógica de negocio, asegurando que el sistema sea robusto y escalable.",
        imageUrl: "URL_DE_IMAGEN_ANA",
        socialUrl: "URL_DE_RED_SOCIAL_ANA"
    },
    {
        name: "Carlos García",
        role: "Diseñador UX/UI",
        description: "Encargado de crear la estructura y estética de la aplicación para una navegación intuitiva.",
        imageUrl: "URL_DE_IMAGEN_CARLOS",
        socialUrl: "URL_DE_RED_SOCIAL_CARLOS"
    },
    {
        name: "Lucía Martínez",
        role: "Gerente de Proyecto",
        description: "Lidera el equipo y gestiona la comunicación entre los desarrolladores y las partes interesadas del proyecto.",
        imageUrl: "URL_DE_IMAGEN_LUCIA",
        socialUrl: "URL_DE_RED_SOCIAL_LUCIA"
    },
];

export const TeamPage = () => {
    return (
        <div className="team-page">
            <div className="team-page__container">
                <h1 className="team-page__title">Conoce al Equipo</h1>
                <p className="team-page__subtitle"></p>
                    Un equipo talentoso y comprometido que ha trabajado en el desarrollo de este proyecto.

                <div className="team-page__members">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="team-page__member">
                            <img
                                src={member.imageUrl}
                                alt={member.name}
                                className="team-page__member-image"
                            />
                            <h3 className="team-page__member-name">{member.name}</h3>
                            <p className="team-page__member-role">{member.role}</p>
                            <p className="team-page__member-description">{member.description}</p>
                            <a href={member.socialUrl} className="team-page__member-social" target="_blank" rel="noopener noreferrer">
                                Hablemos!
                            </a>
                        </div>
                    ))}
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

export default TeamPage;
