import React from 'react'
import '../../Css/IndexU.css';

function IndexU({ nombreUsuario }) {

  return (
    <div>

        {/* HEADER */}
      <header className="header">

        <div className="logo">
          <h1>MOTOPLANET</h1>
        </div>

        <div className="header-icons">
          <a href="/">
            <img src="/Img/carrito.png" alt="carrito" className="icono" />
          </a>
          <a>
            <img src="/Img/usuario.png" alt="usuario" className="icono" />
          </a>
        </div>
        <span className="barra-verde"></span>
      </header>

    </div>
  )
}

export default IndexU