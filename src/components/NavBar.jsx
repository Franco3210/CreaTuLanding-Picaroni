import React from 'react'
import './NavBar.css'
import CartWidget from './CartWidget'

export const NavBar = () => {
    return(
        <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item"><a href="#home">Inicio</a></li>
        <li className="navbar-item"><a href="#about">Acerca</a></li>
        <li className="navbar-item"><a href="#services">Servicios</a></li>
        <li className="navbar-item"><a href="#contact">Contacto</a></li>
       <div className="divCartWidget">
        <CartWidget/>
        </div>
      </ul>
    </nav>
         
     
    )
}

//Una sola vez por archivo puedo usar esto
