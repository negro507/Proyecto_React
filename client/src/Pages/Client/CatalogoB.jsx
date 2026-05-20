import React from 'react'
import { Link } from 'react-router-dom';
import '../../Css/CatalogoB.css';   

export default function CatalogoB({carrito, agregarCarrito}) {
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
              <img src="/Img/carrito.png"alt="carrito"className="icono"/>
            </Link>
    
            <span className="barra-verde"></span>
          </header>
    
    
          {/* PRODUCTOS */}
          <main className="main">
    
            <section className="catalogo">
    
              <div className="productos">
                <div className="card">
                  <img src="/Img/bateria1.webp" alt="" />
                  <h3>Batería Motobatt MBTX9U</h3>
                  <span>$310.000</span>
                  <button
                  onClick={()=>agregarCarrito({
                    id: 1,
                    nombre: 'Batería Motobatt MBTX9U',
                    precio: 310000,
                    imagen: '/Img/bateria1.webp'
                  })}
                  >Agregar al Carrito</button>
                </div>
    
    
                <div className="card">
                  <img src="/Img/bateria2.webp" alt="" />
                  <h3>Batería Motobatt MBTX12U</h3>
                  <span>$430.000</span>
                  <button
                  onClick={()=>agregarCarrito({
                    id: 2,
                    nombre: 'Batería Motobatt MBTX12U',
                    precio: 430000,
                    imagen: '/Img/bateria2.webp'
                  })}
                  >Agregar al Carrito</button>
                </div>
    
                <div className="card">
                  <img src="/Img/bateria3.webp" alt="" />
                  <h3>Batería para moto Yuasa YT9A (YTX9BS)</h3>
                  <span>$210.000</span>
                  <button
                  onClick={()=>agregarCarrito({
                    id: 3,
                    nombre: 'Batería para moto Yuasa YT9A (YTX9BS)',
                    precio: 210000,
                    imagen: '/Img/bateria3.webp'
                  })}
                  >Agregar al Carrito</button>
                </div>
    
                <div className="card">
                  <img src="/Img/bateria4.webp" alt="" />
                  <h3>Batería para moto Yuasa YTX12BS</h3>
                  <span>$370.000</span>
                  <button
                  onClick={()=>agregarCarrito({
                    id: 4,
                    nombre: 'Batería para moto Yuasa YTX12BS',
                    precio: 370000,
                    imagen: '/Img/bateria4.webp'
                  })}
                  >Agregar al Carrito</button>
                </div>
    
                <div className="card">
                  <img src="/Img/bateria5.webp" alt="" />
                  <h3>Batería para moto Yuasa YTZ14S (Japón)</h3>
                  <span>$545.000</span>
                  <button
                  onClick={()=>agregarCarrito({
                    id: 5,
                    nombre: 'Batería para moto Yuasa YTZ14S (Japón)',
                    precio: 545000,
                    imagen: '/Img/bateria5.webp'
                  })}
                  >Agregar al Carrito</button>
                </div>
    
    
                <div className="card">
                  <img src="/Img/bateria6.webp" alt="" />
                  <h3>Batería para Moto BS BTX20HL (YTX20HL-BS)</h3>
                  <span>$330.000</span>
                  <button
                  onClick={()=>agregarCarrito({
                    id: 6,
                    nombre: 'Batería para Moto BS BTX20HL (YTX20HL-BS)',
                    precio: 330000,
                    imagen: '/Img/bateria6.webp'
                  })}
                  >Agregar al Carrito</button>
                </div>
    
    
                <div className="card">
                  <img src="/Img/bateria7.webp" alt="" />
                  <h3>Batería para Moto BS BTZ14S (YTZ14S)</h3>
                  <span>$260.000</span>
                  <button
                  onClick={()=>agregarCarrito({
                    id: 7,
                    nombre: 'Batería para Moto BS BTZ14S (YTZ14S)',
                    precio: 260000,
                    imagen: '/Img/bateria7.webp'
                  })}
                  >Agregar al Carrito</button>
                </div>
    
                <div className="card">
                  <img src="/Img/bateria8.webp" alt="" />
                  <h3>Batería Magna YTX5L-BS</h3>
                  <span>$85.000</span>
                  <button
                  onClick={()=>agregarCarrito({
                    id: 8,
                    nombre: 'Batería Magna YTX5L-BS',
                    precio: 85000,
                    imagen: '/Img/bateria8.webp'
                  })}
                  >Agregar al Carrito</button>
                </div>
    
              </div>
            </section>
          </main>
    
          {/* FOOTER */}
          <footer className="footer">
            <span className="barra-verdeF"></span>
            <p>
              © 2026 MOTOPLANET - Todos los derechos reservados
            </p>
          </footer>
        </div>
  )
}
