// CatalogoLLantas.jsx

import React from 'react';
import '../../Css/Catalogo.css';
import { Link } from 'react-router-dom';

function CatalogoLLantas({ carrito, agregarCarrito }) {

  // AGREGAR AL CARRITO
  



  return (

    <div className="pagina">

      {/* HEADER */}
      <header className="header">
        <div className="logo">
          <Link to="/">
            <h1>MOTOPLANET</h1>
          </Link>
        </div>
        <Link to="/CarritoC" className="header-icons">
          <img
            src="/Img/carrito.png"
            alt="carrito"
            className="icono"/>
        </Link>
        <span className="barra-verde"></span>
      </header>



      {/* MAIN */}
      <main className="main">
        <h2 className="titulo-catalogo">
          CATÁLOGO DE LLANTAS
        </h2>

        <div className="productos">

          {/* PRODUCTO 1 */}
          <div className="card">
            <img src="/Img/llantas.jpeg"alt="llanta"/>
            <h3>Llanta Michelin</h3>
            <span>$350.000</span>
            <button
              onClick={() =>
                agregarCarrito({
                  id: 1,
                  nombre: 'Llanta Michelin',
                  precio: 350000,
                  imagen: '/Img/llantas.jpeg'
                  })}>
                    Agregar al carrito
                  </button>
          </div>



          {/* PRODUCTO 2 */}
          <div className="card">
            <img src="/Img/llantas.jpeg"alt="llanta"/>
            <h3>Llanta Pirelli</h3>
            <span>$420.000</span>
            <button
              onClick={() =>
                agregarCarrito({
                  id: 2,
                  nombre: 'Llanta Pirelli',
                  precio: 420000,
                  imagen: '/Img/llantas.jpeg'})}>
              Agregar al carrito
            </button>
          </div>


          {/* PRODUCTO 3 */}
          <div className="card">
            <img src="/Img/llanta-continental.jpeg"alt="llanta"/>
            <h3>Llanta Continental</h3>
            <span>$380.000</span>
            <button
              onClick={() =>
                agregarCarrito({
                  id: 3,
                  nombre: 'Llanta Continental',
                  precio: 380000,
                  imagen: '/Img/llanta-continental.jpeg'})}>
              Agregar al carrito
            </button>
          </div>


          {/* PRODUCTO 4 */}
          <div className="card">
            <img src="/Img/llanta-bridgestone.jpeg"alt="llanta"/>
            <h3>Llanta Bridgestone</h3>
            <span>$450.000</span>
            <button
              onClick={() =>
                agregarCarrito({
                  id: 4,
                  nombre: 'Llanta Bridgestone',
                  precio: 450000,
                  imagen: '/Img/llanta-bridgestone.jpeg'})}>
              Agregar al carrito
            </button>
          </div>


          {/* PRODUCTO 5 */}
          <div className="card">
            <img src="/Img/llanta-dulop.jpeg"alt="llanta"/>
            <h3>Llanta Dulop</h3>
            <span>$400.000</span>
            <button
              onClick={() =>
                agregarCarrito({
                  id: 5,
                  nombre: 'Llanta Dulop',
                  precio: 400000,
                  imagen: '/Img/llanta-dulop.jpeg'})}>
              Agregar al carrito
            </button>
          </div>


          {/* PRODUCTO 6 */}
          <div className="card">
            <img src="/Img/llanta-metzeler.jpeg"alt="llanta"/>
            <h3>Llanta Metzeler</h3>
            <span>$480.000</span>
            <button
              onClick={() =>
                agregarCarrito({
                  id: 6,
                  nombre: 'Llanta Metzeler',
                  precio: 480000,
                  imagen: '/Img/llanta-metzeler.jpeg' })}>
              Agregar al carrito
            </button>
          </div>


          {/* PRODUCTO 7 */}
          <div className="card">
            <img src="/Img/llanta-heiden.jpeg"alt="llanta"/>
            <h3>Llanta Heiden</h3>
            <span>$410.000</span>
            <button
              onClick={() =>
                agregarCarrito({
                  id: 7,
                  nombre: 'Llanta Heiden',
                  precio: 410000,
                  imagen: '/Img/llanta-heiden.jpeg'})}>
              Agregar al carrito
            </button>
          </div>
          

          {/* PRODUCTO 8 */}
          <div className="card">
            <img src="/Img/llanta-good.jpeg"alt="llanta"/>
            <h3>Llanta Good</h3>
            <span>$430.000</span>
            <button
              onClick={() =>
                agregarCarrito({
                  id: 8,
                  nombre: 'Llanta Good',
                  precio: 430000,
                  imagen: '/Img/llanta-good.jpeg'
                })}>
              Agregar al carrito
            </button>
          </div>
        </div>

      </main>



      {/* FOOTER */}
      <footer className="footer">
        <span className="barra-verdeF"></span>
        <p>
          © 2026 MOTOPLANET - Todos los derechos reservados
        </p>
      </footer>
    </div>
  );
}

export default CatalogoLLantas;