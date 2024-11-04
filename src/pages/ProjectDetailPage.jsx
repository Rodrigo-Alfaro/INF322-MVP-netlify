import React from 'react'
import { useParams } from 'react-router-dom'

const projects = [
  { id: 1, name: 'Shardworlds', description: 'Descripción detallada del Proyecto 1', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { id: 2, name: 'Semillero USM', description: 'Descripción detallada del Proyecto 2', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { id: 3, name: 'Informática USM', description: 'Descripción detallada del Proyecto 3', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
];

const ProjectDetailPage = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) {
    return <p>Proyecto no encontrado</p>;
  }

  return (
    <div className="project-detail-page">
      <h2>{project.name}</h2>
      <p>{project.description}</p>
      <iframe
        width="560"
        height="315"
        src={project.videoUrl}
        title="Presentación del Proyecto"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default ProjectDetailPage;
