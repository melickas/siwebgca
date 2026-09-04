import { useState } from "react"

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

  if (logueado) {
    return (
      <div className="login">
        <h1>Bienvenido al SIWEBGCA  {usuario}</h1>
        <p>Has iniciado sesión correctamente.</p>
        <button onClick={primaria}>PRIMARIA</button>
        <button onClick={secundaria}>SECUNDARIA</button>
      </div>
    )}
    function primaria(){
      alert("hola mundo primaria")
    }
    function secundaria(){
      alert("hola mundo primaria")
    }

  return (
    
    <div className="pagina">
      <div className="login">
      <h2>SISTEMA WEB DE GESTIÓN DE CALIFICACIONES</h2>

      <h4>Colegio de las Américas</h4>

      <p>Bienvenidos</p>

      <label>USUARIO:</label>

      <input
        type="text"
        value={usuario}
        onChange={(e) => setusuario(e.target.value)}
      />

      <br /><br />

      <label>CONTRASEÑA:</label>

      <input
        type="password"
        value={psswd}
        onChange={(e) => setpsswd(e.target.value)}
      />

      <br /><br />

      <button onClick={boton}>ENTRAR</button>
      </div>

    </div>
  )
}


export default App