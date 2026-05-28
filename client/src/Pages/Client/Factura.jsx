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

  // SUBTOTAL
  const subtotal = carrito.reduce((acumulador, producto) => {

    return acumulador + (
      producto.precio * producto.cantidad
    );

  }, 0);



  // IVA 19%
  const iva = subtotal * 0.19;



  // TOTAL FINAL
  const totalConIva = subtotal + iva;



  // FECHA
  const fecha = new Date().toLocaleDateString();



  // DESCARGAR PDF
  const descargarPDF = () => {

    // CREAR PDF
    const doc = new jsPDF();



    // TITULO
    doc.setFontSize(22);
    doc.text('MOTOPLANET', 70, 20);



    // DATOS CLIENTE
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

        `$${producto.precio.toLocaleString()}`,

        producto.cantidad,

        `$${(
          producto.precio * producto.cantidad
        ).toLocaleString()}`

      ])

    });



    // POSICION FINAL TABLA
    const finalY = doc.lastAutoTable.finalY + 20;



    // TOTALES
    doc.text(
      `Subtotal: $${subtotal.toLocaleString()}`,
      20,
      finalY
    );



    doc.text(
      `IVA (19%): $${iva.toLocaleString()}`,
      20,
      finalY + 10
    );



    doc.text(
      `Total a pagar: $${totalConIva.toLocaleString()}`,
      20,
      finalY + 20
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
          Cliente: {nombreUsuario}
        </p>

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
                    $
                    {producto.precio.toLocaleString()}
                  </td>

                  <td>
                    {producto.cantidad}
                  </td>

                  <td>
                    $
                    {(
                      producto.precio * producto.cantidad
                    ).toLocaleString()}
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>



        {/* TOTALES */}
        <div className="total-factura">

          <h3>
            Subtotal:
            ${subtotal.toLocaleString()}
          </h3>



          <h3>
            IVA (19%):
            ${iva.toLocaleString()}
          </h3>



          <h2>
            Total a pagar:
            ${totalConIva.toLocaleString()}
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

          <button className="btn-cancelar"
          onClick={()=>{
            //Vaciar carrito
            setCarrito([]);
            localStorage.removeItem('carrito');
            alert("Compra cancelada");
          }}>
            Cancelar compra
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