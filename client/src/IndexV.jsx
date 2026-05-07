import React from 'react'
import './Css/IndexV.css';

function IndexV() {
  return (
    <header className="header">
            <h1>MOTOPLANET</h1>
            <span className="barra-verde"></span>
            <div className="header-icons"/>
            <a href=""><img src="Img/carrito.png" alt="Icono" className="icono"/></a>
            <a onclick="openModal(4)"><img src="Img/usuario.png" alt="icono" className="icono2"/></a>
    </header>
  )
}

export default IndexV
