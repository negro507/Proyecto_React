// CarritoC.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import '../../Css/CarritoC.css';

function CarritoC({ carrito, setCarrito }) {



  // AUMENTAR
  const aumentarCantidad = (id) => {

    const nuevoCarrito = carrito.map((producto) => {

      if (producto.id === id) {

        return {
          ...producto,
          cantidad: producto.cantidad + 1
        };

      }

      return producto;

    });

    setCarrito(nuevoCarrito);

  };




  // DISMINUIR
  const disminuirCantidad = (id) => {

    const nuevoCarrito = carrito.map((producto) => {

      if (producto.id === id) {

        return {
          ...producto,
          cantidad: producto.cantidad - 1
        };

      }

      return producto;

    })

    .filter((producto) => producto.cantidad > 0);

    setCarrito(nuevoCarrito);

  };




  // ELIMINAR
  const eliminarProducto = (id) => {

    if (window.confirm('¿Eliminar producto?')) {

      const nuevoCarrito = carrito.filter(
        (producto) => producto.id !== id
      );

      setCarrito(nuevoCarrito);

    }

  };




  // VACIAR
  const vaciarCarrito = () => {

    if (window.confirm('¿Vaciar carrito?')) {

      setCarrito([]);

      localStorage.removeItem('carrito');

    }

  };




  // TOTAL
  const total = carrito.reduce((acumulador, producto) => {

    return acumulador + (
      producto.precio * producto.cantidad
    );

  }, 0);




  return (

    <div className="pagina">

      {/* HEADER */}
      <header className="header">

        <div className="logo">

          <Link to="/">
            <h1>MOTOPLANET</h1>
          </Link>

        </div>

        <span className="barra-verde"></span>

      </header>



      {/* MAIN */}
      <main className="main">

        <h2 className="titulo-carrito">
          CARRITO DE COMPRAS
        </h2>



        <div className="contenedor-carrito">

          {

            carrito.length === 0 ? (

              <h2>
                No hay productos en el carrito
              </h2>

            ) : (

              carrito.map((producto, index) => (

                <div
                  className="producto-carrito"
                  key={index}
                >

                  <img
                    src={producto.imagen}
                    alt={producto.nombre}
                  />



                  <div className="info-producto">

                    <h3>{producto.nombre}</h3>

                    <p>
                      Precio: ${producto.precio}
                    </p>

                    <p>
                      Cantidad: {producto.cantidad}
                    </p>



                    {/* BOTONES */}
                    <div className="botones-carrito">

                      <button
                        onClick={() =>
                          aumentarCantidad(producto.id)
                        }
                      >
                        +
                      </button>



                      <button
                        onClick={() =>
                          disminuirCantidad(producto.id)
                        }
                      >
                        -
                      </button>



                      <button
                        onClick={() =>
                          eliminarProducto(producto.id)
                        }
                      >
                        Eliminar
                      </button>

                    </div>

                  </div>

                </div>

              ))

            )

          }

        </div>



        {/* TOTAL */}
        <div className="total-carrito">

          <h2>
            Total: ${total}
          </h2>

        </div>



        {/* BOTON VACIAR */}
        {

          carrito.length > 0 && (

            <button
              className="vaciar-carrito"
              onClick={vaciarCarrito}
            >
              Vaciar carrito
            </button>

          )

        }



        {/* FINALIZAR COMPRA */}
        <Link to="/Factura">

          <button className="comprar-carrito">

            Finalizar compra

          </button>

        </Link>

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

export default CarritoC;