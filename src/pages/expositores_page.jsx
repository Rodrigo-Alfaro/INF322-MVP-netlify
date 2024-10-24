import React from "react";



export const ExpositoresPage = () => {
  const expositores = [
    { name: "Expositor 1", description: "Descripción del Expositor 1", link: "/expositor1" },
    { name: "Expositor 2", description: "Descripción del Expositor 2", link: "/expositor2" },
    { name: "Expositor 3", description: "Descripción del Expositor 3", link: "/expositor3" },
    { name: "Expositor 4", description: "Descripción del Expositor 4", link: "/expositor4" },
    { name: "Expositor 5", description: "Descripción del Expositor 5", link: "/expositor5" },
  ];

  return (
    <div className='expositores-page'>
      <h1 className='expositores-title'>Expositores</h1>
      <p className='page-description'>Conoce a los expositores de la Feria del Software Virtual</p>
      <div className='expositores-list'>
        {expositores.map((expositor, index) => (
          <div key={index} className='expositor-card'>
            <h2 className='expositor-name'>{expositor.name}</h2>
            <p className='expositor-description'>{expositor.description}</p>
            <button className='expositor-button' onClick={() => window.location.href = expositor.link}>Ver más</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExpositoresPage

