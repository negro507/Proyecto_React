import React from 'react';

import { Link } from 'react-router-dom';

import '../../Css/Factura.css';

import jsPDF from 'jspdf';

import autoTable from 'jspdf-autotable';



function Factura({

  carrito,

  setCarrito,

  nombreUsuario

}) {



  // TOTAL
  const total = carrito.reduce((acumulador, producto) => {

    return acumulador + (
      producto.precio * producto.cantidad
    );

  }, 0);




  // FECHA
  const fecha = new Date().toLocaleDateString();




  // DESCARGAR PDF
  const descargarPDF = () => {



    // CREAR PDF
    const doc = new jsPDF();




    // TITULO
    doc.setFontSize(22);

    doc.text('MOTOPLANET', 70, 20);




    // DATOS
    doc.setFontSize(14);

    doc.text(`Cliente: ${nombreUsuario}`, 20, 40);

    doc.text(`Fecha: ${fecha}`, 20, 50);




    // TABLA
    autoTable(doc, {

      startY: 70,

      head: [[
        'Producto',
        'Precio',
        'Cantidad',
        'Subtotal'
      ]],



      body: carrito.map((producto) => [

        producto.nombre,

        `$${producto.precio}`,

        producto.cantidad,

        `$${producto.precio * producto.cantidad}`

      ])

    });




    // TOTAL
    doc.text(

      `Total a pagar: $${total}`,

      20,

      doc.lastAutoTable.finalY + 20

    );




    // GUARDAR PDF
    doc.save('Factura_Motoplanet.pdf');




    // VACIAR CARRITO
    setCarrito([]);

    localStorage.removeItem('carrito');



    alert('Factura descargada correctamente');

  };




  return (

    <div className="pagina-factura">



      {/* HEADER */}
      <header className="header-factura">

        <h1>MOTOPLANET</h1>

      </header>




      {/* CONTENIDO */}
      <main className="contenedor-factura">

        <h2>
          FACTURA DE COMPRA
        </h2>



        <p>
          Fecha: {fecha}
        </p>





        {/* TABLA */}
        <table>

          <thead>

            <tr>

              <th>Producto</th>

              <th>Precio</th>

              <th>Cantidad</th>

              <th>Subtotal</th>

            </tr>

          </thead>





          <tbody>

            {

              carrito.map((producto, index) => (

                <tr key={index}>

                  <td>
                    {producto.nombre}
                  </td>

                  <td>
                    ${producto.precio}
                  </td>

                  <td>
                    {producto.cantidad}
                  </td>

                  <td>
                    $
                    {producto.precio * producto.cantidad}
                  </td>

                </tr>

              ))

            }

          </tbody>

        </table>





        {/* TOTAL */}
        <div className="total-factura">

          <h2>
            Total a pagar: ${total}
          </h2>

        </div>





        {/* BOTONES */}
        <div className="botones-factura">

          <button
            className="btn-comprar"
            onClick={descargarPDF}
          >
            Confirmar compra
          </button>




          <Link to="/">

            <button className="btn-volver">

              Volver al inicio

            </button>

          </Link>

        </div>

      </main>

    </div>

  );
}

export default Factura;