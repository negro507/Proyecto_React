import React from 'react'
import { Link } from 'react-router-dom';
import '../../Css/CatalogoR.css';

function CatalogoR( {carrito, agregarCarrito}) {
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
                  <img src="/Img/bujia.jpg" alt="" />
                  <h3>Bujia NGK</h3>
                  <span>$30.000</span>
                  <button 
                  onClick={()=>agregarCarrito({
                    id: 1,
                    nombre: 'Bujia NGK',
                    precio: 30000,
                    imagen: '/Img/bujia.jpg'
                  })}
                  >Agregar al Carrito</button>
                </div>
    
    
                <div className="card">
                  <img src="/Img/discos.jpg" alt="" />
                  <h3>Discos de clucht</h3>
                  <span>$200.000</span>
                  <button 
                  onClick={()=>agregarCarrito({
                    id: 2,
                    nombre: 'Discos de clucht',
                    precio: 200000,
                    imagen: '/Img/discos.jpg'
                  })}
                  >Agregar al Carrito</button>
                </div>
    
                <div className="card">
                  <img src="/Img/filtro.webp" alt="" />
                  <h3>Filtro uni racing</h3>
                  <span>$100.000</span>
                  <button
                  onClick={()=>agregarCarrito({
                    id: 3,
                    nombre: 'Filtro uni racing',
                    precio: 100000,
                    imagen: '/Img/filtro.webp'
                  })}
                  >Agregar al Carrito</button>
                </div>
    
                <div className="card">
                  <img src="/Img/Aceite.webp" alt="" />
                  <h3>Aceite Motul</h3>
                  <span>$32.000</span>
                  <button
                  onClick={()=>agregarCarrito({
                    id: 4,
                    nombre: 'Aceite Motul',
                    precio: 32000,
                    imagen: '/Img/Aceite.webp'
                  })}
                  >Agregar al Carrito</button>
                </div>
    
                <div className="card">
                  <img src="/Img/lubricante.jpg" alt="" />
                  <h3>Lubricante Yamalube</h3>
                  <span>$39.000</span>
                  <button
                  onClick={()=>agregarCarrito({
                    id: 5,
                    nombre: 'Lubricante Yamalube',
                    precio: 39000,
                    imagen: '/Img/lubricante.jpg'
                  })}
                  >Agregar al Carrito</button>
                </div>
    
    
                <div className="card">
                  <img src="/Img/kit arrastre.webp" alt="" />
                  <h3>Kit de arrastre</h3>
                  <span>$120.000</span>
                  <button
                  onClick={()=>agregarCarrito({
                    id: 6,
                    nombre: 'Kit de arrastre',
                    precio: 120000,
                    imagen: '/Img/kit arrastre.webp'
                  })}
                  >Agregar al Carrito</button>
                </div>
    
    
                <div className="card">
                  <img src="/Img/guaya.jpeg" alt="" />
                  <h3>Guaya acelerador</h3>
                  <span>$15.000</span>
                  <button
                  onClick={()=>agregarCarrito({
                    id: 7,
                    nombre: 'Guaya acelerador',
                    precio: 15000,
                    imagen: '/Img/guaya.jpeg'
                  })}
                  >Agregar al Carrito</button>
                </div>
    
                <div className="card">
                  <img src="/Img/MANIVELA.jpg" alt="" />
                  <h3>Manivela con regulador</h3>
                  <span>$90.000</span>
                  <button
                  onClick={()=>agregarCarrito({
                    id: 8,
                    nombre: 'Manivela con regulador',
                    precio: 90000,
                    imagen: '/Img/MANIVELA.jpg'
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

export default CatalogoR
