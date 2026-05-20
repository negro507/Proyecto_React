import { useState, useEffect } from 'react';
import '../Css/App.css';
import IndexV from '../IndexV';
import IndexU from '../Pages/Client/IndexU';
import CatalogoLLantas from '../Pages/Client/CatalogoLLantas';
import CarritoC from '../Pages/Client/CarritoC';
import CatalogoR from '../Pages/Client/CatalogoR';
import Tutoriales from '../Pages/Client/Tutoriales';
import CatalogoL from '../Pages/Client/CatalogoL';
import CatalogoB from '../Pages/Client/CatalogoB';

import {
  Routes,
  Route
} from 'react-router-dom';



function App() {

  const [sesion, setSesion] = useState(false);

  const [nombreUsuario, setNombreUsuario] = useState('');

  // CARRITO
  const [carrito, setCarrito] = useState([]);


  // MANTENER SESION
  useEffect(() => {

    const sesionGuardada = localStorage.getItem('sesion');

    const nombreGuardado = localStorage.getItem('nombreUsuario');

    if(sesionGuardada === 'true'){
      setSesion(true);
      setNombreUsuario(nombreGuardado);
    }
  }, []);
  
const agregarCarrito = (nuevoProducto) => {

    // BUSCAR SI EL PRODUCTO YA EXISTE
    const productoExistente = carrito.find(
      (producto) => producto.id === nuevoProducto.id
    );

    // SI YA EXISTE AUMENTA LA CANTIDAD
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

    // SI NO EXISTE LO AGREGA
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
              setSesion={setSesion}/>
          ) : (
            <IndexV
              setSesion={setSesion}
              setNombreUsuario={setNombreUsuario}/>)}/>

      {/* CATALOGO LLANTAS */}
      <Route
        path="/catalogo-llantas"
        element={
          <CatalogoLLantas
            carrito={carrito}
            agregarCarrito={agregarCarrito}
            />}/>

      <Route
        path="/CatalogoR"
        element={
          <CatalogoR
            carrito={carrito}
            agregarCarrito={agregarCarrito}
            />}/>

      <Route
        path="/CatalogoL"
        element={
          <CatalogoL
            carrito={carrito}
            agregarCarrito={agregarCarrito}
            />}/>

      <Route
        path="/CatalogoB"
        element={
          <CatalogoB
            carrito={carrito}
            agregarCarrito={agregarCarrito}
            />}/>



      {/* CARRITO */}
      <Route
        path="/CarritoC"
        element={
          <CarritoC
            carrito={carrito}
            setCarrito={setCarrito}/>}/>



      {/* OTRAS PAGINAS */}
      <Route path="/CatalogoR" element={<CatalogoR />} />
      <Route path="/Tutoriales" element={<Tutoriales />} />
      <Route path="/CatalogoL" element={<CatalogoL />} />
      <Route path="/CatalogoB" element={<CatalogoB />} />
    </Routes>

  );
}

export default App;