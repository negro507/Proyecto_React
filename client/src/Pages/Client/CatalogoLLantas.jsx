import React from 'react';

import '../../Css/IndexU.css';


function CatalogoLLantas() {

  return (

    <div className="pagina">

      {/* HEADER */}
      <header className="header">

        <div className="logo">

          <h1>MOTOPLANET</h1>

        </div>

        <span className="barra-verde"></span>

      </header>



      {/* TITULO */}
      <div className="bienvenida">

        <h2>
          CATÁLOGO DE LLANTAS
        </h2>

      </div>



      {/* PRODUCTOS */}
      <main className="main">

        <section className="catalogo">

          <div className="productos">

            <div className="card">

              <img src="/Img/llantas.jpeg" alt="" />

              <h3>Llanta Michelin</h3>

              <span>$350.000</span>

              <button>Comprar</button>

            </div>


            <div className="card">

              <img src="/Img/llantas.jpeg" alt="" />

              <h3>Llanta Pirelli</h3>

              <span>$420.000</span>

              <button>Comprar</button>
            </div>

            <div className="card">
              <img src="/Img/llantas.jpeg" alt="" />
              <h3>Llanta Metzeler</h3>
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
  );
}
export default CatalogoLLantas;