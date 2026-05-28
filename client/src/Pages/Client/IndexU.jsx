import React from 'react';
import '../../Css/IndexU.css';
import { Link } from 'react-router-dom';

function IndexU({ nombreUsuario, setSesion }) {

  // CERRAR SESION
  const cerrarSesion = () => {

    const confirmar = window.confirm(
      "¿Estás seguro de cerrar sesión?"
    );

    if (confirmar) {

      // BORRAR DATOS
      localStorage.removeItem('sesion');
      localStorage.removeItem('nombreUsuario');
      localStorage.removeItem('carrito');

      // CAMBIAR ESTADO
      setSesion(false);

      alert('Sesión cerrada correctamente');
    }
  };



  return (

    <div className="pagina">

      {/* ================= HEADER ================= */}
      <header className="header">

        {/* LOGO */}
        <div className="logo">

          <Link to="/" className="logo-link">
            <h1>MOTOPLANET</h1>
          </Link>

        </div>



        {/* DERECHA HEADER */}
        <div className="header-derecha">

          {/* USUARIO */}
          <h3 className="usuario">
            Bienvenido {nombreUsuario}
          </h3>



          {/* CARRITO */}
          <Link
            to="/CarritoC"
            className="header-icons"
          >

            <img
              src="/Img/carrito.png"
              alt="carrito"
              className="icono"
            />

          </Link>



          {/* CERRAR SESION */}
          <div className="cerrar-sesion">

            <button
              className="btn-cerrar"
              onClick={cerrarSesion}
            >
              Cerrar Sesión
            </button>

          </div>

        </div>

        <span className="barra-verde"></span>

      </header>



      {/* ================= MAIN ================= */}
      <main className="main">

        {/* ================= MENU ================= */}
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



        {/* ================= CARRUSEL ================= */}
        <section className="carrusel">

          {/* SLIDE 1 */}
          <div className="slide active">

            <img
              src="/Img/llantas.jpeg"
              alt="slide1"
            />

            <div className="overlay">

              <h2>
                LAS MEJORES LLANTAS 2026
              </h2>

              <p>
                Potencia, velocidad y calidad premium para tu moto.
              </p>

              <Link to="/catalogo-llantas">

                <button>
                  Ver Productos
                </button>

              </Link>

            </div>

          </div>



          {/* SLIDE 2 */}
          <div className="slide">

            <img
              src="/Img/repuestos.jpeg"
              alt="slide2"
            />

            <div className="overlay">

              <h2>
                REPUESTOS ORIGINALES
              </h2>

              <p>
                Todo lo que tu moto necesita en un solo lugar.
              </p>

              <Link to="/CatalogoR">

                <button>
                  Comprar
                </button>

              </Link>

            </div>

          </div>



          {/* SLIDE 3 */}
          <div className="slide">

            <img
              src="/Img/baterias.jpeg"
              alt="slide3"
            />

            <div className="overlay">

              <h2>
                BATERÍAS DE ALTO RENDIMIENTO
              </h2>

              <p>
                Más duración y máxima potencia.
              </p>

              <Link to="/CatalogoB">

                <button>
                  Explorar
                </button>

              </Link>

            </div>

          </div>

        </section>



        {/* ================= PRODUCTOS ================= */}
        <section className="catalogo">

          <h2 className="titulo-catalogo">
            PRODUCTOS DESTACADOS
          </h2>



          <div className="productos">

            {/* PRODUCTO 1 */}
            <div className="card">

              <img src="/Img/llantas.jpeg" alt="" />

              <h3>Llanta Michelin</h3>

              <span>$350.000</span>

              <Link to="/catalogo-llantas">

                <button>
                  Comprar
                </button>

              </Link>

            </div>



            {/* PRODUCTO 2 */}
            <div className="card">

              <img src="/Img/repuestos.jpeg" alt="" />

              <h3>Kit Repuestos</h3>

              <span>$120.000</span>

              <Link to="/CatalogoR">

                <button>
                  Comprar
                </button>

              </Link>

            </div>



            {/* PRODUCTO 3 */}
            <div className="card">

              <img src="/Img/baterias.jpeg" alt="" />

              <h3>Batería Yamaha</h3>

              <span>$250.000</span>

              <Link to="/CatalogoB">

                <button>
                  Comprar
                </button>

              </Link>

            </div>



            {/* PRODUCTO 4 */}
            <div className="card">

              <img src="/Img/limpieza.jpeg" alt="" />

              <h3>Kit Limpieza</h3>

              <span>$80.000</span>

              <Link to="/CatalogoL">

                <button>
                  Comprar
                </button>

              </Link>

            </div>

          </div>

        </section>

      </main>



      {/* ================= FOOTER ================= */}
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