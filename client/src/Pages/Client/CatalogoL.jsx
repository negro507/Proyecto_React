import React from 'react'
import '../../Css/CatalogoL.css';
import { Link } from 'react-router-dom';

export default function CatalogoL({ carrito, agregarCarrito }) {
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
                  <img src="/Img/aditivo.png" alt="" />
                  <h3>Aditivo MOTOR FREE Libre de humo</h3>
                  <span>$15.000</span>
                  <button
                  onClick={()=>agregarCarrito({
                    id: 1,
                    nombre: 'Aditivo MOTOR FREE Libre de humo',
                    precio: 15000,
                    imagen: '/Img/aditivo.png'
                  })}
                  >Agregar al Carrito</button>
                </div>
    
    
                <div className="card">
                  <img src="/Img/CremaD.png" alt="" />
                  <h3>Cera Desmanchadora</h3>
                  <span>$25.000</span>
                  <button
                  onClick={()=>agregarCarrito({
                    id: 2,
                    nombre: 'Cera Desmanchadora',
                    precio: 25000,
                    imagen: '/Img/CremaD.png'
                  })}
                  >Agregar al Carrito</button>
                </div>
                  
    
                <div className="card">
                  <img src="/Img/desengrasante.jpg" alt="" />
                  <h3>Desengrasante Biodegradable</h3>
                  <span>$9.000</span>
                  <button
                  onClick={()=>agregarCarrito({
                    id: 3,
                    nombre: 'Desengrasante Biodegradable',
                    precio: 9000,
                    imagen: '/Img/desengrasante.jpg'
                  })}
                  >Agregar al Carrito</button>
                </div>
    
                <div className="card">
                  <img src="/Img/CERA_S.webp" alt="" />
                  <h3>Cera Siempre Nuevo</h3>
                  <span>$13.000</span>
                  <button
                  onClick={()=>agregarCarrito({
                    id: 4,
                    nombre: 'Cera Siempre Nuevo',
                    precio: 13000,
                    imagen: '/Img/CERA_S.webp'
                  })}
                  >Agregar al Carrito</button>
                </div>
    
                <div className="card">
                  <img src="/Img/elevador.jpeg" alt="" />
                  <h3>Elevador de octanaje CRC</h3>
                  <span>$8.000</span>
                  <button
                  onClick={()=>agregarCarrito({
                    id: 5,
                    nombre: 'Elevador de octanaje CRC',
                    precio: 8000,
                    imagen: '/Img/elevador.jpeg'
                  })}
                  >Agregar al Carrito</button>
                </div>
    
    
                <div className="card">
                  <img src="/Img/gel-restaurador.png" alt="" />
                  <h3>Gel Restaurador para Partes Negras</h3>
                  <span>$15.000</span>
                  <button
                  onClick={()=>agregarCarrito({
                    id: 6,
                    nombre: 'Gel Restaurador para Partes Negras',
                    precio: 15000,
                    imagen: '/Img/gel-restaurador.png'
                  })}
                  >Agregar al Carrito</button>
                </div>
    
    
                <div className="card">
                  <img src="/Img/kit.png" alt="" />
                  <h3>Kit Mantenimiento de Arrastre</h3>
                  <span>$42.000</span>
                  <button
                  onClick={()=>agregarCarrito({
                    id: 7,
                    nombre: 'Kit Mantenimiento de Arrastre',
                    precio: 42000,
                    imagen: '/Img/kit.png'
                  })}
                  >Agregar al Carrito</button>
                </div>
    
                <div className="card">
                  <img src="/Img/kit2.jpg" alt="" />
                  <h3>Kit Moto Limpieza Deluxe 4 en 1</h3>
                  <span>$34.000</span>
                  <button
                  onClick={()=>agregarCarrito({
                    id: 8,
                    nombre: 'Kit Moto Limpieza Deluxe 4 en 1',
                    precio: 34000,
                    imagen: '/Img/kit2.jpg'
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
