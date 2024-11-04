import React from 'react'
import { Link } from 'react-router-dom';
import '../stylesheets/home_page.scss';

export const HomePage = () => {
  return (
    <>
      <p>¡Te damos la bienvenida a la Feria del Software del departamento de Informática USM!</p>
      <p></p>
      <Link to="/projects"> Ver proyectos </Link>
    </>
  )
}

export default HomePage
