import React from 'react'
import { Link } from 'react-router-dom'

// Simulamos una lista de proyectos (luego puede venir de una API)
const projects = [
  { id: 1, name: 'ShardWorlds', description: 'Descripción breve del Proyecto 1', videoUrl: 'https://www.youtube.com/watch?v=nL4sxmG-Tac' },
  { id: 2, name: 'Semillero USM', description: 'Descripción breve del Proyecto 2', videoUrl: 'https://www.youtube.com/watch?v=nL4sxmG-Tac' },
  { id: 3, name: 'Informática USM', description: 'Descripción breve del Proyecto 3', videoUrl: 'https://www.youtube.com/watch?v=nL4sxmG-Tac' },
];

const ProjectsPage = () => {
  return (
    <div className="projects-page">
      <h2>Proyectos en la Feria</h2>
      <ul>
        {projects.map(project => (
          <li key={project.id}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <Link to={`/projects/${project.id}`}>Ver Presentación</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProjectsPage;
