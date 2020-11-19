import React,{useState} from 'react'
import styled from 'styled-components'
import img from '../assets/login.jpg'
import logo from '../assets/logo.png'
import axios from 'axios'

const ContenedorLogin = styled.div`
  display:flex;
  flex-direction:row;
  width:100%;
  height:100vh;
  background-color:black;
`
const Fondo = styled.div`
  width:80%;
  height:100vh;
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
  height:100vh;
  background-color: #12161A;
  .logo{
    margin-left: 30px;
    margin-top: 20px;
  }
  #wrap{
    display:flex;
    flex-direction:column;
    color: white;
    margin-top:150px;
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
`
const Login = (props) => {
    const [usuario,setUsuario] = useState('');
    const [clave,setClave] = useState('');

    const handleLogin = async (event) => {
    event.preventDefault()
    if (!usuario) {
      alert("debe digitar usuario")
    }
    if (!clave) {
      alert("debe digitar clave")
    }
    await axios.post("https://hackathonredis.herokuapp.com/singin", {
      username: usuario,
      password: clave
    }).then(response => {
      console.log(props.setToken(response.data.token))
      if (response.data === "The email doesn't exists") {
        alert("The email doesn't exists")
      } else {
        if (response.data.auth === false) {
          alert("contraseña incorrecta")
        } else {
          alert("Login exitoso")         
          if (response.data.userType === "0") {
            props.history.push("/comprador")
          } else {
            props.history.push("/inicioProductor")
          }
        }
      }
    })
      .catch(e => console.error("problema fetching data", e));
  }
  return (
    <>
      <ContenedorLogin>
        <Fondo></Fondo>
        <Inicio>
          <img class="logo" src={logo} width="105" height="30" alt="Logo Use&Go"/>
          <div id="wrap">
            <form onSubmit={handleLogin}>
              <h1>Bienvenido de vuelta</h1>
              <label for="fname">Correo</label>
              <input onChange={(e) => setUsuario(e.target.value)} type="text" id="fname" name="correo" placeholder="Ingresa tu correo"></input>
              <label for="fname">Contraseña</label>
              <input onChange={(e) => setClave(e.target.value)} type="password" id="fname" name="correo" placeholder="Ingresa tu contraseña"></input>
              <input type="submit" value="Iniciar sesión"></input>
            </form>
          </div>
        </Inicio>
      </ContenedorLogin>
    </>
  )
}


export default Login