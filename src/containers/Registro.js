import React, { useState } from 'react'
import styled from 'styled-components'
import img from '../assets/registro.jpg'
import logo from '../assets/logo.png'
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom'

const ContenedorLogin = styled.div`
  display:flex;
  flex-direction:row;
  width:100%;
  height:110vh;
  background-color:black;
`
const Fondo = styled.div`
  width:80%;
  height:110vh;
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  background-color: rgba(0,0,0,0.8);
  filter:brightness(0.8);
`
const Inicio = styled.div`
  width:50%;
  height:110vh;
  background-color: #12161A;
  .logo{
    margin-left: 170px;
    margin-top: 27px;
  }
  #wrap{
    display:flex;
    flex-direction:column;
    color: white;
    justify-content:center;
    align-items:center;
  }
  form{
    display:flex;
    flex-direction:column;
    width:80%;
  }
  input[type=text], select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  }
  input[type=date], select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  }
  input[type=password], select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  }

  input[type=submit] {
    width: 100%;
    background-color: #0275d8;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  input[type=submit]:hover {
    background-color: #0275c0;
  }
  .row{
    display:flex;
    flex-direction:row;
  }
  .column{
    width:100%;
    display:flex;
    flex-direction:column;
  }
  .ml{
    margin-left:20px;
  }
  #boton{
    margin-bottom:20px;
  }
`
const Registro = (props) => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [sexo, setSexo] = useState('M');
  const [fecha, setFecha] = useState('');
  const [cedula, setCedula] = useState('');
  const [usuario, setUsuario] = useState('');
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [contraseña1, setContraseña1] = useState('');
  const [tipo, setTipo] = useState('0');
  const { push } = useHistory()

  const registrarse = async e => {
    e.preventDefault();
    if (!nombre) {
      alert("debe digitar nombre")
    }
    if (!apellido) {
      alert("debe digitar apellidos")
    }
    if (!sexo) {
      alert("debe digitar sexo")
    }
    if (!fecha) {
      alert("debe digitar fecha")
    }
    if (!cedula) {
      alert("debe digitar cedula")
    }
    if (!usuario) {
      alert("debe digitar usuario")
    }
    if (!correo) {
      alert("debe digitar correo")
    }
    if (!contraseña) {
      alert("debe digitar contraseña")
    }
    if (!tipo) {
      alert("debe digitar tipo")
    }
    if (contraseña !== contraseña1) {
      alert("Las claves no coinciden")
    } else {
      const res = await axios.post('https://use-and-go.herokuapp.com/singup', {
        name: nombre,
        lastname: apellido,
        gender: sexo,
        fecha_nacimiento: fecha,
        cedula: cedula,
        calificacion: "",
        username: usuario,
        password: contraseña,
        email: correo,
        type: tipo
      })
      if (res === "There was a problem registering your user") {
        alert("No se pudo registrar, vuelva a intentar")
      } else {
        alert("Registro exitoso")
        push("/")
      }
    }
  }
  return (
    <>
      <ContenedorLogin>
        <Fondo></Fondo>
        <Inicio>
          <div id="wrap">
            <form onSubmit={registrarse}>
              <div className="row">
                <h1>Bienvenido</h1>
                <img className="logo" src={logo} width="105" height="30" alt="Logo Use&Go" />
              </div>
              <div className="row">
                <div className="column">
                  <label>Nombre</label>
                  <input onChange={(e) => setNombre(e.target.value)} type="text" name="nombre" placeholder="Nombre"></input>
                </div>
                <div className="ml column">
                  <label>Apellidos</label>
                  <input onChange={(e) => setApellido(e.target.value)} type="text" name="apellidos" placeholder="Apellidos"></input>
                </div>
              </div>
              <div className="row">
                <div className="column">
                  <label>Sexo</label>
                  <select onChange={(e) => setSexo(e.target.value)} name="sexo">
                    <option value="M">Hombre</option>
                    <option value="F">Mujer</option>
                  </select>
                </div>
                <div className="ml column">
                  <label>Fecha</label>
                  <input onChange={(e) => setFecha(e.target.value)} type="date" id="start" name="trip-start"
                    min="1962-01-01" max="2100-11-20"
                  />
                </div>
              </div>
              <label>Cedula</label>
              <input onChange={(e) => setCedula(e.target.value)} type="text" name="cedula" placeholder="Cedula"></input>
              <label>Usuario</label>
              <input onChange={(e) => setUsuario(e.target.value)} type="text" name="usuario" placeholder="Nombre de usuario"></input>
              <label>Correo</label>
              <input onChange={(e) => setCorreo(e.target.value)} type="text" name="correo" placeholder="Correo"></input>
              <label>Contraseña</label>
              <input onChange={(e) => setContraseña(e.target.value)} type="password" name="contraseña" placeholder="Ingresa tu contraseña"></input>
              <label>Contraseña</label>
              <input onChange={(e) => setContraseña1(e.target.value)} type="password" name="contraseña2" placeholder="Repite la contraseña"></input>
              <label>Tipo de usuario</label>
              <select onChange={(e) => setTipo(e.target.value)} name="tipoUsuario">
                <option value="0">Cliente</option>
                <option value="1">Arrendatario</option>
              </select>
              <input id="boton" type="submit" value="Iniciar sesión"></input>
            </form>
            <Link to='/' style={{ color: 'white' }}>Ya tienes cuenta? Inicia sesión</Link>
          </div>
        </Inicio>
      </ContenedorLogin>
    </>
  )
}


export default Registro