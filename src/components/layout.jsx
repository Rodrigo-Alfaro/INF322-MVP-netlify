import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/home_page'
import LightbulbPage from '../pages/lightbulb_page'
import ExpositoresPage from '../pages/expositores_page'
import ContactoPage from '../pages/contacto_page'
import AboutPage from '../pages/about_page'
import ProjectPage from '../pages/proyecto_page'
import RedesSocialesPage from '../pages/proyecto_rrss_page'
import ProjectTeamPage from '../pages/proyecto_equipo_page'
import ProjectDetallesPage from '../pages/proyecto_detalles_page'
import ProjectsPage from '../pages/ProjectsPage'
import ProjectDetailPage from '../pages/ProjectDetailPage'


import NavBar from '../components/nav_bar'

const Layout = () => {
  return (
    <BrowserRouter>
      <div className='layout'>

         <h1 className='layout__title'> </h1>
        <NavBar />
        <div className='layout__page'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/lightbulb' element={<LightbulbPage />} />
            <Route path='/expositores' element={<ExpositoresPage />} />
            <Route path='/contacto' element={<ContactoPage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/proyecto' element={<ProjectPage />} />
            <Route path='/rrss' element={<RedesSocialesPage />} />
            <Route path='/equipo' element={<ProjectTeamPage />} />
            <Route path='/detalles' element={<ProjectDetallesPage />} />

      <NavBar />

          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default Layout;