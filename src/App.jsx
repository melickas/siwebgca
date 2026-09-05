import { useState } from "react"
import './App.css'
function App() {

  const [usuario, setusuario] = useState('')
  const [psswd, setpsswd] = useState('')
  const [logueado, setLogueado] = useState(false)

  function boton() {
    if (usuario === "Melissa" && psswd === "77237505") {
      alert('El usuario es correcto')
      setLogueado(true)
    }
    else {
      alert('Usuario INVALIDO, intente de nuevo')
    }
  }

  function primaria() {
    alert("hola mundo primaria")
  }

  function secundaria() {
    alert("hola mundo secundaria")
  }

  if (logueado) {
    return (
      <div className="pagina">
        <div className="login">
          <img
            src="/imagenes/logo siwebgca.png"
            alt="Logo SIWEBGCA"
            className="logo"
          />

          <h1 className="teitul">
            Bienvenido al SIWEBGCA
          </h1>

          <p className="bienvenida">
            Has iniciado sesión correctamente.
          </p>

          <div className="botones-nivel">
            <button onClick={primaria}>PRIMARIA</button>
            <button onClick={secundaria}>SECUNDARIA</button>
          </div>

        </div>
      </div>
    )
  }

  return (
    <div className="pagina">
      <div className="login">
        <img
          src="/imagenes/logo siwebgca.png"
          alt="Logo SIWEBGCA"
          className="logo"
        />
        <h2 className="teitul">
          SISTEMA WEB DE GESTIÓN DE CALIFICACIONES
        </h2>
        <h4 className="teitulch">
          Colegio de las Américas
        </h4>
        <p className="bienvenida">
          Bienvenidos
        </p>

        <div className="fila">
          <label>USUARIO:</label>
          <input
            type="text"
            value={usuario}
            className="campo"
            onChange={(e) => setusuario(e.target.value)}
          />

        </div>

        <div className="fila">

          <label>CONTRASEÑA:</label>

          <input
            type="password"
            value={psswd}
            className="campo"
            onChange={(e) => setpsswd(e.target.value)}
          />

        </div>

        <button
          className="boton-entrar"
          onClick={boton}
        >
          ENTRAR
        </button>

      </div>

    </div>
  )
}

export default App