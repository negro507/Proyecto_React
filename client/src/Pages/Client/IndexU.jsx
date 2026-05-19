import React from 'react';
import '../../Css/IndexU.css';
import { Link } from 'react-router-dom';




function IndexU({ nombreUsuario, setSesion }) {

  return (
    <div className="pagina">

      {/* HEADER */}
      <header className="header">
        <div className="logo">
          <h1>MOTOPLANET</h1>
        </div>

        <Link to="/CarritoC" className="header-icons">
            <img src="/Img/carrito.png"alt="carrito"className="icono"/>
        </Link>


        <div className="cerrar-sesion">

          <button
            onClick={() => {
              localStorage.setItem('sesion', 'false');
              localStorage.removeItem('nombreUsuario');
              setSesion(false);
            }}>
            Cerrar Sesión
          </button>
        </div>


        <span className="barra-verde"></span>
      </header>

      {/* MENU */}
      <main className="main">

        <section className="menu">
          {/* LLANTAS */}
          <div className="item">
            <Link to="/catalogo-llantas">
              <img
                src="/Img/llantas.jpeg"
                alt="llantas"
                className="main-image"
              />

            </Link>
            <h2>LLANTAS</h2>
          </div>


          {/* REPUESTOS */}
          <div className="item">
            <Link to="/CatalogoR">
              <img
                src="/Img/repuestos.jpeg"
                alt="repuestos"
                className="main-image"
              />
            </Link>
            <h2>REPUESTOS</h2>
          </div>
          


          {/* BATERIAS */}
          <div className="item">
            <Link to="/CatalogoB">
            <img
              src="/Img/baterias.jpeg"
              alt="baterias"
              className="main-image"
            />
            </Link>
            <h2>BATERÍAS</h2>
          </div>


          {/* LIMPIEZA */}
          <div className="item">
          <Link to="/CatalogoL">
            <img
              src="/Img/limpieza.jpeg"
              alt="limpieza"
              className="main-image"
            />
            </Link>
            <h2>LIMPIEZA</h2>
          </div>


          {/* TUTORIALES */}
          <div className="item">
            <Link to="/Tutoriales">
              <img
                src="/Img/tutoriales.png"
                alt="tutoriales"
                className="main-image"
              />
            </Link>
            <h2>TUTORIALES</h2>
          </div>

        </section>
        {/* FIN MENU */}



        {/* CARRUSEL */}
        <section className="carrusel">

          <div className="slide active">
            <img src="/Img/llantas.jpeg" alt="slide1" />
            <div className="overlay">
              <h2>LAS MEJORES LLANTAS 2026</h2>
              <p>
                Potencia, velocidad y calidad premium para tu moto.
              </p>
              <button>
                Ver Productos
              </button>
            </div>
          </div>

          <div className="slide">

            <img src="/Img/repuestos.jpeg" alt="slide2" />
            <div className="overlay">

              <h2>REPUESTOS ORIGINALES</h2>

              <p>
                Todo lo que tu moto necesita en un solo lugar.
              </p>

              <button>
                Comprar
              </button>

            </div>

          </div>


          <div className="slide">

            <img src="/Img/baterias.jpeg" alt="slide3" />

            <div className="overlay">

              <h2>BATERÍAS DE ALTO RENDIMIENTO</h2>

              <p>
                Más duración y máxima potencia.
              </p>

              <button>
                Explorar
              </button>
            </div>
          </div>
        </section>



        {/* CATALOGO */}
        <section className="catalogo">
          <h2 className="titulo-catalogo">
            PRODUCTOS DESTACADOS
          </h2>


          <div className="productos">

            <div className="card">
              <img src="/Img/llantas.jpeg" alt="" />
              <h3>Llanta Michelin</h3>
              <span>$350.000</span>
              <button>Comprar</button>
            </div>

            <div className="card">
              <img src="/Img/repuestos.jpeg" alt="" />
              <h3>Kit Repuestos</h3>
              <span>$120.000</span>
              <button>Comprar</button>
            </div>

            <div className="card">
              <img src="/Img/baterias.jpeg" alt="" />
              <h3>Batería Yamaha</h3>
              <span>$250.000</span>
              <button>Comprar</button>
            </div>


            <div className="card">
              <img src="/Img/limpieza.jpeg" alt="" />
              <h3>Kit Limpieza</h3>
              <span>$80.000</span>
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
  );
}

export default IndexU;