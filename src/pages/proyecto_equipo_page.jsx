import React, { useState, useEffect } from 'react';
import BottomNavbar from '../components/nav_bar_proyectos';

export const TeamPage = () => {
    const [teamMembers, setTeamMembers] = useState([]);

    useEffect(() => {
        const localData = require('./dummy-data/equipo.json');
        setTeamMembers(localData);
    }, []);

    return (
        <div className="team-page">
            <div className="team-page__container">
                <div className="team-page__header">
                    <h1 className="team-page__header-title">Conoce al Equipo</h1>
                    <p className="team-page__header-description">
                        Un equipo talentoso y comprometido que ha trabajado en el desarrollo de este proyecto.
                    </p>
                </div>

                <div className="team-page__grid">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="team-page__card">
                            <div className="team-page__card-header">
                                <img
                                    src={member.imageUrl}
                                    alt={member.name}
                                    className="team-page__card-image"
                                />
                            </div>
                            <div className="team-page__card-content">
                                <h3 className="team-page__card-name">{member.name}</h3>
                                <p className="team-page__card-role">{member.role}</p>
                                <p className="team-page__card-description">{member.description}</p>
                                <div className="team-page__card-social">
                                    <a href={member.socialUrl.linkedin} className="team-page__card-social-link" target="_blank" rel="noopener noreferrer">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                            <rect x="2" y="9" width="4" height="12" />
                                            <circle cx="4" cy="4" r="2" />
                                        </svg>
                                    </a>
                                    <a href={member.socialUrl.twitter} className="team-page__card-social-link" target="_blank" rel="noopener noreferrer">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                                        </svg>
                                    </a>
                                    <a href={member.socialUrl.github} className="team-page__card-social-link" target="_blank" rel="noopener noreferrer">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
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
