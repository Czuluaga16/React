
import React from 'react'
import { BiLogoMastodon } from "react-icons/bi"
import './Header.css'

export const Header = () => {
  return (
    <header>
      <div className="header-icon-wrapper">
        <BiLogoMastodon className="header-icon" />
        <h1 className="header-title">Mi Portafolio</h1>
      </div>
      <nav className="header-nav">
        <ul className="header-nav-list">
          <li className="header-nav-item"><a href="#inicio" className="header-nav-link">Inicio</a></li>
          <li className="header-nav-item"><a href="#acerca" className="header-nav-link">Acerca de</a></li>
          <li className="header-nav-item"><a href="#proyectos" className="header-nav-link">Proyectos</a></li>
          <li className="header-nav-item"><a href="#habilidades" className="header-nav-link">Habilidades</a></li>
          <li className="header-nav-item"><a href="#contacto" className="header-nav-link">Contacto</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
