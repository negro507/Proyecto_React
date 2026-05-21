// App.js

import { useState, useEffect } from 'react';
import '../Css/App.css';

import IndexV from '../IndexV';
import IndexU from '../Pages/Client/IndexU';

import CatalogoLLantas from '../Pages/Client/CatalogoLLantas';
import CatalogoR from '../Pages/Client/CatalogoR';
import CatalogoL from '../Pages/Client/CatalogoL';
import CatalogoB from '../Pages/Client/CatalogoB';

import CarritoC from '../Pages/Client/CarritoC';
import Factura from '../Pages/Client/Factura';
import Tutoriales from '../Pages/Client/Tutoriales';

import {
  Routes,
  Route
} from 'react-router-dom';



function App() {

  // SESION
  const [sesion, setSesion] = useState(false);

  // NOMBRE USUARIO
  const [nombreUsuario, setNombreUsuario] = useState('');



  // CARRITO
  const [carrito, setCarrito] = useState(() => {

    const carritoGuardado = localStorage.getItem('carrito');

    return carritoGuardado
      ? JSON.parse(carritoGuardado)
      : [];

  });




  // MANTENER SESION
  useEffect(() => {

    const sesionGuardada = localStorage.getItem('sesion');

    const nombreGuardado = localStorage.getItem('nombreUsuario');

    if (sesionGuardada === 'true') {

      setSesion(true);

      setNombreUsuario(nombreGuardado);

    }

  }, []);




  // GUARDAR CARRITO
  useEffect(() => {

    localStorage.setItem(
      'carrito',
      JSON.stringify(carrito)
    );

  }, [carrito]);




  // AGREGAR AL CARRITO
  const agregarCarrito = (nuevoProducto) => {

    // BUSCAR SI EXISTE
    const productoExistente = carrito.find(
      (producto) => producto.id === nuevoProducto.id
    );



    // SI EXISTE
    if (productoExistente) {

      const nuevoCarrito = carrito.map((producto) => {

        if (producto.id === nuevoProducto.id) {

          return {
            ...producto,
            cantidad: producto.cantidad + 1
          };

        }

        return producto;

      });

      setCarrito(nuevoCarrito);

    }



    // SI NO EXISTE
    else {

      setCarrito([
        ...carrito,
        {
          ...nuevoProducto,
          cantidad: 1
        }
      ]);

    }

    alert('Producto agregado al carrito');

  };




  return (

    <Routes>

      {/* PAGINA PRINCIPAL */}
      <Route
        path="/"
        element={
          sesion ? (

            <IndexU
              nombreUsuario={nombreUsuario}
              setSesion={setSesion}
            />

          ) : (

            <IndexV
              setSesion={setSesion}
              setNombreUsuario={setNombreUsuario}
            />

          )
        }
      />



      {/* CATALOGO LLANTAS */}
      <Route
        path="/catalogo-llantas"
        element={
          <CatalogoLLantas
            carrito={carrito}
            agregarCarrito={agregarCarrito}
          />
        }
      />



      {/* CATALOGO REPUESTOS */}
      <Route
        path="/CatalogoR"
        element={
          <CatalogoR
            carrito={carrito}
            agregarCarrito={agregarCarrito}
          />
        }
      />



      {/* CATALOGO LUBRICANTES */}
      <Route
        path="/CatalogoL"
        element={
          <CatalogoL
            carrito={carrito}
            agregarCarrito={agregarCarrito}
          />
        }
      />



      {/* CATALOGO BATERIAS */}
      <Route
        path="/CatalogoB"
        element={
          <CatalogoB
            carrito={carrito}
            agregarCarrito={agregarCarrito}
          />
        }
      />



      {/* CARRITO */}
      <Route
        path="/CarritoC"
        element={
          <CarritoC
            carrito={carrito}
            setCarrito={setCarrito}
          />
        }
      />



      {/* FACTURA */}
      <Route
        path="/Factura"
        element={
          <Factura
            carrito={carrito}
            setCarrito={setCarrito}
            nombreUsuario={nombreUsuario}
          />
        }
      />



      {/* TUTORIALES */}
      <Route
        path="/Tutoriales"
        element={<Tutoriales />}
      />

    </Routes>

  );
}

export default App;