import React, { useState } from 'react';
import { useEffect } from 'react';

export const ExpositoresPage = () => {
  const [searchTerm, setSearchTerm] = useState('');


  const [expositores, setExpositores] = useState([]);

  useEffect(() => {
    const localData = require('./dummy-data/expositores.json');
    setExpositores(localData);
  }, []);

  const filteredExpositores = expositores.filter(expositor =>
    expositor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    expositor.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="expositores-page">
      <div className="expositores-page__container">
        <div className="expositores-page__header">
          <h1 className="expositores-page__header-title">
            Feria del Software Virtual
          </h1>
          <p className="expositores-page__header-description">
            Descubre proyectos innovadores y conecta con los mejores expositores en tecnología
          </p>
          
          <div className="expositores-page__search">
            <input
              type="text"
              placeholder="Buscar por nombre o categoría..."
              className="expositores-page__search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg
              className="expositores-page__search-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        <div className="expositores-page__grid">
          {filteredExpositores.map((expositor, index) => (
            <div key={index} className="expositor-card">
              <div className="expositor-card__banner">
                <img
                  src={expositor.imageUrl}
                  alt={expositor.name}
                  className="expositor-card__image"
                />
              </div>
              
              <div className="expositor-card__content">
                <span className="expositor-card__category">
                  {expositor.category}
                </span>
                
                <h2 className="expositor-card__title">
                  {expositor.name}
                </h2>
                
                <p className="expositor-card__description">
                  {expositor.description}
                </p>
                
                <button
                  className="expositor-card__button"
                  onClick={() => window.location.href = expositor.link}
                >
                  Ver proyecto
                  <svg
                    className="expositor-card__button-icon"
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpositoresPage;