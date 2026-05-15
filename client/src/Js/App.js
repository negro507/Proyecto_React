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

  // MANTENER SESION
  useEffect(() => {
    const sesionGuardada = localStorage.getItem('sesion');
    const nombreGuardado = localStorage.getItem('nombreUsuario');

    if(sesionGuardada === 'true'){
      setSesion(true);
      setNombreUsuario(nombreGuardado);
    }
  }, []);


  return (
    <Routes>
      {/* PAGINA PRINCIPAL */}
      <Route path="/" element={sesion ? (
            <IndexU
              nombreUsuario={nombreUsuario}
              setSesion={setSesion}/>
             ) : (
            <IndexV setSesion={setSesion} setNombreUsuario={setNombreUsuario}/>
          )
        }/>

      {/* PAGINA CATALOGO */}
      <Route path="/catalogo-llantas" element={<CatalogoLLantas />}/>
      <Route path='/IndexU' element={<IndexU/>}/>
      <Route path="/CarritoC" element={<CarritoC/>}/>
      <Route path="/CatalogoR" element={<CatalogoR/>}/>
      <Route path="/Tutoriales" element={<Tutoriales/>}/>
      <Route path="/CatalogoL" element={<CatalogoL/>}/>
      <Route path="/CatalogoB" element={<CatalogoB/>}/>
    </Routes>
  );
}
export default App;