import React from 'react';
import { Link } from 'react-router-dom';

function IndexAD({ setSesion }) {

  return (

    <div>

      <h1>PANEL ADMINISTRADOR</h1>

      {/* VOLVER */}
      <Link to="/">
        <button>
          Volver al inicio
        </button>
      </Link>

      {/* CERRAR SESION */}
      <button
        onClick={() => {

          localStorage.removeItem('sesion');
          localStorage.removeItem('nombreUsuario');
          localStorage.removeItem('rolUsuario');

          setSesion(false);

          window.location.href = "/";

        }}
      >
        Cerrar Sesión
      </button>

    </div>

  );

}

export default IndexAD;