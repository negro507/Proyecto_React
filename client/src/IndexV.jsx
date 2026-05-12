import React from 'react';
import './Css/IndexV.css';
import {useState} from 'react';
import Axios from 'axios';

function IndexV() {

  const [modalRegistro, setModalRegistro] = useState(false);
  const [modalLogin, setModalLogin] = useState(false);

  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');

  const add = () => {
    Axios.post('http://localhost:3001/api/register',{
      nombre: nombre,
      correo: correo,
      password: password
    }).then((response) => {
      alert('Usuario registrado con éxito');
      setModalRegistro(false);
    })
    .catch((error) => {
      alert('Error al registrar usuario');
    })
  }


 const login = () => {
    Axios.post('http://localhost:3001/api/login', {
        correo: correo,
        password: password
    })
    .then((response) => {
        if(response.data.message){
            alert(response.data.message);
        }else{
            alert('Login exitoso');
            setModalLogin(false);
        }
    });
}

  return (
    <div className="pagina">

      {/* HEADER */}
      <header className="header">

        <div className="logo">
          <h1>MOTOPLANET</h1>
        </div>

        <div className="header-icons">
          <a href="/">
            <img src="/Img/carrito.png" alt="carrito" className="icono" />
          </a>

          <a onClick={() => setModalRegistro(true)}>
            <img src="/Img/usuario.png" alt="usuario" className="icono" />
          </a>
        </div>

        <span className="barra-verde"></span>

      </header>


      {/* MENU */}
      <main className="main">
        <section className="menu">
          <div className="item">
            <img src="/Img/llantas.jpeg" alt="llantas" className="main-image" />
            <h2>LLANTAS</h2>
          </div>

          <div className="item">
            <img src="/Img/repuestos.jpeg" alt="repuestos" className="main-image" />
            <h2>REPUESTOS</h2>
          </div>

          <div className="item">
            <img src="/Img/baterias.jpeg" alt="baterias" className="main-image" />
            <h2>BATERÍAS</h2>
          </div>

          <div className="item">
            <img src="/Img/limpieza.jpeg" alt="limpieza" className="main-image" />
            <h2>LIMPIEZA</h2>
          </div>

          <div className="item">
            <img src="/Img/tutoriales.png" alt="tutoriales" className="main-image" />
            <h2>TUTORIALES</h2>
          </div>
        </section>
        {/*Fin del menu*/}


        {/*Modal de registro*/}
        {modalRegistro && (
        <div className="modal">
            <div className="modal-content">
                <span className="close"onClick={() => setModalRegistro(false)}>&times;</span>
                <div className="form-container">
                    <h2>Registrarse</h2>
                    <form>
                        <div className="form-group">
                            <label>Nombre</label>
                            <input onChange={(e) => setNombre(e.target.value)} type="text"placeholder="Ingresa tu nombre"/>
                        </div>
                        <div className="form-group">
                            <label>Correo electrónico</label>
                            <input onChange={(e) => setCorreo(e.target.value)} type="email"placeholder="Ingresa tu correo"/>
                        </div>
                        <div className="form-group">
                            <label>Contraseña</label>
                            <input onChange={(e) => setPassword(e.target.value)} type="password"placeholder="Ingresa tu contraseña"/>
                        </div>
                        <div className="form-group">
                            <button  type="button" onClick={add}>
                                Registrarse
                            </button>
                            <p className="cambiar-modal" 
                              onClick={()=>{setModalRegistro(false)
                              setModalLogin(true)
                            }}>
                                ¿Ya tienes una cuenta? Inicia sesión
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        )}
        {/*Fin del modal de registro*/}


        {/*Modal de login*/}
        {modalLogin && (
          <div className="modal">
              <div className="modal-content">
                  <span className="close"onClick={() => setModalLogin(false)}>&times;</span>
                  <div className="form-container">
                      <h2>Iniciar Sesión</h2>
                      <form>
                          <div className="form-group">
                              <label>Correo electrónico</label>
                              <input onChange={(e) => setCorreo(e.target.value)} type="email"placeholder="Ingresa tu correo"/>
                          </div>
                          <div className="form-group">
                              <label>Contraseña</label>
                              <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Ingresa tu contraseña"/>
                          </div>
                          <div className="form-group">
                              <button type="button" onClick={login}>
                                  Ingresar
                              </button>
                          </div>
                      </form>
                      <p
                          className="cambiar-modal"
                          onClick={() => {
                              setModalLogin(false);
                              setModalRegistro(true);
                          }}>
                          ¿No tienes cuenta? Regístrate aquí
                      </p>
                  </div>
              </div>
          </div>
          )}
        {/*Fin de la modal de login*/}




        {/* CARRUSEL */}
        <section className="carrusel">
          <div className="slide active">
            <img src="/Img/llantas.jpeg" alt="slide1" />
            <div className="overlay">
              <h2>LAS MEJORES LLANTAS 2026</h2>
              <p>Potencia, velocidad y calidad premium para tu moto.</p>
              <button>Ver Productos</button>
            </div>
          </div>

          <div className="slide">
            <img src="/Img/repuestos.jpeg" alt="slide2" />
            <div className="overlay">
              <h2>REPUESTOS ORIGINALES</h2>
              <p>Todo lo que tu moto necesita en un solo lugar.</p>
              <button>Comprar</button>
            </div>
          </div>

          <div className="slide">
            <img src="/Img/baterias.jpeg" alt="slide3" />
            <div className="overlay">
              <h2>BATERÍAS DE ALTO RENDIMIENTO</h2>
              <p>Más duración y máxima potencia.</p>
              <button>Explorar</button>
            </div>
          </div>
        </section>


        {/* CATALOGO */}
        <section className="catalogo">

          <h2 className="titulo-catalogo">
            PRODUCTOS DESTACADOS
          </h2>

          <div className="productos">

            <div className="card">
              <img src="/Img/llantas.jpeg" alt="" />
              <h3>Llanta Michelin</h3>
              <span>$350.000</span>
              <button>Comprar</button>
            </div>

            <div className="card">
              <img src="/Img/repuestos.jpeg" alt="" />
              <h3>Kit Repuestos</h3>
              <span>$120.000</span>
              <button>Comprar</button>
            </div>

            <div className="card">
              <img src="/Img/baterias.jpeg" alt="" />
              <h3>Batería Yamaha</h3>
              <span>$250.000</span>
              <button>Comprar</button>
            </div>

            <div className="card">
              <img src="/Img/limpieza.jpeg" alt="" />
              <h3>Kit Limpieza</h3>
              <span>$80.000</span>
              <button>Comprar</button>
            </div>

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

export default IndexV;