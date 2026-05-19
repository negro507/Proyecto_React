import React from 'react'
import { Link } from 'react-router-dom';
import '../../Css/CatalogoR.css';

function CatalogoR() {
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
                  <img src="/Img/Llanta-michelin.webp" alt="" />
                  <h3>Llanta Michelin</h3>
                  <span>$350.000</span>
                  <button>Comprar</button>
                </div>
    
    
                <div className="card">
                  <img src="/Img/llanta-pirelli.jpeg" alt="" />
                  <h3>Llanta Pirelli</h3>
                  <span>$420.000</span>
                  <button>Comprar</button>
                </div>
    
                <div className="card">
                  <img src="/Img/llanta-metzeler.jpeg" alt="" />
                  <h3>Llanta Metzeler</h3>
                  <span>$390.000</span>
                  <button>Comprar</button>
                </div>
    
                <div className="card">
                  <img src="/Img/llanta-bridgestone.jpeg" alt="" />
                  <h3>Llanta bridgestone</h3>
                  <span>$390.000</span>
                  <button>Comprar</button>
                </div>
    
                <div className="card">
                  <img src="/Img/llanta-continental.jpeg" alt="" />
                  <h3>Llanta Continental</h3>
                  <span>$390.000</span>
                  <button>Comprar</button>
                </div>
    
    
                <div className="card">
                  <img src="/Img/llanta-dulop.jpeg" alt="" />
                  <h3>Llanta Dulop</h3>
                  <span>$390.000</span>
                  <button>Comprar</button>
                </div>
    
    
                <div className="card">
                  <img src="/Img/llanta-heiden.jpeg" alt="" />
                  <h3>Llanta Heiden</h3>
                  <span>$390.000</span>
                  <button>Comprar</button>
                </div>
    
                <div className="card">
                  <img src="/Img/llanta-good.jpeg" alt="" />
                  <h3>Llanta Good</h3>
                  <span>$390.000</span>
                  <button>Comprar</button>
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
