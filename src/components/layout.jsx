import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/home_page'
import ProjectsPage from '../pages/ProjectsPage'
import ProjectDetailPage from '../pages/ProjectDetailPage'

import NavBar from '../components/nav_bar'

const Layout = () => {
  return (
    <BrowserRouter>
      <div className='layout'>
      <NavBar />
        <h1 className='layout__title'>Bienvenido a la Feria Del Software</h1>
        <div className='layout__page'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/projects' element={<ProjectsPage />} />
            <Route path='/projects/:id' element={<ProjectDetailPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default Layout;