import React from 'react';
import { Link } from 'react-router-dom';
import '../../Css/Tutoriales.css';

const tutoriales = [
  {
    id: 1,
    titulo: 'Como cambiar tu llanta trasera',
    video: 'https://www.youtube.com/embed/d2o7Yd3YpAA',
    url: 'https://www.youtube.com/watch?v=d2o7Yd3YpAA'
  },
  {
    id: 2,
    titulo: 'Como hacer el cambio de bujia',
    video: 'https://www.youtube.com/embed/BzL9n5M0avU',
    url: 'https://www.youtube.com/watch?v=BzL9n5M0avU'
  },
  {
    id: 3,
    titulo: 'Como cambiar el filtro de aire',
    video: 'https://www.youtube.com/embed/LvsM82K4Ofs',
    url: 'https://www.youtube.com/watch?v=LvsM82K4Ofs'
  },
  {
    id: 4,
    titulo: 'Como cambiar el aceite del motor',
    video: 'https://www.youtube.com/embed/BUMM6XRkTI4',
    url: 'https://www.youtube.com/watch?v=BUMM6XRkTI4'
  },
  {
    id: 5,
    titulo: 'Como cambiar Kit de Arrastre ',
    video: 'https://www.youtube.com/embed/yGlOluo-vrg',
    url: 'https://www.youtube.com/watch?v=yGlOluo-vrg'
  },
  {
    id: 6,
    titulo: 'Como cambiar la guaya de acelerador',
    video: 'https://www.youtube.com/embed/UC6vkXorQ7o',
    url: 'https://www.youtube.com/watch?v=UC6vkXorQ7o'
  },
  {
    id: 7,
    titulo: 'Como cambiar una manivela',
    video: 'https://www.youtube.com/embed/nPT8tBDmKxM',
    url: 'https://www.youtube.com/watch?v=nPT8tBDmKxM&list=PLfXLhn7nBhBmutyBXVMJ9L9OLBrE_r9D5'
  },
  {
    id: 8,
    titulo: 'Como cambiar bandas de freno',
    video: 'https://www.youtube.com/embed/Xz2LFAs7j8I',
    url: 'https://www.youtube.com/watch?v=Xz2LFAs7j8I'
  }
];

export default function Tutoriales() {
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
          <img src="/Img/carrito.png" alt="carrito" className="icono" />
        </Link>

        <span className="barra-verde"></span>
      </header>

      {/* TUTORIALES */}
      <main className="main">
        <section className="catalogo">
          <h2 className="titulo-catalogo">TUTORIALES</h2>

          <div className="productos">
            {tutoriales.map((tutorial) => (
              <div className="card" key={tutorial.id}>
                <iframe
                  src={tutorial.video}
                  title={tutorial.titulo}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <h3>{tutorial.titulo}</h3>
                <span>Video tutorial</span>
                <a href={tutorial.url} target="_blank" rel="noreferrer">
                  Ver en YouTube
                </a>
              </div>
            ))}
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
