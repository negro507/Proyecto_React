import { useState } from 'react';
import '../Css/App.css';
import IndexV from '../IndexV';
import IndexU from '../Pages/Client/IndexU';

function App() {

  const [sesion, setSesion] = useState(false);
  const [nombreUsuario, setNombreUsuario] = useState('');

  return (
    <div>

      {sesion ? (
        <IndexU nombreUsuario={nombreUsuario} />
      ) : (
        <IndexV
          setSesion={setSesion}
          setNombreUsuario={setNombreUsuario}
        />
      )}

    </div>
  );
}

export default App;