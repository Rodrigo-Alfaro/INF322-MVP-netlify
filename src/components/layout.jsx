import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/home_page'
import LightbulbPage from '../pages/lightbulb_page'
import ExpositoresPage from '../pages/expositores_page'
import ContactoPage from '../pages/contacto_page'
import AboutPage from '../pages/about_page'

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
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default Layout
