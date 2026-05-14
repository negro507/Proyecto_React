import { useState, useEffect } from 'react';
import '../Css/App.css';
import IndexV from '../IndexV';
import IndexU from '../Pages/Client/IndexU';
import CatalogoLLantas from '../Pages/Client/CatalogoLLantas';
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
    </Routes>
  );
}
export default App;